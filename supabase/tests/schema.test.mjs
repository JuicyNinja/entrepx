// Runs every migration against an in-memory Postgres (PGlite) with Supabase auth stubbed, then
// exercises the business rules and row-level security. Run: npm run test:db
import { PGlite } from '@electric-sql/pglite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const M = ROOT + '/migrations/';
const db = new PGlite();
const shim = `
create role anon nologin; create role authenticated nologin; create role service_role nologin bypassrls;
create schema auth;
create table auth.users (id uuid primary key, email text);
create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub', true), '')::uuid $$;
grant usage on schema auth to anon, authenticated, service_role;
grant execute on function auth.uid() to anon, authenticated, service_role;
grant usage on schema public to anon, authenticated, service_role;
alter default privileges in schema public grant all on tables to anon, authenticated, service_role;
alter default privileges in schema public grant all on sequences to anon, authenticated, service_role;
alter default privileges in schema public grant execute on functions to anon, authenticated, service_role;
`;
await db.exec(shim);
for (const f of fs.readdirSync(M).sort()) { await db.exec(fs.readFileSync(M + f, 'utf8')); console.log('applied', f); }
await db.exec(fs.readFileSync(ROOT + '/seed.sql', 'utf8'));

const U = { tad:'00000000-0000-0000-0000-000000000001', kayla:'00000000-0000-0000-0000-000000000002', marcus:'00000000-0000-0000-0000-000000000003', lena:'00000000-0000-0000-0000-000000000004', dana:'00000000-0000-0000-0000-000000000010', brandon:'00000000-0000-0000-0000-000000000011', luis:'00000000-0000-0000-0000-000000000012', amy:'00000000-0000-0000-0000-000000000013' };
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) { pass++; console.log('  ok  ', m); } else { fail++; console.log('  FAIL', m); } };
async function as(user, fn) {   // user null = service role (no uid)
  await db.exec(user ? `set role authenticated; select set_config('request.jwt.claim.sub','${U[user]}',false);` : `reset role; select set_config('request.jwt.claim.sub','',false);`);
  try { return await fn(); } finally { await db.exec(`reset role; select set_config('request.jwt.claim.sub','',false);`); }
}
async function expectErr(p, re, m) { try { await p; ok(false, m + ' (no error)'); } catch (e) { ok(re.test(e.message), m + ' -> ' + e.message); } }
const q = async (s, p) => (await db.query(s, p)).rows;

// ---- data
for (const [k, v] of Object.entries(U)) await db.query('insert into auth.users (id, email) values ($1,$2)', [v, k + '@x.com']);
await db.exec(`insert into public.staff (user_id, full_name, email, role) values
 ('${U.tad}','Tad Timothy','tad@x.com','owner'),('${U.kayla}','Kayla Brooks','k@x.com','bdr'),
 ('${U.marcus}','Marcus Hale','m@x.com','sales_rep'),('${U.lena}','Lena Ford','l@x.com','coach');`);
const ins = async (o) => (await q(`insert into public.prospects (first_name,email,stage,user_id,bdr_id,sales_rep_id,coach_id,member_since)
 values ($1,$2,$3,$4,$5,$6,$7,$8) returning id`, [o.n, o.n + '@x.com', o.stage, o.user || null, o.bdr || null, o.rep || null, o.coach || null, o.since || null]))[0].id;
const dana = await ins({ n:'Dana', stage:'member', user:U.dana, coach:U.tad, since:'2026-08-08' });
const brandon = await ins({ n:'Brandon', stage:'discovery_complete', user:U.brandon, bdr:U.kayla, rep:U.marcus });
const luis = await ins({ n:'Luis', stage:'opportunity_presented', user:U.luis, rep:U.marcus });
const amy = await ins({ n:'Amy', stage:'opportunity_presented', user:U.amy, rep:U.marcus });
const newLead = await ins({ n:'Jordan', stage:'survey_complete' });
await db.query(`insert into public.owner_assessments (prospect_id,status) values ($1,'complete')`, [dana]);
const terr = async (name, status, owner, since) => (await q(`insert into public.territories (name,family,kind,status,owner_id,owned_since) values ($1,'exterior_care','linked_communities',$2,$3,$4) returning id`, [name, status, owner, since]))[0].id;
const ogden = await terr('Ogden Metro','owned',dana,'2026-08-08');
const dn = await terr('Davis North','available',null,null);
const ds = await terr('Davis South','available',null,null);
const slc = await terr('Salt Lake Central','available',null,null);
const be = await terr('Box Elder','available',null,null);
const adj = async (x, y) => db.query('insert into public.territory_adjacency (a,b) values (least($1::uuid,$2::uuid), greatest($1::uuid,$2::uuid))', [x, y]);
await adj(ogden, dn); await adj(ogden, be); await adj(dn, ds); await adj(ds, slc);

console.log('\nDisclosure gate');
await expectErr(q(`insert into public.territory_commitments (prospect_id,territory_id,deposit_cents) values ($1,$2,250000)`, [brandon, dn]), /No disclosure/, 'commit before any disclosure is refused');
await q(`insert into public.disclosures (prospect_id,document_version,delivered_at) values ($1,'2026.1', now() - interval '5 days')`, [brandon]);
await expectErr(q(`insert into public.territory_commitments (prospect_id,territory_id,deposit_cents) values ($1,$2,250000)`, [brandon, dn]), /Payments open/, 'commit inside the 14 days is refused');
await q(`update public.disclosures set delivered_at = now() - interval '15 days' where prospect_id = $1`, [brandon]);

console.log('\nCommitment next to an owner opens first right');
const c1 = (await q(`insert into public.territory_commitments (prospect_id,territory_id,deposit_cents) values ($1,$2,250000) returning id,status`, [brandon, dn]))[0];
ok(c1.status === 'awaiting_first_right', 'commitment waits on first right');
const off = (await q(`select * from public.first_right_offers where commitment_id=$1`, [c1.id]))[0];
ok(off && off.owner_id === dana && off.status === 'open', 'offer opened to Dana');
ok((await q(`select status from public.territories where id=$1`, [dn]))[0].status === 'first_right_open', 'territory shows first right open');
await expectErr(q(`insert into public.owner_options (territory_id,owner_id,fee_cents,ends_at,hard_stop_at) values ($1,$2,150000,now(),now())`, [dn, dana]), /not open to options|first-right/, 'owner cannot option while the offer is open');

console.log('\nProposal waits on first right');
const pr = (await q(`insert into public.proposals (prospect_id,territory_id,opportunity_name,class,units,program,startup_fee_cents,monthly_cents) values ($1,$2,'Window cleaning','starter','{Layton,Kaysville}','growth',4500000,150000) returning id`, [brandon, dn]))[0].id;
await expectErr(q(`update public.proposals set status='sent' where id=$1`, [pr]), /first-right offer is open/, 'cannot send while first right is open');

console.log('\nExtension: one, paid');
await expectErr(as('dana', () => q(`select public.extend_first_right($1, 50000)`, [off.id])), /payment system/, 'owner cannot self-record an extension');
await as(null, () => q(`select public.extend_first_right($1, 50000)`, [off.id]));
const off2 = (await q(`select due_at, opened_at from public.first_right_offers where id=$1`, [off.id]))[0];
ok(Math.round((off2.due_at - off2.opened_at) / 864e5) === 28, 'window now 28 days');
await expectErr(as(null, () => q(`select public.extend_first_right($1, 50000)`, [off.id])), /already been used/, 'second extension refused');

console.log('\nRLS checks');
const kaylaSees = await as('kayla', () => q(`select first_name from public.prospects order by 1`));
ok(JSON.stringify(kaylaSees.map(r => r.first_name)) === JSON.stringify(['Brandon', 'Jordan']), 'BDR sees her lead + unassigned early lead: ' + kaylaSees.map(r => r.first_name));
ok((await as('kayla', () => q(`select count(*)::int n from public.owner_assessments`)))[0].n === 0, 'BDR sees no assessments');
await expectErr(as('kayla', () => q(`update public.prospects set stage='proposal_sent' where id=$1`, [brandon])), /BDR cannot move/, 'BDR cannot move past discovery');
await expectErr(as('kayla', () => q(`update public.prospects set sales_rep_id=$2 where id=$1`, [brandon, U.lena])), /reassign/, 'BDR cannot reassign');
ok((await as('brandon', () => q(`select count(*)::int n from public.prospects`)))[0].n === 1, 'prospect sees only own row');
ok((await as('brandon', () => q(`select count(*)::int n from public.territories`)))[0].n === 5, 'prospect sees the map');
ok((await as('brandon', () => q(`select count(*)::int n from public.proposals`)))[0].n === 0, 'prospect cannot see a draft proposal');
ok((await as('marcus', () => q(`select first_name from public.prospects order by 1`))).length === 3, 'rep sees his 3 deals');
ok((await as('luis', () => q(`select count(*)::int n from public.first_right_offers`)))[0].n === 0, 'other prospects cannot see first-right offers');
ok((await as('dana', () => q(`select count(*)::int n from public.first_right_offers`)))[0].n === 1, 'Dana sees her offer');
await expectErr(as('brandon', () => q(`select public.answer_first_right($1, false)`, [off.id])), /Only the neighboring owner/, 'prospect cannot answer the offer');

console.log('\nDana passes -> commitment executes');
ok((await as('dana', () => q(`select public.answer_first_right($1, false) s`, [off.id])))[0].s === 'passed', 'Dana passes');
ok((await q(`select status from public.territory_commitments where id=$1`, [c1.id]))[0].status === 'executed', 'commitment executed');
ok((await q(`select status from public.territories where id=$1`, [dn]))[0].status === 'committed', 'territory committed');

console.log('\nProposal pricing guard');
await q(`update public.proposals set adjustment_cents=-700000 where id=$1`, [pr]);
await expectErr(q(`update public.proposals set status='sent' where id=$1`, [pr]), /Approvals first/, 'over 10% off needs approval');
await q(`insert into public.approvals (kind,prospect_id,proposal_id,title,status) values ('pricing_exception',$1,$2,'Discount','approved')`, [brandon, pr]);
await q(`update public.proposals set status='sent' where id=$1`, [pr]);
ok((await q(`select sent_at is not null s from public.proposals where id=$1`, [pr]))[0].s, 'approved discount sends');
ok((await as('brandon', () => q(`select count(*)::int n from public.proposals`)))[0].n === 1, 'prospect now sees the sent proposal');

console.log('\nNo neighboring owner -> executes at once');
await q(`insert into public.disclosures (prospect_id,document_version,delivered_at) values ($1,'2026.1', now() - interval '20 days')`, [luis]);
const c2 = (await q(`insert into public.territory_commitments (prospect_id,territory_id,deposit_cents) values ($1,$2,250000) returning status`, [luis, slc]))[0];
ok(c2.status === 'executed', 'Luis commitment executed immediately');
await expectErr(q(`insert into public.territory_commitments (prospect_id,territory_id,deposit_cents) values ($1,$2,250000)`, [brandon, slc]), /not available/, 'second commitment on a taken territory refused');

console.log('\nOwner claims -> territory goes to owner, deposit transfers');
await q(`insert into public.disclosures (prospect_id,document_version,delivered_at) values ($1,'2026.1', now() - interval '20 days')`, [amy]);
const c3 = (await q(`insert into public.territory_commitments (prospect_id,territory_id,deposit_cents) values ($1,$2,250000) returning id`, [amy, be]))[0];
const off3 = (await q(`select id from public.first_right_offers where commitment_id=$1`, [c3.id]))[0];
await as('dana', () => q(`select public.answer_first_right($1, true)`, [off3.id]));
const t3 = (await q(`select status, owner_id from public.territories where id=$1`, [be]))[0];
ok(t3.status === 'owned' && t3.owner_id === dana, 'Box Elder now owned by Dana');
ok((await q(`select status from public.territory_commitments where id=$1`, [c3.id]))[0].status === 'transferred', 'Amy deposit marked to transfer');

console.log('\nLapse');
await q(`update public.territories set status='available' where id=$1`, [ds]);
await q(`delete from public.territory_adjacency where a=least($1::uuid,$2::uuid) and b=greatest($1::uuid,$2::uuid)`, [dn, ds]);
await adj(ogden, ds);
const c4 = (await q(`insert into public.territory_commitments (prospect_id,territory_id,deposit_cents) values ($1,$2,250000) returning id`, [amy, ds]))[0];
await q(`update public.first_right_offers set due_at = now() - interval '1 minute' where commitment_id=$1`, [c4.id]);
await expectErr(as('dana', () => q(`select public.answer_first_right(id, true) from public.first_right_offers where commitment_id=$1`, [c4.id])), /closed/, 'cannot answer after the window');
ok((await q(`select private.lapse_first_rights() n`))[0].n === 1, 'lapse job processed 1');
ok((await q(`select status from public.territory_commitments where id=$1`, [c4.id]))[0].status === 'executed', 'lapsed -> commitment executed');

console.log('\nOwner options');
const t5 = await terr('Cache Valley','available',null,null);
await expectErr(q(`insert into public.owner_options (territory_id,owner_id,fee_cents,ends_at,hard_stop_at) values ($1,$2,150000,now(),now())`, [t5, brandon]), /existing owners only/, 'prospects cannot option');
const o1 = (await q(`insert into public.owner_options (territory_id,owner_id,fee_cents,ends_at,hard_stop_at) values ($1,$2,150000,now(),now()) returning id, ends_at, hard_stop_at, starts_at`, [t5, dana]))[0];
ok(Math.round((o1.hard_stop_at - o1.starts_at) / 864e5) >= 365, 'hard stop 12 months out');
ok((await q(`select status from public.territories where id=$1`, [t5]))[0].status === 'optioned', 'territory optioned');
await q(`update public.owner_options set status='released', closed_at=now() where id=$1`, [o1.id]);
ok((await q(`select status from public.territories where id=$1`, [t5]))[0].status === 'available', 'released -> available');
await expectErr(q(`insert into public.owner_options (territory_id,owner_id,fee_cents,ends_at,hard_stop_at) values ($1,$2,150000,now(),now())`, [t5, dana]), /60 days/, '60-day wait enforced');
await expectErr(as('dana', () => q(`insert into public.owner_options (territory_id,owner_id,fee_cents,ends_at,hard_stop_at) values ($1,$2,1,now(),now())`, [be, dana])), /row-level security|not open/, 'member cannot write options directly');

console.log('\nMessages');
await as('dana', () => q(`insert into public.messages (prospect_id,author_id,body) values ($1,$2,'How do I price gutter guards?')`, [dana, U.dana]));
await as('tad', () => q(`insert into public.messages (prospect_id,author_id,body) values ($1,$2,'Per foot, 2.5x labor.')`, [dana, U.tad]));
ok((await as('dana', () => q(`select count(*)::int n from public.messages`)))[0].n === 2, 'Dana sees her thread');
ok((await as('brandon', () => q(`select count(*)::int n from public.messages`)))[0].n === 0, 'others see nothing');
await expectErr(as('brandon', () => q(`insert into public.messages (prospect_id,author_id,body) values ($1,$2,'hi')`, [dana, U.brandon])), /row-level security/, 'cannot post into someone else\'s thread');

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);

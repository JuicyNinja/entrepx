import Link from "next/link";
import { getSession } from "../../../../lib/command/session";
import { STAGE_LABEL, TIER_LABEL, shortDate } from "../../../../lib/command/format";
import { Empty, LoadError } from "../Empty";

export const metadata = { title: "Contacts" };

export default async function Contacts({ searchParams }) {
  const { supabase } = await getSession();
  const { q = "" } = await searchParams;
  const term = q.trim().slice(0, 80);

  let query = supabase.from("prospects")
    .select("id, first_name, last_name, email, phone, stage, latest_score, latest_tier, business_name, created_at")
    .order("created_at", { ascending: false }).limit(200);
  if (term) {
    const like = `%${term.replace(/[%_,()]/g, " ")}%`;
    query = query.or(`first_name.ilike.${like},last_name.ilike.${like},email.ilike.${like},phone.ilike.${like},business_name.ilike.${like}`);
  }
  const { data, error } = await query;

  return (
    <>
      <div className="cmd-head">
        <div><div className="cmd-lbl">Everyone EntrepX works with</div><h1 className="cmd-h1">Contacts</h1></div>
      </div>
      <form className="cmd-row" role="search">
        <input className="cmd-input" style={{ maxWidth: 420 }} name="q" defaultValue={term} placeholder="Search name, email, phone, business" aria-label="Search contacts" />
        <button className="cmd-btn">Search</button>
      </form>
      {error && <LoadError error={error} />}
      {data?.length ? (
        <div className="cmd-card flush">
          <div className="cmd-scroll">
            <table className="cmd-t">
              <thead><tr><th>Name</th><th>Stage</th><th>Score</th><th>Business</th><th>Email</th><th>Added</th></tr></thead>
              <tbody>
                {data.map((p) => (
                  <tr key={p.id}>
                    <td><Link className="cmd-link" href={`/command/contacts/${p.id}`}>{p.first_name} {p.last_name}</Link></td>
                    <td>{STAGE_LABEL[p.stage]}</td>
                    <td>{p.latest_tier ? <span className="cmd-chip">{TIER_LABEL[p.latest_tier]} {p.latest_score}</span> : "—"}</td>
                    <td>{p.business_name ?? "—"}</td>
                    <td>{p.email}</td>
                    <td>{shortDate(p.created_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : term ? (
        <Empty title={`No one matches "${term}".`}>Search covers name, email, phone and business.</Empty>
      ) : (
        !error && <Empty title="No contacts yet.">People appear here as soon as they finish the survey and leave their details.</Empty>
      )}
    </>
  );
}

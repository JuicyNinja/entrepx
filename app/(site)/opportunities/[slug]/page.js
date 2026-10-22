import Link from "next/link";
import { notFound } from "next/navigation";
import Next from "../../../../components/Next";
import { opportunities, tierName } from "../../../../components/opportunities";

const usd = (n) => "$" + Math.round(n).toLocaleString("en-US");
const k = (n) => "$" + (n >= 1000 ? Math.round(n / 1000) + "K" : n);

export function generateStaticParams() {
  return opportunities.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const o = opportunities.find((x) => x.slug === slug);
  return o ? { title: `${o.name} Business`, description: `${o.fit}. Upfront ${k(o.lo * 1000)}–${k(o.hi * 1000)}, about ${usd(o.ticket)} per job.` } : {};
}

export default async function Opportunity({ params }) {
  const { slug } = await params;
  const o = opportunities.find((x) => x.slug === slug);
  if (!o) notFound();
  const adds = o.adds.map((s) => opportunities.find((x) => x.slug === s)).filter(Boolean);
  const sameFamily = opportunities.filter((x) => x.family === o.family && x.slug !== o.slug).slice(0, 6);
  return (
    <>
      <section className="band-vault page-hero">
        <div className="wrap">
          <p className="small" style={{ color: "var(--on-vault-muted)", marginBottom: "var(--space-4)" }}>
            <Link href="/opportunities" style={{ color: "var(--on-vault-muted)" }}>Opportunities</Link> / <Link href={`/opportunities?family=${encodeURIComponent(o.family)}`} style={{ color: "var(--on-vault-muted)" }}>{o.family}</Link>
          </p>
          <span className={`tier t${o.tier}`}>{tierName(o.tier)}</span>
          <h1 className="display" style={{ fontSize: "clamp(38px,6vw,60px)", maxWidth: "18ch", marginTop: "var(--space-3)" }}>{o.name}</h1>
          <p className="lead">Fits best: {o.fit.charAt(0).toLowerCase() + o.fit.slice(1)}.</p>
          <div className="actions">
            <Link className="btn btn-primary" href="/survey">Am I a fit? Take the survey</Link>
            <Link className="btn btn-on-vault" href="/book">Talk about this business</Link>
          </div>
        </div>
      </section>

      <section className="band-sand" style={{ paddingBlock: 48 }}>
        <div className="wrap facts">
          <div className="fig"><span className="lbl">Upfront cost</span><span className="val">{o.lo === o.hi ? k(o.lo * 1000) : `${k(o.lo * 1000)}–${k(o.hi * 1000)}`}</span><span className="sub">excl. vehicle and startup fee</span></div>
          <div className="fig"><span className="lbl">Price per job</span><span className="val">{usd(o.ticket)}</span><span className="sub">{o.ticketText}</span></div>
          <div className="fig"><span className="lbl">Monthly sales*</span><span className="val">{k(o.monthly)}</span><span className="sub">~{o.jobs} {o.unit} a month{o.months < 12 ? " in season" : ""}</span></div>
          <div className="fig eq"><span className="lbl">Est. run rate*</span><span className="val">{k(o.runRate)}</span><span className="sub">{o.months} active months · {o.mlo === o.mhi ? o.mlo : `${o.mlo}–${o.mhi}`}% gross margin</span></div>
        </div>
      </section>

      <section>
        <div className="wrap grid g2" style={{ gap: "var(--space-6)" }}>
          <div className="card"><h2 className="h2">Pros</h2><ul className="check">{o.pros.map((p) => <li key={p}><span className="yes">✓</span><span>{p}</span></li>)}</ul></div>
          <div className="card"><h2 className="h2">Cons</h2><ul className="check">{o.cons.map((p) => <li key={p}><span className="no">!</span><span>{p}</span></li>)}</ul></div>
        </div>
      </section>

      <section className="band-sand">
        <div className="wrap">
          <header className="head"><span className="eyebrow">Your first three years</span><h2 className="h1">What to expect</h2></header>
          <ol className="years">
            {o.years.map((y, i) => (<li key={i}><span className="lbl">Year {i + 1}</span><p>{y}</p></li>))}
          </ol>
          <p className="fine" style={{ marginTop: "var(--space-5)" }}>A typical path, not a promise. Your Owner Assessment and 3-year playbook set your actual plan.</p>
        </div>
      </section>

      <section>
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div>
            <span className="eyebrow">Natural add-ons</span>
            <h2 className="h1">Sell more to the same customers</h2>
            <div className="addlist" style={{ marginTop: "var(--space-5)" }}>
              {adds.map((a) => <Link key={a.slug} className="pill" href={`/opportunities/${a.slug}`}>{a.name}</Link>)}
            </div>
            <h3 className="h3" style={{ marginTop: "var(--space-6)" }}>Growth path</h3>
            <p style={{ marginTop: "var(--space-2)" }}>{o.path}.</p>
          </div>
          <div className="card" style={{ gap: "var(--space-3)" }}>
            <h2 className="h3">The details</h2>
            <dl className="breakdown">
              <dt>Vehicle</dt><dd style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>{o.vehicle}</dd>
              <dt>Repeat customers</dt><dd style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>{o.repeat}</dd>
              <dt>Licensing</dt><dd style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>{o.license}</dd>
              <dt>Season</dt><dd style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>{o.season}</dd>
              <dt>Runs on</dt><dd style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>ProTrak {o.trak}</dd>
              {o.franchise && (<><dt>Typical franchise</dt><dd style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>{o.franchise}</dd></>)}
            </dl>
            <p className="small">{o.note}</p>
            {o.deepDive && <Link className="btn btn-secondary btn-small" href={o.deepDive}>See the payback example</Link>}
          </div>
        </div>
      </section>

      {sameFamily.length > 0 && (
        <section className="band-sand">
          <div className="wrap">
            <header className="head"><span className="eyebrow">{o.family}</span><h2 className="h1">Related businesses</h2></header>
            <div className="addlist">{sameFamily.map((a) => <Link key={a.slug} className="pill" href={`/opportunities/${a.slug}`}>{a.name} · {tierName(a.tier)}</Link>)}</div>
          </div>
        </section>
      )}

      <section>
        <div className="wrap">
          <p className="fine">
            *Monthly sales and run rate are illustrative industry benchmarks for one owner-operated crew at steady volume: price per job ×
            typical jobs a month ({o.jobs}), times {o.months} active months. They are revenue, not profit, and are not projections, promises or
            EntrepX member results. Basis: {o.basis === "Estimate" ? "EntrepX working estimate" : o.basis === "Sourced" ? "published industry sources" : "EntrepX example data"}.
          </p>
        </div>
      </section>

      <Next title={`See if ${o.name.toLowerCase().replace(/ \(.*\)/, "")} fits you`} href="/book" label="Book a discovery session" />
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Next from "../../../components/Next";
import { industries, payback, usd } from "../../../components/content";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  return ind ? { title: `${ind.name} Business`, description: ind.tagline } : {};
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) notFound();
  const p = payback(ind);
  const others = industries.filter((i) => i.slug !== slug);
  return (
    <>
      <section className="hero" style={{ minHeight: "min(640px,85vh)" }}>
        <div className="hero-media" aria-hidden="true">
          {ind.video ? (
            <video autoPlay muted loop playsInline preload="metadata" poster={ind.image}><source src={ind.video} type="video/mp4" /></video>
          ) : (
            <Image src={ind.image} alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
          )}
        </div>
        <div className="wrap">
          <span className="eyebrow">Industries · {ind.name}</span>
          <h1 className="display" style={{ fontSize: "clamp(42px,6vw,64px)", maxWidth: "14ch" }}>Own a {ind.name.toLowerCase()} business</h1>
          <p className="lead">{ind.tagline}</p>
          <div className="actions"><Link className="btn btn-primary" href="/survey">Am I a fit? Take the survey</Link><Link className="btn btn-on-vault" href="/book">Talk about this industry</Link></div>
        </div>
      </section>

      <section className="band-sand" style={{ paddingBlock: 48 }}>
        <div className="wrap grid g4">
          <div className="fig"><span className="lbl">EntrepX startup</span><span className="val">{usd(ind.exStartup)}</span></div>
          <div className="fig"><span className="lbl">Average job</span><span className="val">{usd(ind.ticket)}</span></div>
          <div className="fig"><span className="lbl">Gross margin</span><span className="val">{Math.round(ind.margin * 100)}%</span><span className="sub">owner-operator</span></div>
          <div className="fig eq"><span className="lbl">Payback (example)</span><span className="val">Month {p.exMonth}</span><span className="sub">vs. month {p.frMonth} franchised</span></div>
        </div>
      </section>

      <section>
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div>
            <span className="eyebrow">Is it a fit?</span>
            <h2 className="h1">Who does well in this business</h2>
            <ul className="check" style={{ marginTop: "var(--space-5)" }}>{ind.fit.map((f) => <li key={f}><span className="yes">✓</span><span>{f}</span></li>)}</ul>
            <p className="small" style={{ marginTop: "var(--space-4)" }}>Your survey and Owner Assessment confirm the fit, the business size and the role to hire first.</p>
          </div>
          <div className="grid g2" style={{ gap: "var(--space-4)" }}>
            <div className="card"><h3 className="h3">Startup fee covers</h3><ul><li>Brand, website and launch marketing</li><li>Sales system and software</li><li>Training and business setup</li></ul></div>
            <div className="card"><h3 className="h3">Separate</h3><ul><li>Vehicle</li><li>Major equipment</li><li>Materials for each job</li></ul><Link href="/partners" className="small">Financing through partners</Link></div>
          </div>
        </div>
      </section>

      <section className="band-sand">
        <div className="wrap">
          <header className="head"><span className="eyebrow">Faster payback</span><h2 className="h1">Startup capital back by month {p.exMonth}</h2><p className="lead">{ind.note}</p></header>
          <div className="compare-wrap">
            <table className="compare">
              <thead><tr><th scope="col">Assumption</th><th scope="col" className="us">EntrepX</th><th scope="col" className="them">Typical franchise</th></tr></thead>
              <tbody>
                <tr><th scope="row">Startup fee</th><td className="us">{usd(ind.exStartup)}</td><td className="them">{usd(ind.frStartup)}</td></tr>
                <tr><th scope="row">Royalty</th><td className="us">$0</td><td className="them">{Math.round(ind.royalty * 100)}% of revenue</td></tr>
                <tr><th scope="row">Monthly fees</th><td className="us">$1,500</td><td className="them">{usd(ind.frFees)}</td></tr>
                <tr><th scope="row">Other fixed costs</th><td className="us">{usd(ind.otherFixed)}/mo</td><td className="them">{usd(ind.otherFixed)}/mo</td></tr>
                <tr><th scope="row">Jobs per month, months 1–12</th><td className="us" colSpan={2}>{ind.ramp.join(", ")}</td></tr>
                <tr><th scope="row">Cash position at month 12</th><td className="us">{usd(p.ex12)}</td><td className="them">{usd(p.fr12)}</td></tr>
              </tbody>
            </table>
          </div>
          <p className="fine" style={{ marginTop: "var(--space-4)" }}>Illustrative example for perspective only, using sample job counts and owner-operator gross margins that do not deduct owner pay. Not a projection or promise of earnings. Some photos are illustrative.</p>
        </div>
      </section>

      {others.length > 0 && (
        <section>
          <div className="wrap">
            <header className="head"><h2 className="h1">Other businesses we build</h2></header>
            <div className="grid g3">
              {others.map((o) => (
                <Link key={o.slug} className="card" href={`/industries/${o.slug}`} style={{ textDecoration: "none", padding: 0, overflow: "hidden" }}>
                  <div className="photo" style={{ aspectRatio: "3 / 2", borderRadius: 0 }}><Image src={o.image} alt={o.alt} width={1248} height={832} /></div>
                  <h3 className="h3" style={{ padding: "var(--space-5)" }}>{o.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Next title="See if you’re a fit for this business" href="/book" label="Book a discovery session" />
    </>
  );
}

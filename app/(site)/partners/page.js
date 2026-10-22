import Next from "../../../components/Next";
import { partners, stages } from "../../../components/content";

export const metadata = { title: "Partner Network", description: "Marketing, print and promo, ops software, insurance billing, tax, bookkeeping, banking, financing and wealth strategy for EntrepX owners." };

export default function Partners() {
  return (
    <>
      <section className="band-vault page-hero">
        <div className="wrap">
          <span className="eyebrow">Partner network</span>
          <h1 className="display" style={{ fontSize: "clamp(42px,6vw,64px)", maxWidth: "15ch" }}>One membership. A whole bench of experts.</h1>
          <p className="lead">Marketing, print, ops software, insurance billing, tax, bookkeeping, banking, financing and wealth strategy, from partners who already know how EntrepX businesses run.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <header className="head"><span className="eyebrow">Core partners</span><h2 className="h1">Built into your membership</h2></header>
          <div className="grid g2">
            {partners.map(([n, c, p]) => (
              <div className="card" key={n} style={{ gap: "var(--space-3)" }}><div className="logo-box">{n}</div><span className="lbl">{c}</span><p>{p}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="band-sand">
        <div className="wrap">
          <header className="head"><span className="eyebrow">By stage</span><h2 className="h1">The right expert at each stage of ownership</h2><p className="lead">Your playbook flags what you’ll need before you need it.</p></header>
          <div className="grid g4">
            {stages.map(([h, items]) => (<div className="card" key={h}><span className="lbl">{h}</span><ul>{items.map((x) => <li key={x}>{x}</li>)}</ul></div>))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <header className="head"><span className="eyebrow">How it works</span><h2 className="h1">Your COO makes the introduction</h2></header>
          <div className="grid g3">
            <div className="card"><span className="num">1</span><h3 className="h3">Your playbook flags the need</h3><p className="small">Books getting messy, time to finance a truck, time to plan an exit.</p></div>
            <div className="card"><span className="num">2</span><h3 className="h3">We connect you</h3><p className="small">One warm introduction, with your numbers shared only with your OK.</p></div>
            <div className="card"><span className="num">3</span><h3 className="h3">You work with the expert</h3><p className="small">Your EntrepX team stays in the loop so the plan stays whole.</p></div>
          </div>
        </div>
      </section>

      <Next title="Where all of this leads: a business worth more" href="/build-value" label="How we build value" />
    </>
  );
}

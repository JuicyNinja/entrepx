import Link from "next/link";
import Image from "next/image";
import Next from "../../../components/Next";
import ValueCalc from "../../../components/ValueCalc";

export const metadata = { title: "Build Value", description: "Build a business you can grow, scale, pass on to family or sell. How EntrepX builds the things buyers pay more for." };

const drivers = [
  ["Runs without the owner", "Your fractional COO, a hiring plan, and a team with KPIs from year 2."],
  ["Documented systems", "SOPs and software from day one, not written the month before a sale."],
  ["Clean books", "Bookkeeping and tax partners, with monthly numbers in your dashboard."],
  ["Recurring and repeat revenue", "CRM, follow-up and maintenance plans built into the sales system."],
  ["A brand you can transfer", "You own it outright. No franchisor approval, no transfer fee."],
  ["A growth story", "Three years of tracked results against a written playbook."],
];

const paths = [
  ["Grow", "More crews, more services", "Financing, hiring and marketing partners."],
  ["Scale", "New territory or a second brand", "The same systems, launched again."],
  ["Pass it on", "A business your family can run", "Succession, estate and wealth strategy partners."],
  ["Exit", "Sell to anyone, anytime", "Valuation, exit and tax planning partners."],
];

export default function BuildValue() {
  return (
    <>
      <section className="hero" style={{ minHeight: "min(680px,88vh)" }}>
        <div className="hero-media" aria-hidden="true">
          <Image src="/media/value-handoff.jpg" alt="" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "70% 50%" }} />
        </div>
        <div className="wrap">
          <span className="eyebrow">Build value</span>
          <h1 className="display" style={{ fontSize: "clamp(42px,6vw,68px)", maxWidth: "15ch" }}>Build it to be worth more. Then choose what’s next.</h1>
          <p className="lead">Grow it, scale it, hand it to your family or sell it. We build the owner and the business so every one of those doors is open.</p>
          <div className="actions"><Link className="btn btn-primary" href="/survey">Take the free survey</Link><a className="btn btn-on-vault" href="#value">How value works</a></div>
        </div>
      </section>

      <section id="value">
        <div className="wrap">
          <header className="head">
            <span className="eyebrow">How businesses are valued</span>
            <h2 className="h1">Same profit. Different multiple. Very different check.</h2>
            <p className="lead">Buyers usually price a small business as a multiple of its earnings (EBITDA). What moves the multiple is how well the business runs without you.</p>
          </header>
          <ValueCalc />
        </div>
      </section>

      <section className="band-sand">
        <div className="wrap">
          <header className="head"><span className="eyebrow">What buyers pay more for</span><h2 className="h1">Every driver of the multiple is something we build</h2></header>
          <div className="compare-wrap">
            <table className="drivers">
              <thead><tr><th scope="col">What raises the multiple</th><th scope="col">How EntrepX builds it</th></tr></thead>
              <tbody>{drivers.map(([a, b]) => (<tr key={a}><th scope="row">{a}</th><td>{b}</td></tr>))}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <header className="head"><span className="eyebrow">Your options</span><h2 className="h1">Four ways forward, all open</h2></header>
          <div className="grid g4">
            {paths.map(([l, h, p]) => (<div className="card" key={l}><span className="lbl">{l}</span><h3 className="h3">{h}</h3><p className="small">{p}</p></div>))}
          </div>
          <div className="actions"><Link className="btn btn-secondary" href="/partners">The partners for each path</Link></div>
        </div>
      </section>

      <section className="band-sand">
        <div className="wrap">
          <header className="head"><span className="eyebrow">Selling</span><h2 className="h1">Selling a franchise vs. selling your EntrepX business</h2></header>
          <div className="grid g2">
            <div className="card"><h3 className="h3">Typical franchise</h3><ul><li>The franchisor must approve the buyer</li><li>A transfer fee</li><li>The buyer signs a new franchise agreement</li><li>Often a right of first refusal</li></ul></div>
            <div className="card chosen"><h3 className="h3">EntrepX</h3><ul><li>Sell to anyone</li><li>No transfer fee</li><li>The brand goes with the business</li><li>Three years of systems and numbers to show a buyer</li></ul></div>
          </div>
          <p className="fine" style={{ marginTop: "var(--space-5)" }}>Franchise transfer terms vary; see Item 17 of each Franchise Disclosure Document.</p>
        </div>
      </section>

      <Next title="Compare it, number by number, to a franchise" href="/entrepx-vs-franchise" label="Run the royalty calculator" />
    </>
  );
}

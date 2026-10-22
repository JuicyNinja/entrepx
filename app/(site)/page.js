import Link from "next/link";
import Image from "next/image";
import MiniCalc from "../../components/MiniCalc";
import { compareRows, steps, terms, team, tech, partners, industries, payback, usd } from "../../components/content";

const roads = [
  ["Go it alone", [["yes", "You own it all"], ["no", "No system, no playbook"], ["no", "Every mistake is yours to find"]]],
  ["Buy a franchise", [["yes", "A proven system"], ["no", "6–9% royalty, forever"], ["no", "10-year contract, their brand"]]],
  ["Build with EntrepX", [["yes", "A proven system and a leadership team"], ["yes", "Your brand, 100% equity"], ["yes", "$1,500/mo flat, 12-month terms"]]],
];

const segments = [
  ["First-time owner", "You want your own business and a system to do it right.", "/media/seg-first.jpg", "A tradeswoman in an apron standing in her workshop doorway"],
  ["Shopping franchises", "You like the system. You don’t like the royalty.", "/media/seg-shopper.jpg", "A couple reviewing business brochures and a spreadsheet at the kitchen table"],
  ["Already own a business", "You want the systems, team and tech to scale it.", "/media/seg-owner.jpg", "A business owner standing between two white service trucks"],
];

const faq = [
  ["Is EntrepX a franchise?", "No. You own your brand and business outright and pay no royalties."],
  ["What does $1,500 a month include?", "A fractional CMO, CTO and COO working as one team, all of your tech run for you, coaching against your 3-year playbook, and the partner network."],
  ["What does the startup fee cover?", "Everything to get you to revenue: brand, systems, software, training and launch. Vehicles and major equipment are separate. It’s set case by case."],
  ["What happens after 12 months?", "The agreement renews for another 12 months unless you cancel. If you leave, your brand leaves with you after a small buyout."],
  ["Can I sell my business?", "Anytime, to anyone. No franchisor approval and no transfer fee."],
];

export default function Home() {
  const examples = industries.map((i) => ({ ...i, p: payback(i) }));
  return (
    <>
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="metadata" poster="/media/hero-owner-van.jpg">
            <source src="/media/hero-loop.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="wrap">
          <span className="ask">Want to start a business?</span>
          <h1 className="display" style={{ maxWidth: "14ch" }}>
            The smartest business owners choose <span className="x">EntrepX.</span>
          </h1>
          <p className="lead" style={{ maxWidth: "58ch" }}>
            A fractional CMO, CTO and COO, all of your tech, and a network of partners, built around a business you own outright
            and can grow, pass on or sell. No royalties. No 10-year contract.
          </p>
          <div className="actions">
            <Link className="btn btn-primary" href="/survey">Am I ready? Take the 5-minute survey</Link>
            <a className="btn btn-on-vault" href="#how">See how it works</a>
          </div>
          <ul className="strip">
            {terms.map(([v, l]) => (<li key={l}><b>{v}</b><span>{l}</span></li>))}
          </ul>
        </div>
      </section>

      <section className="band-sand">
        <div className="wrap">
          <header className="head">
            <span className="eyebrow">Three ways to start</span>
            <h2 className="h1">Go it alone, buy a franchise, or build with EntrepX.</h2>
          </header>
          <div className="grid g3">
            {roads.map(([h, rows], i) => (
              <div className={i === 2 ? "card chosen" : "card"} key={h}>
                <h3 className="h2">{h}</h3>
                <ul className="check" style={{ marginTop: "var(--space-3)" }}>
                  {rows.map(([k, t]) => (<li key={t}><span className={k}>{k === "yes" ? "✓" : "✗"}</span><span>{t}</span></li>))}
                </ul>
              </div>
            ))}
          </div>
          <div className="actions"><Link className="btn btn-secondary" href="/entrepx-vs-franchise">Compare EntrepX and franchising</Link></div>
        </div>
      </section>

      <section id="how">
        <div className="wrap">
          <header className="head">
            <span className="eyebrow">How it works</span>
            <h2 className="h1">From idea to open for business in five steps</h2>
            <p className="lead">We find the right business for you, build it with you, and coach you until it runs without you.</p>
          </header>
          <ol className="grid g5" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {steps.map(([h, p, w], i) => (
              <li className="stepcard" key={h}><span className="num">{i + 1}</span><span className="lbl">{w}</span><h3 className="h3">{h}</h3><p>{p}</p></li>
            ))}
          </ol>
          <div className="actions"><Link className="btn btn-secondary" href="/how-it-works">See the full process</Link></div>
        </div>
      </section>

      <section className="band-sand">
        <div className="wrap"><MiniCalc /></div>
      </section>

      <section>
        <div className="wrap">
          <header className="head">
            <span className="eyebrow">What $1,500 a month buys</span>
            <h2 className="h1">A fractional CMO, CTO and COO, working as one team</h2>
            <p className="lead">Bought separately, fractional executives run $2,500 a month each. Members get all three, plus every piece of tech run for them.</p>
          </header>
          <div className="grid g3">
            {team.map(([role, h, items]) => (
              <div className="card" key={role}><span className="lbl">{role}</span><h3 className="h3">{h}</h3><ul>{items.slice(0, 4).map((x) => <li key={x}>{x}</li>)}</ul></div>
            ))}
          </div>
          <div className="callout"><p><b>$7,500/mo</b> of leadership bought separately. <b>$1,500/mo</b> as a member, tech included.</p><Link className="btn btn-secondary" href="/what-you-get">Everything that’s included</Link></div>
          <div className="pills">{tech.map(([t]) => <span className="pill" key={t}>{t}</span>)}</div>
        </div>
      </section>

      <section className="band-sand">
        <div className="wrap">
          <header className="head">
            <span className="eyebrow">Partner network</span>
            <h2 className="h1">The rest of your business, already handled</h2>
            <p className="lead">Vetted partners for the work owners usually piece together alone.</p>
          </header>
          <div className="grid g4">
            {partners.map(([n, c]) => (<div className="card" key={n}><div className="logo-box">{n}</div><span className="lbl">{c}</span></div>))}
          </div>
          <div className="pills">{["Tax services", "Wealth strategy", "Bookkeeping", "Banking", "Financing", "Legal", "Insurance", "HR and payroll"].map((t) => <span className="pill" key={t}>{t}</span>)}</div>
          <div className="actions"><Link className="btn btn-secondary" href="/partners">Meet the partner network</Link></div>
        </div>
      </section>

      <section className="band-vault">
        <div className="wrap split">
          <div>
            <span className="eyebrow">Build value</span>
            <h2 className="h1">Build a business you can grow, pass on or sell</h2>
            <p className="lead">Buyers pay more for businesses that run without the owner: documented systems, clean books, steady revenue and a team. That’s what we build from day one.</p>
            <div className="grid g2" style={{ marginTop: "var(--space-6)", gap: "var(--space-4)" }}>
              {[["Grow", "More crews and services"], ["Scale", "New territory, a second brand"], ["Pass it on", "A business your family can run"], ["Exit", "Sell to anyone, anytime"]].map(([h, p]) => (
                <div className="card" key={h}><h3 className="h3">{h}</h3><p className="small">{p}</p></div>
              ))}
            </div>
            <div className="actions"><Link className="btn btn-on-vault" href="/build-value">How we build value</Link></div>
          </div>
          <div className="photo" style={{ aspectRatio: "4 / 5" }}>
            <Image src="/media/value-handoff.jpg" alt="An owner handing the keys of his shop to his daughter" width={1376} height={768} style={{ objectPosition: "75% 50%" }} />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <header className="head">
            <span className="eyebrow">Faster payback, more cash in your pocket</span>
            <h2 className="h1">Businesses we build</h2>
          </header>
          <div className="grid g2">
            {examples.map((e) => (
              <Link className="card" key={e.slug} href={`/industries/${e.slug}`} style={{ textDecoration: "none", padding: 0, overflow: "hidden" }}>
                <div className="photo" style={{ aspectRatio: "3 / 2", borderRadius: 0 }}><Image src={e.image} alt={e.alt} width={1248} height={832} /></div>
                <div style={{ padding: "var(--space-5)", display: "grid", gap: "var(--space-2)" }}>
                  <h3 className="h2">{e.name}</h3>
                  <p className="small">{usd(e.exStartup)} startup · startup capital back by month {e.p.exMonth} vs. month {e.p.frMonth} franchised</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="actions"><Link className="btn btn-secondary" href="/opportunities">Browse all 73 business opportunities</Link></div>
          <p className="fine" style={{ marginTop: "var(--space-5)" }}>Illustrative examples using sample job counts, average tickets and margins. Not a projection of your earnings.</p>
        </div>
      </section>

      <section className="band-sand">
        <div className="wrap">
          <header className="head"><span className="eyebrow">Who it’s for</span><h2 className="h1">Three kinds of owners start here</h2></header>
          <div className="grid g3">
            {segments.map(([h, p, img, alt], i) => (
              <div className="card" key={h} style={{ padding: 0, overflow: "hidden" }}>
                <div className="photo" style={{ aspectRatio: "4 / 3", borderRadius: 0 }}><Image src={img} alt={alt} width={1184} height={896} /></div>
                <div style={{ padding: "var(--space-5)", display: "grid", gap: "var(--space-3)" }}>
                  <h3 className="h3">{h}</h3><p className="small">{p}</p>
                  <Link className="btn btn-secondary" href={`/survey?start=${i}`}>Start here</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <header className="head"><span className="eyebrow">Us vs. them</span><h2 className="h1">Everything a franchise gives you, minus the franchisor</h2></header>
          <div className="compare-wrap">
            <table className="compare">
              <thead><tr><th scope="col"></th><th scope="col" className="us">EntrepX</th><th scope="col" className="them">Typical franchise</th></tr></thead>
              <tbody>
                {compareRows.slice(0, 7).map(([r, us, them]) => (
                  <tr key={r}><th scope="row">{r}</th><td className="us"><span className="mark">✓</span>{us}</td><td className="them"><span className="mark">—</span>{them}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="actions"><Link className="btn btn-secondary" href="/entrepx-vs-franchise">Full comparison and royalty calculator</Link></div>
        </div>
      </section>

      <section className="band-sand" id="faq">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <header className="head"><span className="eyebrow">Questions</span><h2 className="h1">The five we hear first</h2></header>
          <div className="faq">
            {faq.map(([q, a], i) => (<details key={q} open={i === 0}><summary>{q}</summary><p>{a}</p></details>))}
          </div>
        </div>
      </section>

      <section className="band-vault">
        <div className="wrap" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span className="eyebrow">The mission</span>
          <h2 className="display" style={{ fontSize: "clamp(40px,6vw,68px)" }}>We build owners, who build <span className="x">empires.</span></h2>
          <p className="lead">Find out in five minutes if you’re ready. Free, no credit card, no obligation.</p>
          <div className="actions" style={{ justifyContent: "center" }}>
            <Link className="btn btn-primary" href="/survey">Take the free survey</Link>
            <Link className="btn btn-on-vault" href="/book">Book a discovery session</Link>
          </div>
        </div>
      </section>
    </>
  );
}

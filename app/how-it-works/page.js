import Link from "next/link";
import Image from "next/image";
import Next from "../../components/Next";
import { steps, playbook } from "../../components/content";

export const metadata = { title: "How It Works", description: "From readiness survey to a business that runs without you: the EntrepX process, step by step." };

const gets = [
  "Your score, tier, strengths and gaps, on the spot.",
  "A straight answer on fit, and which businesses suit you.",
  "Your owner profile, business size and the role to hire first.",
  "A business ready to take customers, under your name.",
  "Accountability, a network and a plan to build value you can sell.",
];

export default function HowItWorks() {
  return (
    <>
      <section className="band-vault page-hero">
        <div className="wrap split">
          <div>
            <span className="eyebrow">How it works</span>
            <h1 className="display" style={{ fontSize: "clamp(42px,6vw,64px)" }}>From first question to open for business</h1>
            <p className="lead">We assess you, place you in a business you can carry through year one, build it with you in about 30 days, and coach you for three years. You keep 100%.</p>
            <div className="actions"><Link className="btn btn-primary" href="/survey">Take the free survey</Link><a className="btn btn-on-vault" href="#steps">The five steps</a></div>
          </div>
          <div className="photo" style={{ aspectRatio: "16 / 10" }}>
            <Image src="/media/how-plan.jpg" alt="A 30-60-90 day plan notebook and a dashboard tablet on a truck tailgate" width={1376} height={768} priority />
          </div>
        </div>
      </section>

      <section id="steps">
        <div className="wrap">
          <header className="head"><span className="eyebrow">The process</span><h2 className="h1">What happens at each step, and what you walk away with</h2></header>
          <ol className="stepline">
            {steps.map(([h, p, w], i) => (
              <li key={h}>
                <span className="num">{i + 1}</span>
                <div><h3 className="h3">{h}</h3><p className="small" style={{ marginTop: 6 }}>{p}</p></div>
                <p>{gets[i]}</p>
                <span className="lbl">{w}</span>
              </li>
            ))}
          </ol>
          <div className="actions"><Link className="btn btn-secondary" href="/what-you-get">What the fees cover</Link></div>
        </div>
      </section>

      <section className="band-sand">
        <div className="wrap">
          <header className="head">
            <span className="eyebrow">Placement</span>
            <h2 className="h1">We size the business to you</h2>
            <p className="lead">Most new owners fail because the money or the time runs out first. We place you where you can survive the learning curve.</p>
          </header>
          <div className="grid g3">
            <div className="card"><h3 className="h3">Startup capital</h3><p className="small">The startup fee plus the equipment your business needs to open.</p></div>
            <div className="card"><h3 className="h3">First-year reserve</h3><p className="small">Cash to cover the months before the business pays you.</p></div>
            <div className="card"><h3 className="h3">Pace</h3><p className="small">Learn, steady or rapid. Your pace sets the reserve and the plan.</p></div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <header className="head"><span className="eyebrow">Your 3-year playbook</span><h2 className="h1">Built from your assessment, not a template</h2></header>
          <div className="grid g6">
            {playbook.map(([h, p]) => (<div className="term" key={h}><span className="lbl">{h}</span><p>{p}</p></div>))}
          </div>
          <div className="actions"><Link className="btn btn-secondary" href="/build-value">Where the playbook leads</Link></div>
        </div>
      </section>

      <section className="band-sand">
        <div className="wrap">
          <header className="head"><span className="eyebrow">Clear roles</span><h2 className="h1">What we do, and what you do</h2></header>
          <div className="grid g2">
            <div className="card"><h3 className="h2">EntrepX</h3><ul><li>Builds your brand and systems</li><li>Runs your tech and keeps it current</li><li>Coaches against your playbook with real numbers</li><li>Connects you to the partner network</li></ul></div>
            <div className="card chosen"><h3 className="h2">You</h3><ul><li>Sell and serve customers</li><li>Hit the weekly habits in your plan</li><li>Report your numbers monthly</li><li>Own every decision, and the equity</li></ul></div>
          </div>
        </div>
      </section>

      <Next title="See what $1,500 a month buys" href="/what-you-get" label="What you get" />
    </>
  );
}

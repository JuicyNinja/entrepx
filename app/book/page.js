import Link from "next/link";
import LeadForm from "../../components/LeadForm";

export const metadata = {
  title: "Book a Discovery Session",
  description: "A free 2-hour working session with an EntrepX advisor on cost, fit, timing and the businesses that suit you.",
};

const cover = [
  ["Your goals and pace", "What you want ownership to give you, and how fast you want to grow."],
  ["Your numbers", "Startup capital, first-year reserve and the 10-year math against a franchise."],
  ["The fit", "Which businesses suit your time, capital and strengths, and which don’t."],
  ["Your team", "What your leadership team, tech and partners would look like."],
];

export default function Book() {
  return (
    <>
      <section className="band-vault" style={{ paddingBottom: 56 }}>
        <div className="wrap">
          <span className="eyebrow">Discovery session</span>
          <h1 className="display" style={{ fontSize: "clamp(40px,6vw,60px)", maxWidth: "16ch" }}>Book your 2-hour discovery session</h1>
          <p className="lead">Free. A real working session with an EntrepX advisor, not a sales pitch.</p>
        </div>
      </section>
      <section style={{ paddingTop: 56 }}>
        <div className="wrap grid g2" style={{ gap: "var(--space-8)", alignItems: "start" }}>
          <div>
            <span className="eyebrow">What we cover</span>
            <h2 className="h1">Two hours, four questions answered</h2>
            <ol className="sv-steps">
              {cover.map(([h, p], i) => (<li key={h}><span className="n">{i + 1}</span><span><b>{h}</b><span className="d">{p}</span></span></li>))}
            </ol>
            <p className="small" style={{ marginTop: "var(--space-6)" }}>
              Haven’t taken the readiness survey yet? <Link href="/survey">Take it first</Link> and we’ll have your results in hand.
            </p>
          </div>
          <LeadForm title="Request my session" button="Request my session" extra payload={{ source: "book" }} />
        </div>
      </section>
    </>
  );
}

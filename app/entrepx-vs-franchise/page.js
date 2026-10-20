import RoyaltyCalculator from "../../components/RoyaltyCalculator";
import Next from "../../components/Next";
import { compareRows } from "../../components/content";

export const metadata = {
  title: "EntrepX vs. Franchising",
  description: "See what 10 years of franchise royalties and fees would cost you, and how EntrepX compares.",
};

const faq = [
  ["Is EntrepX a franchise?", "No. There is no royalty, no franchisor brand and no 10-year term. You own your brand and business outright."],
  ["Why do the numbers exclude startup fees?", "Both models have one. The EntrepX startup fee gets you to revenue. A franchise fee buys the right to pay royalties, and training, kits and equipment are often extra."],
  ["Where do the franchise ranges come from?", "Typical home service franchise royalties (6–9% of revenue) and monthly fees ($350–750). Terms vary, so check Items 5–7 of each Franchise Disclosure Document."],
];

export default function Compare() {
  return (
    <>
      <section className="band-vault" style={{ paddingBottom: 64 }}>
        <div className="wrap">
          <span className="eyebrow">EntrepX vs. franchising</span>
          <h1 className="display" style={{ maxWidth: "15ch" }}>What would 10 years of royalties cost you?</h1>
          <p className="lead">Most home service franchises take 6 to 9 percent of revenue plus $350 to $750 a month in fees, for the life of a 10-year contract. Slide in your numbers.</p>
        </div>
      </section>

      <section className="band-sand" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <RoyaltyCalculator />
          <p className="fine" style={{ marginTop: "var(--space-5)" }}>
            This calculator compares ongoing royalties and monthly fees only. It does not include the franchise startup fee or the
            EntrepX startup fee. Vehicles and major equipment are separate in both models. Franchise figures are illustrative ranges
            for home service franchises; actual terms vary, so review each Franchise Disclosure Document (Items 5–7). This is a fee
            comparison, not a projection of earnings.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <header className="head"><span className="eyebrow">Side by side</span><h2 className="h1">Everything a franchise gives you, minus the franchisor</h2></header>
          <div className="compare-wrap">
            <table className="compare">
              <thead><tr><th scope="col"></th><th scope="col" className="us">EntrepX</th><th scope="col" className="them">Typical franchise</th></tr></thead>
              <tbody>
                {compareRows.map(([r, us, them]) => (
                  <tr key={r}><th scope="row">{r}</th><td className="us"><span className="mark">✓</span>{us}</td><td className="them"><span className="mark">—</span>{them}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="band-sand">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <header className="head"><h2 className="h1">Fair questions</h2></header>
          <div className="faq">{faq.map(([q, a], i) => (<details key={q} open={i === 0}><summary>{q}</summary><p>{a}</p></details>))}</div>
        </div>
      </section>

      <Next title="Browse the businesses we build" href="/opportunities" label="See opportunities" />
    </>
  );
}

import Next from "../../components/Next";
import OpportunityFinder from "../../components/OpportunityFinder";
import { opportunities } from "../../components/opportunities";

export const metadata = {
  title: "Business Opportunities",
  description: `Browse ${opportunities.length} home service businesses EntrepX can build with you. Filter by upfront cost, price per job and monthly sales.`,
};

export default function Opportunities() {
  return (
    <>
      <section className="band-vault page-hero">
        <div className="wrap">
          <span className="eyebrow">Business opportunities</span>
          <h1 className="display" style={{ fontSize: "clamp(40px,6vw,64px)", maxWidth: "16ch" }}>Find the business that fits you</h1>
          <p className="lead">{opportunities.length} home service businesses we can build with you, from under $10K to start. Filter by what you can invest, the jobs you’d sell and the sales a single crew can reach.</p>
        </div>
      </section>
      <section style={{ paddingTop: 48 }}>
        <div className="wrap" style={{ display: "grid", gap: "var(--space-6)" }}>
          <OpportunityFinder />
          <p className="fine">
            *Monthly sales and run rate are illustrative industry benchmarks for one owner-operated crew at steady volume (typically year 2):
            price per job × typical jobs a month, times active months for the run rate. They are not projections, promises or results of
            EntrepX members, and they are revenue, not profit. Your results depend on your market, effort, pricing, crew and costs. Upfront
            cost covers equipment, supplies, insurance, licensing and launch marketing; it excludes the vehicle, the EntrepX startup fee and
            your first-year reserve.
          </p>
        </div>
      </section>
      <Next title="Not sure where you fit? The survey narrows it down." href="/book" label="Book a discovery session" />
    </>
  );
}

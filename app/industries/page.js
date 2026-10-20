import Link from "next/link";
import Image from "next/image";
import Next from "../../components/Next";
import { industries, payback, usd } from "../../components/content";

export const metadata = { title: "Industries", description: "Businesses EntrepX builds, with startup costs and illustrative payback compared to a franchise." };

export default function Industries() {
  return (
    <>
      <section className="band-vault page-hero">
        <div className="wrap">
          <span className="eyebrow">Industries</span>
          <h1 className="display" style={{ fontSize: "clamp(42px,6vw,64px)", maxWidth: "15ch" }}>Faster payback. <span className="x">More cash in your pocket.</span></h1>
          <p className="lead">A lower startup fee and no royalty means your startup capital comes back sooner than with a franchise.</p>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="grid g2">
            {industries.map((e) => {
              const p = payback(e);
              return (
                <Link className="card" key={e.slug} href={`/industries/${e.slug}`} style={{ textDecoration: "none", padding: 0, overflow: "hidden" }}>
                  <div className="photo" style={{ aspectRatio: "3 / 2", borderRadius: 0 }}><Image src={e.image} alt={e.alt} width={1248} height={832} /></div>
                  <div style={{ padding: "var(--space-5)", display: "grid", gap: "var(--space-2)" }}>
                    <h2 className="h2">{e.name}</h2>
                    <p className="small">{e.tagline}</p>
                    <p><b>{usd(e.exStartup)}</b> startup · back by <b>month {p.exMonth}</b> vs. month {p.frMonth} franchised</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="card" style={{ marginTop: "var(--space-6)", borderStyle: "dashed" }}>
            <h2 className="h3">More industries coming</h2>
            <p className="small">Have a business in mind? Bring it to your discovery session and we’ll talk fit.</p>
          </div>
          <p className="fine" style={{ marginTop: "var(--space-5)" }}>Illustrative examples using sample job counts, average tickets and owner-operator margins. Not a projection of your earnings.</p>
        </div>
      </section>
      <Next title="Find out which business fits you" href="/book" label="Book a discovery session" />
    </>
  );
}

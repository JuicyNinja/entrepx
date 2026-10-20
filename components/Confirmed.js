"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Confirmed() {
  const [q, setQ] = useState({ name: "", when: "" });
  useEffect(() => {
    const s = new URLSearchParams(window.location.search);
    setQ({ name: s.get("name") || "", when: s.get("when") || "" });
  }, []);
  return (
    <>
      <section className="band-vault page-hero">
        <div className="wrap">
          <span className="eyebrow">Request received</span>
          <h1 className="display" style={{ fontSize: "clamp(40px,6vw,60px)", maxWidth: "18ch" }}>Thanks{q.name ? `, ${q.name}` : ""}. Your session is on the way.</h1>
          <p className="lead">An EntrepX advisor will confirm a 2-hour time{q.when && q.when !== "Any time" ? ` (${q.when.toLowerCase()})` : ""} within one business day.</p>
          <p className="notice" style={{ marginTop: "var(--space-4)" }}>Preview: requests are not saved yet</p>
        </div>
      </section>
      <section>
        <div className="wrap">
          <span className="eyebrow">Get the most from it</span>
          <h2 className="h1">Three things to do before your session</h2>
          <div className="grid g3" style={{ marginTop: "var(--space-6)" }}>
            <Link className="card" href="/survey" style={{ textDecoration: "none" }}><span className="lbl">1 · If you haven’t</span><h3 className="h3">Take the readiness survey</h3><p className="small">Five minutes. Your advisor sees the results.</p></Link>
            <div className="card"><span className="lbl">2</span><h3 className="h3">Know your two capital numbers</h3><p className="small">What you could put toward startup, and how many months of bills you could cover.</p></div>
            <div className="card"><span className="lbl">3</span><h3 className="h3">Block the full 2 hours</h3><p className="small">Bring whoever decides with you. Spouse or partner welcome.</p></div>
          </div>
        </div>
      </section>
      <section className="band-sand">
        <div className="wrap">
          <span className="eyebrow">While you wait</span>
          <div className="grid g3" style={{ marginTop: "var(--space-4)" }}>
            <Link className="card" href="/what-you-get" style={{ textDecoration: "none" }}><h3 className="h3">What $1,500 a month buys</h3></Link>
            <Link className="card" href="/entrepx-vs-franchise" style={{ textDecoration: "none" }}><h3 className="h3">Run your royalty numbers</h3></Link>
            <Link className="card" href="/build-value" style={{ textDecoration: "none" }}><h3 className="h3">How we build value</h3></Link>
          </div>
        </div>
      </section>
    </>
  );
}

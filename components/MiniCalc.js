"use client";
import { useState } from "react";
import Link from "next/link";

const usd = (n) => "$" + Math.round(n).toLocaleString("en-US");

export default function MiniCalc() {
  const [rev, setRev] = useState(750000);
  const diff = (rev * 0.07 + 6000) * 10 - 180000;
  const p = ((rev - 75000) / (3000000 - 75000)) * 100;
  return (
    <div className="split">
      <div>
        <span className="eyebrow">Try it</span>
        <h2 className="h1">Drag to your revenue. See what a royalty costs.</h2>
        <div className="ctrl" style={{ marginTop: "var(--space-6)", borderBottom: 0 }}>
          <div className="ctrl-head">
            <label htmlFor="mini-rev">Annual revenue</label>
            <output htmlFor="mini-rev">{usd(rev)}/yr</output>
          </div>
          <input id="mini-rev" type="range" min={75000} max={3000000} step={25000} value={rev} style={{ "--p": p + "%" }} onChange={(e) => setRev(+e.target.value)} />
          <p className="small">A typical franchise at 7% plus $500/mo in fees, vs. EntrepX at $1,500/mo.</p>
        </div>
      </div>
      <div className={diff < 0 ? "keep neg" : "keep"} style={{ flexDirection: "column", alignItems: "flex-start", padding: "var(--space-6)" }} aria-live="polite">
        <span className="lbl">{diff >= 0 ? "You keep over 10 years" : "EntrepX costs more by"}</span>
        <span className="val">{usd(Math.abs(diff))}</span>
        <p className="small">In fees alone. Excludes startup fees. Not an earnings projection.</p>
        <Link className="btn btn-secondary" href="/entrepx-vs-franchise" style={{ marginTop: "var(--space-3)" }}>Open the full calculator</Link>
      </div>
    </div>
  );
}

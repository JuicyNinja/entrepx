"use client";
import { useState } from "react";

const usd = (n) => "$" + Math.round(n).toLocaleString("en-US");

export default function ValueCalc() {
  const [eb, setEb] = useState(250000);
  const [m, setM] = useState(3);
  const p = ((eb - 50000) / (1500000 - 50000)) * 100;
  return (
    <div className="split" style={{ alignItems: "start" }}>
      <div>
        <div className="ctrl" style={{ borderBottom: 0, paddingTop: 0 }}>
          <div className="ctrl-head"><label htmlFor="ebitda">Annual EBITDA (your number)</label><output htmlFor="ebitda">{usd(eb)}</output></div>
          <input id="ebitda" type="range" min={50000} max={1500000} step={25000} value={eb} style={{ "--p": p + "%" }} onChange={(e) => setEb(+e.target.value)} />
        </div>
        <p className="lbl" style={{ marginTop: "var(--space-5)" }} id="mult">Multiple</p>
        <div className="seg" role="group" aria-labelledby="mult" style={{ marginTop: "var(--space-2)" }}>
          {[2, 3, 4].map((x) => (<button key={x} type="button" aria-pressed={m === x} onClick={() => setM(x)}>{x}×</button>))}
        </div>
        <p className="small" style={{ marginTop: "var(--space-4)" }}>Illustrative math only. Real multiples depend on industry, size, risk and the market at the time of sale. This is not a valuation or a promise of value.</p>
      </div>
      <div className="big-fig" aria-live="polite">
        <span className="lbl">Illustrative value at {m}× EBITDA</span>
        <span className="v">{usd(eb * m)}</span>
        <div className="bars" aria-hidden="true">{[2, 3, 4].map((x) => (<div key={x} className={x === m ? "on" : ""} style={{ height: `${(x / 4) * 100}%` }} />))}</div>
        <div className="bars-l" aria-hidden="true"><span>2×</span><span>3×</span><span>4×</span></div>
      </div>
    </div>
  );
}

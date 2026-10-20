"use client";
import { useState } from "react";

const EX_YR = 1500 * 12;
const YEARS = 10;
const usd = (n) => "$" + Math.round(n).toLocaleString("en-US");
const short = (n) => (n >= 1e6 ? "$" + (Math.round(n / 1e4) / 100).toString() + "M" : "$" + Math.round(n / 1000) + "K");
const pct = (v) => (+v).toFixed(2).replace(/\.?0+$/, "") + "%";
const nice = (max) => { const p = Math.pow(10, Math.floor(Math.log10(max))); const m = max / p; return (m <= 1 ? 1 : m <= 2 ? 2 : m <= 2.5 ? 2.5 : m <= 5 ? 5 : 10) * p; };

function Slider({ id, label, sub, value, min, max, step, onChange, fmt, ends }) {
  const p = ((value - min) / (max - min)) * 100;
  return (
    <div className="ctrl">
      <div className="ctrl-head">
        <label htmlFor={id}>{label}{sub && <small>{sub}</small>}</label>
        <output htmlFor={id}>{fmt(value)}</output>
      </div>
      <input type="range" id={id} min={min} max={max} step={step} value={value} style={{ "--p": p + "%" }} onChange={(e) => onChange(+e.target.value)} />
      <div className="ends"><span>{ends[0]}</span><span>{ends[1]}</span></div>
    </div>
  );
}

function Chart({ frYr }) {
  const W = 900, H = 340, L = 72, Rr = 16, T = 24, B = 36, cw = W - L - Rr, ch = H - T - B;
  const maxV = nice(Math.max(frYr, EX_YR) * YEARS), y = (v) => T + ch - (v / maxV) * ch, g = cw / YEARS, bw = Math.min(28, g * 0.33);
  const lx = L + g * (YEARS - 0.5);
  return (
    <svg className="chart" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Cumulative fees paid over 10 years, franchise versus EntrepX">
      {[0, 1, 2, 3, 4].map((i) => { const v = (maxV * i) / 4; return (
        <g key={i}><line x1={L} x2={W - Rr} y1={y(v)} y2={y(v)} stroke="var(--line)" /><text x={L - 12} y={y(v) + 4} textAnchor="end">{short(v)}</text></g>
      ); })}
      {Array.from({ length: YEARS }, (_, k) => { const n = k + 1, cx = L + g * (k + 0.5), f = frYr * n, e = EX_YR * n; return (
        <g key={n}>
          <rect x={cx - bw - 2} y={y(f)} width={bw} height={y(0) - y(f)} fill="var(--stone)" rx="2"><title>{`Year ${n} franchise: ${usd(f)}`}</title></rect>
          <rect x={cx + 2} y={y(e)} width={bw} height={y(0) - y(e)} fill="var(--crimson)" rx="2"><title>{`Year ${n} EntrepX: ${usd(e)}`}</title></rect>
          <text x={cx} y={H - 12} textAnchor="middle">YR {n}</text>
        </g>
      ); })}
      <text x={lx - bw / 2 - 2} y={y(frYr * YEARS) - 8} textAnchor="middle" style={{ fill: "var(--espresso)", fontWeight: 700 }}>{short(frYr * YEARS)}</text>
      <text x={lx + bw / 2 + 2} y={y(EX_YR * YEARS) - 8} textAnchor="middle" style={{ fill: "var(--crimson-text)", fontWeight: 700 }}>{short(EX_YR * YEARS)}</text>
    </svg>
  );
}

export default function RoyaltyCalculator() {
  const [rev, setRev] = useState(750000);
  const [roy, setRoy] = useState(7);
  const [fee, setFee] = useState(500);
  const r = roy / 100, yrRoy = rev * r, yrFee = fee * 12, yr = yrRoy + yrFee, tot = yr * YEARS, diff = tot - EX_YR * YEARS;
  const be = Math.ceil(((EX_YR - yrFee) / r) / 1000) * 1000;
  return (
    <>
      <div className="calc">
        <div className="panel" role="group" aria-label="Calculator inputs">
          <Slider id="rev" label="Annual revenue" value={rev} min={75000} max={3000000} step={25000} onChange={setRev} fmt={(v) => usd(v) + "/yr"} ends={["$75K", "$3M"]} />
          <Slider id="roy" label="Royalty rate" value={roy} min={6} max={9} step={0.25} onChange={setRoy} fmt={pct} ends={["6%", "9%"]} />
          <Slider id="fee" label="Other monthly fees" sub="Tech, marketing fund, software" value={fee} min={350} max={750} step={25} onChange={setFee} fmt={(v) => usd(v) + "/mo"} ends={["$350/mo", "$750/mo"]} />
        </div>
        <div className="panel result" aria-live="polite">
          <div className="grid g2" style={{ gap: "var(--space-4)" }}>
            <div className="fig fr"><span className="lbl">Franchise, 10 years</span><span className="val">{usd(tot)}</span><span className="sub">{usd(yr)} per year</span></div>
            <div className="fig ex"><span className="lbl">EntrepX, 10 years</span><span className="val">$180,000</span><span className="sub">$1,500/mo flat</span></div>
          </div>
          <dl className="breakdown">
            <dt>Royalties over 10 years</dt><dd>{usd(yrRoy * YEARS)}</dd>
            <dt>Monthly fees over 10 years</dt><dd>{usd(yrFee * YEARS)}</dd>
          </dl>
          <div className={diff < 0 ? "keep neg" : "keep"}>
            <span className="lbl">{diff >= 0 ? "You keep over 10 years" : "EntrepX costs more by"}</span>
            <span className="val">{usd(Math.abs(diff))}</span>
          </div>
          <p className="small">At a {pct(roy)} royalty and {usd(fee)}/mo in fees, EntrepX costs less once revenue passes {usd(be)} a year.</p>
        </div>
      </div>
      <div className="panel" style={{ marginTop: "var(--space-6)" }}>
        <div className="chart-head">
          <div><span className="eyebrow" style={{ color: "var(--muted)" }}>Cumulative fees paid</span><h3 className="h3">Year by year, the gap compounds</h3></div>
          <div className="legend"><span><i style={{ background: "var(--stone)" }} />Typical franchise</span><span><i style={{ background: "var(--crimson)" }} />EntrepX</span></div>
        </div>
        <div className="chart-scroll"><Chart frYr={yr} /></div>
        <div className="grid g3 avg">
          <div><div className="lbl">Avg. annual, franchise</div><div className="val" style={{ color: "var(--espresso)" }}>{usd(yr)}</div></div>
          <div><div className="lbl">Avg. annual, EntrepX</div><div className="val" style={{ color: "var(--crimson-text)" }}>$18,000</div></div>
          <div><div className="lbl">Avg. annual difference</div><div className="val" style={{ color: diff >= 0 ? "var(--equity)" : "var(--crimson-text)" }}>{diff < 0 ? "−" : ""}{usd(Math.abs(yr - EX_YR))}</div></div>
        </div>
      </div>
    </>
  );
}

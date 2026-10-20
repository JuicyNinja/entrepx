"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { opportunities, tiers, tierName } from "./opportunities";

const k = (n) => "$" + (n >= 1000 ? Math.round(n / 1000) + "K" : n);
const usd = (n) => "$" + Math.round(n).toLocaleString("en-US");
const PRICE = [["", "Any price"], ["0-200", "Under $200"], ["200-1000", "$200–1,000"], ["1000-5000", "$1,000–5,000"], ["5000-1e9", "$5,000+"]];
const MONTHLY = [["0", "Any"], ["10000", "$10K+ a month"], ["20000", "$20K+ a month"], ["30000", "$30K+ a month"]];
const SORT = [["cost", "Upfront cost, low to high"], ["run", "Run rate, high to low"], ["monthly", "Monthly sales, high to low"], ["price", "Price per job, high to low"], ["name", "Name"]];
const families = [...new Set(opportunities.map((o) => o.family))].sort();

export default function OpportunityFinder() {
  const [maxTier, setMaxTier] = useState(4);
  const [tierOnly, setTierOnly] = useState(-1);
  const [family, setFamily] = useState("");
  const [price, setPrice] = useState("");
  const [monthly, setMonthly] = useState("0");
  const [repeat, setRepeat] = useState("");
  const [sort, setSort] = useState("cost");

  useEffect(() => {
    const s = new URLSearchParams(window.location.search);
    if (s.get("maxTier") !== null) setMaxTier(+s.get("maxTier"));
    if (s.get("family")) setFamily(s.get("family"));
  }, []);

  const list = useMemo(() => {
    const [pl, ph] = price ? price.split("-").map(Number) : [0, Infinity];
    const by = {
      cost: (a, b) => a.lo + a.hi - (b.lo + b.hi),
      run: (a, b) => b.runRate - a.runRate,
      monthly: (a, b) => b.monthly - a.monthly,
      price: (a, b) => b.ticket - a.ticket,
      name: (a, b) => a.name.localeCompare(b.name),
    };
    return opportunities
      .filter((o) => (tierOnly >= 0 ? o.tier === tierOnly : o.tier <= maxTier))
      .filter((o) => !family || o.family === family)
      .filter((o) => o.ticket >= pl && o.ticket < ph)
      .filter((o) => o.monthly >= +monthly)
      .filter((o) => !repeat || o.repeat === repeat)
      .sort(by[sort]);
  }, [maxTier, tierOnly, family, price, monthly, repeat, sort]);

  const reset = () => { setMaxTier(4); setTierOnly(-1); setFamily(""); setPrice(""); setMonthly("0"); setRepeat(""); };

  return (
    <div className="finder">
      <div className="tierbar" role="group" aria-label="Upfront cost">
        <button type="button" aria-pressed={tierOnly < 0 && maxTier === 4} onClick={() => { setTierOnly(-1); setMaxTier(4); }}>
          <b>All</b><span>{opportunities.length} businesses</span>
        </button>
        {tiers.map(([t, n, r]) => (
          <button key={t} type="button" aria-pressed={tierOnly === t} onClick={() => setTierOnly(tierOnly === t ? -1 : t)}>
            <b>{n}</b><span>{r} upfront</span>
          </button>
        ))}
      </div>
      {tierOnly < 0 && maxTier < 4 && (
        <p className="small">Showing businesses up to <b>{tierName(maxTier)}</b>, based on your survey. <button className="linkish" type="button" onClick={() => setMaxTier(4)}>Show all</button></p>
      )}
      <div className="filters">
        <label htmlFor="f-family">Family<select id="f-family" value={family} onChange={(e) => setFamily(e.target.value)}><option value="">All families</option>{families.map((f) => <option key={f}>{f}</option>)}</select></label>
        <label htmlFor="f-price">Price per job<select id="f-price" value={price} onChange={(e) => setPrice(e.target.value)}>{PRICE.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select></label>
        <label htmlFor="f-monthly">Monthly sales<select id="f-monthly" value={monthly} onChange={(e) => setMonthly(e.target.value)}>{MONTHLY.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select></label>
        <label htmlFor="f-repeat">Repeat customers<select id="f-repeat" value={repeat} onChange={(e) => setRepeat(e.target.value)}><option value="">Any</option><option>High</option><option>Medium</option><option>Low</option></select></label>
        <label htmlFor="f-sort">Sort<select id="f-sort" value={sort} onChange={(e) => setSort(e.target.value)}>{SORT.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select></label>
        <span className="small" aria-live="polite">{list.length} of {opportunities.length}</span>
      </div>
      {list.length === 0 ? (
        <div className="card" style={{ alignItems: "flex-start" }}><h3 className="h3">No businesses match those filters</h3><button className="btn btn-secondary btn-small" type="button" onClick={reset}>Clear filters</button></div>
      ) : (
        <ul className="opps">
          {list.map((o) => (
            <li key={o.slug}>
              <Link href={`/opportunities/${o.slug}`} className="opp">
                <span className="opp-top"><span className={`tier t${o.tier}`}>{tierName(o.tier)}</span><span className="lbl">{o.family}</span></span>
                <span className="h3">{o.name}</span>
                <span className="opp-fit">{o.fit}</span>
                <dl>
                  <div><dt>Upfront</dt><dd>{o.lo === o.hi ? k(o.lo * 1000) : `${k(o.lo * 1000)}–${k(o.hi * 1000)}`}</dd></div>
                  <div><dt>Per job</dt><dd>{usd(o.ticket)}</dd></div>
                  <div><dt>Monthly sales*</dt><dd>{k(o.monthly)}</dd></div>
                  <div><dt>Run rate*</dt><dd>{k(o.runRate)}</dd></div>
                </dl>
                <span className="opp-foot"><span>Repeat: {o.repeat}</span><span>License: {o.license}</span></span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

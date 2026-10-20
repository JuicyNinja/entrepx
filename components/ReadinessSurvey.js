"use client";
import { useEffect, useRef, useState } from "react";
import { QUESTIONS as Q, scoreSurvey } from "./surveyData";
import LeadForm from "./LeadForm";

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 12l5 5L20 6" /></svg>
);

export default function ReadinessSurvey() {
  const [view, setView] = useState("intro");
  const [i, setI] = useState(0);
  const [ans, setAns] = useState(() => Array(Q.length).fill(null));
  const lock = useRef(false);
  const first = useRef(null);
  const [pre, setPre] = useState(null);

  useEffect(() => {
    const st = new URLSearchParams(window.location.search).get("start");
    if (st !== null && Q[0].o[+st]) setPre(+st);
  }, []);

  useEffect(() => { if (view !== "intro") window.scrollTo({ top: 0 }); }, [view]);
  useEffect(() => { if (view === "stage") first.current?.focus(); }, [i, view]);

  function pick(k) {
    if (lock.current) return;
    lock.current = true;
    const next = ans.slice(); next[i] = k; setAns(next);
    setTimeout(() => {
      lock.current = false;
      if (i < Q.length - 1) setI(i + 1); else setView("result");
    }, 260);
  }

  useEffect(() => {
    if (view !== "stage") return;
    const h = (e) => {
      if (/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
      const k = "abcd".indexOf(e.key.toLowerCase());
      if (k > -1 && k < Q[i].o.length) pick(k);
    };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  });

  const start = () => {
    const a = Array(Q.length).fill(null);
    if (pre !== null) a[0] = pre;
    setAns(a); setI(pre !== null ? 1 : 0); setView("stage");
  };

  if (view === "intro")
    return (
      <section className="band-vault">
        <div className="wrap sv-intro">
          <div>
            <span className="eyebrow">Free readiness survey</span>
            <h1 className="display" style={{ maxWidth: "14ch" }}>Are you ready to be a business owner?</h1>
            <p className="lead">Start your empire? Take our preliminary survey and see. Fifteen quick questions on your time, capital, risk and drive, and you get your readiness score on the spot.</p>
            <div className="actions">
              <button className="btn btn-primary" onClick={start}>Start the survey</button>
              <span className="sv-facts">15 questions · 5 minutes · free</span>
            </div>
          </div>
          <aside className="sv-gets" aria-labelledby="gets-h">
            <h2 id="gets-h" className="h3">What you get</h2>
            <ul>
              <li><Check /><span><b>Your readiness score</b>A 0–100 score and your tier: Foundation, Contender or Empire-Ready.</span></li>
              <li><Check /><span><b>Strengths and gaps</b>Where you&apos;re ready now and the two areas to work on first.</span></li>
              <li><Check /><span><b>Your next step</b>A free 2-hour discovery session with an EntrepX advisor.</span></li>
            </ul>
          </aside>
        </div>
      </section>
    );

  if (view === "stage") {
    const it = Q[i];
    return (
      <section className="band-sand">
        <div className="wrap">
          <div className="sv-card" role="group" aria-labelledby="qText">
            <div className="sv-progress">
              <div className="sv-meta"><span>Question {i + 1} of {Q.length}</span><span>{it.dim}</span></div>
              <div className="sv-track" aria-hidden="true"><div className="sv-fill" style={{ width: (i / Q.length) * 100 + "%" }} /></div>
            </div>
            <h2 className="sv-q" id="qText">{it.q}</h2>
            {it.hint && <p className="sv-hint">{it.hint}</p>}
            <div className="sv-options">
              {it.o.map((txt, k) => (
                <button key={i + "-" + k} ref={k === 0 ? first : null} type="button" className="sv-opt" aria-pressed={ans[i] === k} onClick={() => pick(k)}>
                  <span className="sv-key">{"ABCD"[k]}</span><span>{txt}</span>
                </button>
              ))}
            </div>
            <div className="sv-nav">
              <button className="sv-link" style={{ visibility: i === 0 ? "hidden" : "visible" }} onClick={() => setI(i - 1)}>← Back</button>
              <span className="sv-keys">Tip: press A–D</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const r = scoreSurvey(ans);
  const size = ["Start lean: little or no equipment, or build capital first", "A lean service business, roughly $25K or less at risk", "A business with roughly $25K–$75K at risk", "A larger business, more than $75K at risk"][ans[3] ?? 0];
  const pace = ["Learn: part-time start", "Learn: part-time start", "Steady", "Rapid"][ans[2] ?? 0];
  const reserveLow = (ans[4] ?? 0) < 2;
  return (
    <>
      <section className="band-vault">
        <div className="wrap sv-result">
          <div>
            <span className="sv-tier">{r.tier.name}</span>
            <div className="sv-score">{r.score}<small> / 100</small></div>
            <h1 className="h1" style={{ color: "var(--on-vault)", marginTop: "var(--space-4)" }}>{r.tier.title}</h1>
            <p className="lead">{r.tier.verdict}</p>
          </div>
          <div className="sv-dims">
            <h2 className="sv-dims-h">Your readiness by area</h2>
            {r.scored.map((x) => (
              <div key={x.q.dim} className={"sv-dim" + (r.strengths.has(x.q.dim) ? " strong" : r.gaps.has(x.q.dim) ? " gap" : "")}>
                <div className="sv-row"><span>{x.q.dim}</span><span>{x.v}/3</span></div>
                <div className="sv-t"><div className="sv-f" style={{ width: Math.max(4, (x.v / 3) * 100) + "%" }} /></div>
              </div>
            ))}
            <div className="sv-legend"><span><i style={{ background: "#5FBF86" }} />Strength</span><span><i style={{ background: "#E8A33D" }} />Work on first</span></div>
          </div>
        </div>
      </section>
      <section className="band-sand">
        <div className="wrap">
          <span className="eyebrow">What it means for you</span>
          <h2 className="h1">Where you’d likely fit</h2>
          <div className="grid g3" style={{ marginTop: "var(--space-6)" }}>
            <div className="card"><span className="lbl">Business size</span><h3 className="h3">{size}</h3><p className="small">From your startup capital answer.</p></div>
            <div className="card"><span className="lbl">Pace</span><h3 className="h3">{pace}</h3><p className="small">From the hours you can give it.</p></div>
            <div className="card"><span className="lbl">Work on first</span><h3 className="h3">{[...r.gaps].map((g, i) => (i ? g.toLowerCase() : g)).join(" and ")}</h3><p className="small">{reserveLow ? "Your reserve is under 6 months. We’ll plan for that before you invest." : "We’ll cover both in your session."}</p></div>
          </div>
          <p className="fine" style={{ marginTop: "var(--space-4)" }}>A first read only. Your discovery session and Owner Assessment set the real placement.</p>
        </div>
      </section>
      <section id="book">
        <div className="wrap grid g2" style={{ gap: "var(--space-8)", alignItems: "start" }}>
          <div>
            <span className="eyebrow">Your next step</span>
            <h2 className="h1">Request your 2-hour discovery session</h2>
            <p className="lead">{r.tier.lead}</p>
            <ol className="sv-steps">
              <li><span className="n">1</span><span><b>Discovery session · 2 hours</b><span className="d">A working session on your results, goals, the 10-year numbers and the businesses that fit.</span></span></li>
              <li><span className="n">2</span><span><b>Owner Assessment</b><span className="d">Fifteen areas of business, scored with an advisor, once you decide to move forward.</span></span></li>
              <li><span className="n">3</span><span><b>Build and launch</b><span className="d">About 30 days, then your 3-year playbook.</span></span></li>
            </ol>
            {r.tier.name === "Foundation" && (
              <div className="card" style={{ marginTop: "var(--space-6)" }}>
                <h3 className="h3">Not ready yet? That’s useful to know.</h3>
                <p className="small">Book the session anyway and leave with a 90-day plan for your gaps, or retake the survey once they’re closed.</p>
              </div>
            )}
            <button className="sv-link" onClick={start} style={{ marginTop: "var(--space-6)" }}>Retake the survey</button>
          </div>
          <LeadForm title="Send my results and request my session" button="Request my session" payload={{ source: "survey", segment: r.segment, answers: ans, score: r.score, tier: r.tier.name }} />
        </div>
      </section>
    </>
  );
}

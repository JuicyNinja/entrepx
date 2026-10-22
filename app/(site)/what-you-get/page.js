import Link from "next/link";
import Next from "../../../components/Next";
import { team, tech } from "../../../components/content";

export const metadata = { title: "What You Get", description: "A fractional CMO, CTO and COO, all of your tech and a partner network for $1,500 a month flat." };

export default function WhatYouGet() {
  return (
    <>
      <section className="band-vault page-hero">
        <div className="wrap">
          <span className="eyebrow">What you get</span>
          <h1 className="display" style={{ fontSize: "clamp(42px,6vw,64px)", maxWidth: "17ch" }}>A leadership team and all your tech, for $1,500 a month</h1>
          <p className="lead">A fractional CMO, CTO and COO working as one team, every tool your business runs on, and a network of partners. Flat. No royalty.</p>
          <div className="actions"><Link className="btn btn-primary" href="/survey">Take the free survey</Link><a className="btn btn-on-vault" href="#pricing">See pricing</a></div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <header className="head">
            <span className="eyebrow">Your leadership team</span>
            <h2 className="h1">Three executives, integrated, on your side</h2>
            <p className="lead">They share one plan, your playbook, and one set of numbers, so nothing falls between marketing, tech and operations.</p>
          </header>
          <div className="grid g3">
            {team.map(([role, h, items]) => (
              <div className="card" key={role}><span className="lbl">{role}</span><h3 className="h2">{h}</h3><ul>{items.map((x) => <li key={x}>{x}</li>)}</ul></div>
            ))}
          </div>
          <div className="callout"><p><b>Bought separately:</b> $2,500/mo per fractional executive, $7,500/mo for all three. <b>As a member:</b> all three plus your tech for $1,500/mo.</p><span className="lbl" style={{ color: "var(--equity)" }}>$6,000/mo less on leadership alone</span></div>
        </div>
      </section>

      <section className="band-sand">
        <div className="wrap">
          <header className="head"><span className="eyebrow">Your tech, handled</span><h2 className="h1">Every tool your business runs on, set up and kept running</h2><p className="lead">We pick it, build it, connect it and support it, with our partner network.</p></header>
          <div className="grid g4">
            {tech.map(([h, p]) => (<div className="card" key={h}><h3 className="h3">{h}</h3><p className="small">{p}</p></div>))}
          </div>
        </div>
      </section>

      <section id="pricing">
        <div className="wrap">
          <header className="head"><span className="eyebrow">Pricing</span><h2 className="h1">Two numbers. No percentage of your revenue.</h2></header>
          <div className="grid g2">
            <div className="card" style={{ gap: "var(--space-3)" }}>
              <span className="lbl">Startup fee</span>
              <span className="price">Case by case</span>
              <p className="small">Set by your business and plan. It gets you to revenue.</p>
              <ul className="check">
                <li><span className="yes">✓</span><span>Brand, website and launch marketing</span></li>
                <li><span className="yes">✓</span><span>Systems and software set up</span></li>
                <li><span className="yes">✓</span><span>Training and business setup</span></li>
                <li><span className="no">✗</span><span>Vehicles and major equipment (separate; financing available through partners)</span></li>
              </ul>
            </div>
            <div className="card chosen" style={{ gap: "var(--space-3)" }}>
              <span className="lbl">Monthly</span>
              <span className="price">$1,500<small>/mo</small></span>
              <p className="small">Flat. 12-month agreement that renews automatically unless you cancel.</p>
              <ul className="check">
                <li><span className="yes">✓</span><span>Fractional CMO, CTO and COO</span></li>
                <li><span className="yes">✓</span><span>All of your tech, run for you</span></li>
                <li><span className="yes">✓</span><span>Coaching against your 3-year playbook</span></li>
                <li><span className="yes">✓</span><span>The partner network</span></li>
                <li><span className="yes">✓</span><span>No royalty, ever. 100% equity.</span></li>
              </ul>
            </div>
          </div>
          <div className="actions"><Link className="btn btn-secondary" href="/entrepx-vs-franchise">Compare it to a franchise</Link></div>
        </div>
      </section>

      <Next title="Meet the partners behind the team" href="/partners" label="Partner network" />
    </>
  );
}

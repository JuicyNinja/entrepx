"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const SLOTS = ["Weekday morning", "Weekday midday", "Weekday afternoon", "Weekday evening", "Saturday", "Any time"];

export default function LeadForm({ title, button, extra = false, payload }) {
  const [err, setErr] = useState("");
  const router = useRouter();

  function submit(e) {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.currentTarget));
    if (!f.first?.trim() || !EMAIL.test((f.email || "").trim())) {
      setErr("Add your first name and a valid email so we can reach you.");
      return;
    }
    setErr("");
    // Backend not connected yet. Planned: POST to a Supabase Edge Function (see entrepx_portal_schema.sql).
    if (typeof window !== "undefined") window.__entrepxLead = { ...f, ...payload };
    const q = new URLSearchParams({ name: f.first.trim(), when: f.when || "" });
    router.push(`/book/confirmed?${q}`);
  }

  return (
    <form className="form panel" onSubmit={submit} noValidate>
      {title && <h3 className="h3">{title}</h3>}
      <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
        <legend className="lbl" style={{ marginBottom: "var(--space-3)" }}>When works best for 2 hours?</legend>
        <div className="slots">
          {SLOTS.map((s, i) => (
            <span key={s} style={{ position: "relative" }}>
              <input type="radio" id={`slot-${i}`} name="when" value={s} defaultChecked={i === 5} />
              <label htmlFor={`slot-${i}`}>{s}</label>
            </span>
          ))}
        </div>
      </fieldset>
      <div className="two">
        <div className="field"><label htmlFor="first">First name</label><input id="first" name="first" autoComplete="given-name" required /></div>
        <div className="field"><label htmlFor="last">Last name</label><input id="last" name="last" autoComplete="family-name" /></div>
      </div>
      <div className="two">
        <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
        <div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" autoComplete="tel" /></div>
      </div>
      {extra && (
        <>
          <div className="field">
            <label htmlFor="stage">Where are you today?</label>
            <select id="stage" name="stage" defaultValue="Exploring the idea">
              <option>Exploring the idea</option>
              <option>Shopping franchises</option>
              <option>Ready to decide soon</option>
              <option>I already own a business</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="industry">Industry in mind</label>
            <select id="industry" name="industry" defaultValue="">
              <option value="">Not sure yet</option>
              <option>Resin countertops</option>
              <option>Biohazard cleanup</option>
              <option>Other</option>
            </select>
          </div>
        </>
      )}
      {err && <p className="err" role="alert">{err}</p>}
      <button className="btn btn-primary" type="submit">{button}</button>
      <p className="fine">Free. No obligation. Your answers go only to your EntrepX advisor.</p>
      <p className="notice">Preview: requests are not saved yet</p>
    </form>
  );
}

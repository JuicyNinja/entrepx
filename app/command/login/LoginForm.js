"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../../lib/supabase/browser";

// Staff sign in with a 6-digit code emailed to them. Accounts are created by an owner or admin,
// never from this screen (shouldCreateUser: false).
export default function LoginForm() {
  const router = useRouter();
  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function sendCode(e) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const { error } = await createClient().auth.signInWithOtp({ email: email.trim(), options: { shouldCreateUser: false } });
    setBusy(false);
    if (error) setError("We couldn't send a code to that address. Staff accounts are set up by an owner or admin.");
    else setStep("code");
  }

  async function verify(e) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const { error } = await createClient().auth.verifyOtp({ email: email.trim(), token: code.trim(), type: "email" });
    setBusy(false);
    if (error) setError("That code didn't work. Codes expire after an hour and work once.");
    else {
      router.replace("/command");
      router.refresh();
    }
  }

  return (
    <div className="cmd-card">
      <div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 28 }}>
          Entrep<span style={{ color: "var(--crimson)" }}>X</span>
        </div>
        <div className="cmd-lbl" style={{ marginTop: 4 }}>Command · staff only</div>
      </div>
      {step === "email" ? (
        <form onSubmit={sendCode} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <label className="cmd-field">
            <span className="cmd-lbl">Work email</span>
            <input className="cmd-input" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <button className="cmd-btn p" disabled={busy}>{busy ? "Sending…" : "Email me a code"}</button>
        </form>
      ) : (
        <form onSubmit={verify} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <p className="cmd-muted" style={{ margin: 0 }}>We sent a 6-digit code to <strong style={{ color: "var(--ink)" }}>{email}</strong>.</p>
          <label className="cmd-field">
            <span className="cmd-lbl">Code</span>
            <input className="cmd-input" inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" maxLength={6} required value={code} onChange={(e) => setCode(e.target.value)} />
          </label>
          <button className="cmd-btn p" disabled={busy}>{busy ? "Checking…" : "Sign in"}</button>
          <button type="button" className="cmd-btn" onClick={() => { setStep("email"); setCode(""); }}>Use a different email</button>
        </form>
      )}
      {error && <div className="cmd-err" role="alert">{error}</div>}
    </div>
  );
}

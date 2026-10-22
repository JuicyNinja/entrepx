import Link from "next/link";
import { notFound } from "next/navigation";
import { getSession } from "../../../../../lib/command/session";
import { STAGE_LABEL, TIER_LABEL, shortDate } from "../../../../../lib/command/format";
import { LoadError } from "../../Empty";

export const metadata = { title: "Contact" };

export default async function Contact({ params }) {
  const { id } = await params;
  const { supabase } = await getSession();
  const { data: p, error } = await supabase.from("prospects")
    .select("*, bdr:staff!prospects_bdr_id_fkey(full_name), rep:staff!prospects_sales_rep_id_fkey(full_name), coach:staff!prospects_coach_id_fkey(full_name)")
    .eq("id", id).maybeSingle();
  if (error) return <LoadError error={error} />;
  if (!p) notFound();

  const [{ data: acts }, { data: discl }] = await Promise.all([
    supabase.from("activities").select("id, kind, body, created_at").eq("prospect_id", id).order("created_at", { ascending: false }).limit(20),
    supabase.from("disclosures").select("delivered_at, acknowledged_at").eq("prospect_id", id).order("delivered_at").limit(1),
  ]);
  const d = discl?.[0];
  const opens = d ? new Date(new Date(d.delivered_at).getTime() + 14 * 864e5) : null;

  return (
    <>
      <div className="cmd-head">
        <div><div className="cmd-lbl"><Link className="cmd-link" href="/command/contacts">Contacts</Link> · {STAGE_LABEL[p.stage]}</div>
          <h1 className="cmd-h1">{p.first_name} {p.last_name}</h1></div>
        <div className="cmd-row" style={{ gap: 10 }}>
          {p.phone && <a className="cmd-btn" href={`tel:${p.phone}`}>Call</a>}
          <a className="cmd-btn" href={`mailto:${p.email}`}>Email</a>
        </div>
      </div>
      <div className="cmd-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        <div className="cmd-card" style={{ display: "grid", gap: 8 }}>
          <div className="cmd-lbl">Details</div>
          <div>{p.email}</div><div>{p.phone ?? "No phone"}</div><div>ZIP {p.zip ?? "—"}</div>
          <div>Survey: {p.latest_tier ? `${TIER_LABEL[p.latest_tier]} ${p.latest_score}` : "—"}</div>
          <div>Texts: {p.sms_consent_at ? `opted in ${shortDate(p.sms_consent_at)}` : "no consent"}</div>
        </div>
        <div className="cmd-card" style={{ display: "grid", gap: 8 }}>
          <div className="cmd-lbl">Team</div>
          <div>BDR: {p.bdr?.full_name ?? "Unassigned"}</div>
          <div>Sales rep: {p.rep?.full_name ?? "Unassigned"}</div>
          <div>Coach: {p.coach?.full_name ?? "—"}</div>
        </div>
        <div className="cmd-card" style={{ display: "grid", gap: 8 }}>
          <div className="cmd-lbl">Disclosure</div>
          {d ? (<>
            <div>Delivered {shortDate(d.delivered_at)}{d.acknowledged_at ? `, acknowledged ${shortDate(d.acknowledged_at)}` : ", not acknowledged"}</div>
            <div>{opens <= new Date() ? <span className="cmd-chip g">Payments open</span> : <span className="cmd-chip w">Payments open {shortDate(opens)}</span>}</div>
          </>) : <div className="cmd-muted">Not sent yet. It goes out automatically when discovery is marked held.</div>}
        </div>
      </div>
      <div className="cmd-card">
        <h2 className="cmd-h2" style={{ marginBottom: 8 }}>Activity</h2>
        {acts?.length ? acts.map((a) => (
          <div key={a.id} style={{ padding: "8px 0", borderBottom: "1px solid var(--line)" }}>
            <span className="cmd-chip">{a.kind}</span> <span className="cmd-muted">{shortDate(a.created_at)}</span>
            <div>{a.body}</div>
          </div>
        )) : <div className="cmd-muted">No activity logged yet.</div>}
      </div>
    </>
  );
}

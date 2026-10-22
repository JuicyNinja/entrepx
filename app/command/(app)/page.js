import Link from "next/link";
import { getSession } from "../../../lib/command/session";
import { STAGE_LABEL, TIER_LABEL, shortDate } from "../../../lib/command/format";
import { Empty, LoadError } from "./Empty";

export const metadata = { title: "Dashboard" };

const today = () =>
  new Date().toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric", timeZone: "America/Denver" });

export default async function Dashboard() {
  const { supabase, role, name } = await getSession();
  const since = new Date(Date.now() - 30 * 864e5).toISOString();

  const [leads, newCount, sessions, committed, members, firstRights, approvals] = await Promise.all([
    supabase.from("prospects").select("id, first_name, last_name, latest_score, latest_tier, utm_source, created_at, stage")
      .in("stage", ["survey_complete", "contacted"]).order("created_at", { ascending: false }).limit(8),
    supabase.from("prospects").select("id", { count: "exact", head: true }).gte("created_at", since),
    supabase.from("prospects").select("id", { count: "exact", head: true }).in("stage", ["discovery_booked", "discovery_complete"]),
    supabase.from("prospects").select("id", { count: "exact", head: true }).eq("stage", "committed"),
    supabase.from("prospects").select("id", { count: "exact", head: true }).eq("stage", "member"),
    supabase.from("first_right_offers").select("id", { count: "exact", head: true }).eq("status", "open"),
    role === "owner" || role === "admin"
      ? supabase.from("approvals").select("id, title", { count: "exact" }).eq("status", "pending").order("created_at").limit(5)
      : Promise.resolve({ data: [], count: 0 }),
  ]);
  const err = [leads, newCount, sessions, committed, members, firstRights, approvals].find((r) => r.error)?.error;

  const tiles = [
    ["New in 30 days", newCount.count ?? 0],
    ["In discovery", sessions.count ?? 0],
    ["Committed", committed.count ?? 0],
    ["Active members", members.count ?? 0],
    ["Open first rights", firstRights.count ?? 0],
  ];

  return (
    <>
      <div className="cmd-head">
        <div><div className="cmd-lbl">{today()}</div><h1 className="cmd-h1">Hello, {name.split(" ")[0]}</h1></div>
        <Link className="cmd-btn" href="/command/contacts">Contacts</Link>
      </div>
      {err && <LoadError error={err} />}

      {approvals.count > 0 && (
        <Link href="/command/approvals" className="cmd-card" style={{ background: "var(--vault)", color: "var(--on-vault)", textDecoration: "none", display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <span><strong>{approvals.count} approval{approvals.count === 1 ? "" : "s"} waiting on you</strong> · {approvals.data.map((a) => a.title).join(", ")}</span>
          <span className="cmd-lbl" style={{ color: "var(--on-vault)" }}>Review</span>
        </Link>
      )}

      <div className="cmd-grid">
        {tiles.map(([l, n]) => (
          <div className="cmd-card" key={l}><div className="cmd-lbl">{l}</div><div className="cmd-num">{n}</div></div>
        ))}
      </div>

      {leads.data?.length ? (
        <div className="cmd-card flush">
          <div className="cmd-row" style={{ justifyContent: "space-between", padding: "0 12px 8px" }}>
            <h2 className="cmd-h2">New leads</h2><Link className="cmd-link" href="/command/pipeline">Open pipeline</Link>
          </div>
          <div className="cmd-scroll">
            <table className="cmd-t">
              <thead><tr><th>Name</th><th>Score</th><th>Tier</th><th>Source</th><th>Stage</th><th>Came in</th></tr></thead>
              <tbody>
                {leads.data.map((p) => (
                  <tr key={p.id}>
                    <td><Link className="cmd-link" href={`/command/contacts/${p.id}`}>{p.first_name} {p.last_name}</Link></td>
                    <td>{p.latest_score ?? "—"}</td>
                    <td>{p.latest_tier ? <span className="cmd-chip">{TIER_LABEL[p.latest_tier]}</span> : "—"}</td>
                    <td>{p.utm_source ?? "Direct"}</td>
                    <td>{STAGE_LABEL[p.stage]}</td>
                    <td>{shortDate(p.created_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <Empty title="No surveys yet.">
          Your numbers fill in as people take the survey at entrepx.com/survey. Share the link, turn on ads, and invite your BDR in Settings.
        </Empty>
      )}
    </>
  );
}

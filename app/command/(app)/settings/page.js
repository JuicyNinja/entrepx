import { requireRole, ROLE_LABEL } from "../../../../lib/command/session";
import { usd } from "../../../../lib/command/format";
import { LoadError } from "../Empty";

export const metadata = { title: "Settings" };

const CLASS = { starter: "Starter", class_1: "Class 1", class_2: "Class 2", class_3: "Class 3", class_4: "Class 4" };

export default async function Settings() {
  const { supabase } = await requireRole("owner", "admin");
  const [staff, pricing] = await Promise.all([
    supabase.from("staff").select("user_id, full_name, email, role, active").order("full_name"),
    supabase.from("pricing_ranges").select("*").order("class"),
  ]);
  return (
    <>
      <div className="cmd-head"><div><div className="cmd-lbl">Owner only for pricing</div><h1 className="cmd-h1">Settings</h1></div></div>
      {(staff.error || pricing.error) && <LoadError error={staff.error || pricing.error} />}
      <div className="cmd-card flush">
        <h2 className="cmd-h2" style={{ padding: "0 12px 8px" }}>Staff and roles</h2>
        <div className="cmd-scroll"><table className="cmd-t">
          <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th></tr></thead>
          <tbody>{staff.data?.map((s) => (
            <tr key={s.user_id}><td style={{ fontWeight: 600 }}>{s.full_name}</td><td>{s.email}</td><td>{ROLE_LABEL[s.role]}</td>
              <td>{s.active ? <span className="cmd-chip g">Active</span> : <span className="cmd-chip">Off</span>}</td></tr>
          ))}</tbody>
        </table></div>
        <p className="cmd-muted" style={{ padding: "8px 12px 0", margin: 0, fontSize: 14 }}>Inviting staff from this screen comes in Phase 1. Until then, staff are added in Supabase (see docs/command-setup.md).</p>
      </div>
      <div className="cmd-card flush">
        <h2 className="cmd-h2" style={{ padding: "0 12px 8px" }}>Proposal pricing ranges</h2>
        <div className="cmd-scroll"><table className="cmd-t">
          <thead><tr><th>Class</th><th>Startup fee</th><th>Per added unit</th><th>Monthly</th><th>Commitment deposit</th><th>Owner option</th><th>Extension</th></tr></thead>
          <tbody>{pricing.data?.map((r) => (
            <tr key={r.class}><td style={{ fontWeight: 600 }}>{CLASS[r.class]}</td>
              <td>{usd(r.startup_min_cents)}–{usd(r.startup_max_cents)}</td><td>{usd(r.per_unit_cents)}</td>
              <td>{usd(r.monthly_min_cents)}–{usd(r.monthly_max_cents)}</td><td>{usd(r.commitment_deposit_cents)}</td>
              <td>{usd(r.option_fee_cents)}</td><td>{usd(r.extension_fee_cents)}</td></tr>
          ))}</tbody>
        </table></div>
      </div>
    </>
  );
}

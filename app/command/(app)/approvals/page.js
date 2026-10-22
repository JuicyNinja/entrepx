import { requireRole } from "../../../../lib/command/session";
import { shortDate } from "../../../../lib/command/format";
import { Empty, LoadError } from "../Empty";
import { decide } from "./actions";

export const metadata = { title: "Approvals" };

const KIND = {
  pricing_exception: "Pricing", payment_plan: "Payment plan", contract_countersign: "Contract · countersign",
  playbook_publish: "Playbook · publish", session_summary: "Session summary", coverage_plan: "Added territory · coverage plan",
  refund_or_cancel_exception: "Refund or cancel exception",
};

export default async function Approvals() {
  const { supabase } = await requireRole("owner", "admin");
  const { data, error } = await supabase.from("approvals")
    .select("id, kind, title, detail, created_at").eq("status", "pending").order("created_at");
  const old = (d) => Date.now() - new Date(d).getTime() > 2 * 864e5;

  return (
    <>
      <div className="cmd-head"><div><div className="cmd-lbl">Owner and admin</div><h1 className="cmd-h1">Approvals</h1></div></div>
      {error && <LoadError error={error} />}
      {data?.length ? (
        <div className="cmd-card" style={{ padding: "4px 24px" }}>
          {data.map((a) => (
            <div key={a.id} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "12px 20px", alignItems: "center", padding: "16px 0", borderBottom: "1px solid var(--line)" }}>
              <div>
                <div className="cmd-lbl">{KIND[a.kind]}</div>
                <div style={{ fontWeight: 600 }}>{a.title}</div>
                {a.detail && <div className="cmd-muted" style={{ fontSize: 14 }}>{a.detail}</div>}
              </div>
              <form action={decide} className="cmd-row" style={{ gap: 10 }}>
                <input type="hidden" name="id" value={a.id} />
                <span className={old(a.created_at) ? "cmd-chip w" : "cmd-chip"}>{shortDate(a.created_at)}</span>
                <button className="cmd-btn" name="decision" value="declined">Decline</button>
                <button className="cmd-btn p" name="decision" value="approved">Approve</button>
              </form>
            </div>
          ))}
        </div>
      ) : (
        !error && <Empty title="All caught up.">Nothing needs you right now.</Empty>
      )}
    </>
  );
}

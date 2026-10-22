import { requireRole } from "../../../../lib/command/session";
import { FAMILY_LABEL, TERRITORY_STATUS, shortDate } from "../../../../lib/command/format";
import { Empty, LoadError } from "../Empty";

export const metadata = { title: "Territories" };

export default async function Territories() {
  const { supabase } = await requireRole("owner", "admin", "sales_rep");
  const [{ data, error }, { data: offers }] = await Promise.all([
    supabase.from("territories").select("id, name, family, kind, units, status, owned_since, owner:prospects!territories_owner_id_fkey(first_name, last_name, business_name)").order("name"),
    supabase.from("first_right_offers").select("territory_id, due_at, extension_paid_at").eq("status", "open"),
  ]);
  const due = Object.fromEntries((offers ?? []).map((o) => [o.territory_id, o]));
  const counts = Object.fromEntries(Object.keys(TERRITORY_STATUS).map((k) => [k, (data ?? []).filter((t) => t.status === k).length]));

  return (
    <>
      <div className="cmd-head"><div><div className="cmd-lbl">Exclusive per service family</div><h1 className="cmd-h1">Territories</h1></div></div>
      {error && <LoadError error={error} />}
      <div className="cmd-grid">
        {Object.entries(TERRITORY_STATUS).map(([k, v]) => (
          <div className="cmd-card" key={k}><div className="cmd-lbl">{v.label}</div><div className="cmd-num">{counts[k]}</div></div>
        ))}
      </div>
      {data?.length ? (
        <div className="cmd-card flush"><div className="cmd-scroll">
          <table className="cmd-t">
            <thead><tr><th>Territory</th><th>Family</th><th>Units</th><th>Status</th><th>Owner</th><th>First right due</th></tr></thead>
            <tbody>
              {data.map((t) => (
                <tr key={t.id}>
                  <td style={{ fontWeight: 600 }}>{t.name}</td>
                  <td>{FAMILY_LABEL[t.family]}</td>
                  <td className="cmd-muted">{t.units.join(", ") || "—"}</td>
                  <td><span className={`cmd-chip ${TERRITORY_STATUS[t.status].tone}`}>{TERRITORY_STATUS[t.status].label}</span></td>
                  <td>{t.owner ? `${t.owner.business_name ?? t.owner.first_name + " " + (t.owner.last_name ?? "")}${t.owned_since ? ` · since ${shortDate(t.owned_since)}` : ""}` : "—"}</td>
                  <td>{due[t.id] ? `${shortDate(due[t.id].due_at)}${due[t.id].extension_paid_at ? " · extended" : ""}` : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div></div>
      ) : (
        !error && <Empty title="No territories drawn yet.">Territories are drawn when an opportunity is built. The map and drawing tools come in Phase 1.</Empty>
      )}
    </>
  );
}

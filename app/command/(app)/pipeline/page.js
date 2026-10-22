import Link from "next/link";
import { getSession } from "../../../../lib/command/session";
import { STAGE_LABEL, TIER_LABEL } from "../../../../lib/command/format";
import { LoadError } from "../Empty";

export const metadata = { title: "Pipeline" };

const STAGES = ["survey_complete", "contacted", "discovery_booked", "discovery_complete", "opportunity_presented", "proposal_sent", "committed", "assessment_scheduled", "assessment_complete", "playbook_delivered"];

export default async function Pipeline() {
  const { supabase } = await getSession();
  const { data, error } = await supabase.from("prospects")
    .select("id, first_name, last_name, stage, latest_score, latest_tier, updated_at")
    .in("stage", STAGES).order("updated_at", { ascending: false }).limit(500);
  const by = Object.fromEntries(STAGES.map((s) => [s, []]));
  data?.forEach((p) => by[p.stage].push(p));

  return (
    <>
      <div className="cmd-head"><div><div className="cmd-lbl">{data?.length ?? 0} open</div><h1 className="cmd-h1">Sales pipeline</h1></div></div>
      {error && <LoadError error={error} />}
      <div className="cmd-cols">
        {STAGES.map((s) => (
          <div className="cmd-col" key={s}>
            <div className="cmd-row" style={{ justifyContent: "space-between" }}><span className="cmd-lbl">{STAGE_LABEL[s]}</span><span className="cmd-muted">{by[s].length}</span></div>
            {by[s].length === 0 && <div className="cmd-muted" style={{ fontSize: 13 }}>Nobody here.</div>}
            {by[s].slice(0, 25).map((p) => (
              <Link key={p.id} href={`/command/contacts/${p.id}`} className="cmd-deal cmd-link">
                <span>{p.first_name} {p.last_name}</span>
                {p.latest_tier && <span className="cmd-muted" style={{ fontWeight: 400 }}>{TIER_LABEL[p.latest_tier]} {p.latest_score}</span>}
              </Link>
            ))}
            {by[s].length > 25 && <span className="cmd-muted" style={{ fontSize: 13 }}>+ {by[s].length - 25} more</span>}
          </div>
        ))}
      </div>
    </>
  );
}

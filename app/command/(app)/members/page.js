import { requireRole } from "../../../../lib/command/session";
import { Planned } from "../Empty";

export const metadata = { title: "Members" };

export default async function Page() {
  await requireRole("owner","admin","coach");
  return <Planned title="Members" lead="Track every member's playbook, check-ins and health." items={["Member pipeline and health", "Client profile with assessment, coaching and playbook", "Coach messages"]} />;
}

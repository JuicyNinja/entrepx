import { requireRole } from "../../../../lib/command/session";
import { Planned } from "../Empty";

export const metadata = { title: "Reports" };

export default async function Page() {
  await requireRole("owner","admin");
  return <Planned title="Reports" lead="Is the machine producing members?" items={["Funnel by step and source", "Cost per contact and per commit", "Recurring revenue and retention"]} />;
}

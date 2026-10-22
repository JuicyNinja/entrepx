import { requireRole } from "../../../../lib/command/session";
import { Planned } from "../Empty";

export const metadata = { title: "Opportunity Generator" };

export default async function Page() {
  await requireRole("owner","admin","sales_rep");
  return <Planned title="Opportunity Generator" lead="Build ranked packages for a prospect and size the proposal." items={["Owner Profile inputs and size ceiling", "Ranked packages with fit scores", "Proposal builder with pricing ranges and fit checks"]} />;
}

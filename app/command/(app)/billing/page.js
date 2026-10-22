import { requireRole } from "../../../../lib/command/session";
import { Planned } from "../Empty";

export const metadata = { title: "Billing" };

export default async function Page() {
  await requireRole("owner","admin");
  return <Planned title="Billing" lead="Stripe-backed fees, deposits and agreements." items={["Startup fees, monthly and deposits from Stripe", "Agreements, renewals and cancellations", "Failed-payment retries"]} />;
}

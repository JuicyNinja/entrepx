import { isConfigured } from "../../../lib/supabase/env";
import { getSession, ROLE_LABEL } from "../../../lib/command/session";
import SetupNeeded from "../SetupNeeded";
import Sidebar from "./Sidebar";

const ALL = ["owner", "admin", "sales_rep", "bdr", "coach"];
const NAV = [
  { href: "/command", label: "Dashboard", roles: ALL },
  { href: "/command/pipeline", label: "Pipeline", roles: ["owner", "admin", "sales_rep", "bdr"] },
  { href: "/command/contacts", label: "Contacts", roles: ALL },
  { href: "/command/opportunities", label: "Opportunities", roles: ["owner", "admin", "sales_rep"] },
  { href: "/command/members", label: "Members", roles: ["owner", "admin", "coach"] },
  { href: "/command/billing", label: "Billing", roles: ["owner", "admin"] },
  { href: "/command/territories", label: "Territories", roles: ["owner", "admin", "sales_rep"] },
  { href: "/command/reports", label: "Reports", roles: ["owner", "admin"] },
  { href: "/command/approvals", label: "Approvals", roles: ["owner", "admin"], badge: "approvals" },
  { href: "/command/settings", label: "Settings", roles: ["owner", "admin"] },
];

export default async function AppLayout({ children }) {
  if (!isConfigured) return <SetupNeeded />;
  const { supabase, user, role, name } = await getSession();

  if (!role) {
    return (
      <div className="cmd-login">
        <div className="cmd-card">
          <div className="cmd-lbl">EntrepX Command</div>
          <h1 className="cmd-h1" style={{ fontSize: 26 }}>This account doesn't have staff access.</h1>
          <p className="cmd-muted" style={{ margin: 0 }}>Signed in as {user.email}. Ask an owner or admin to add you.</p>
          <form action="/command/signout" method="post"><button className="cmd-btn">Sign out</button></form>
        </div>
      </div>
    );
  }

  let approvals = 0;
  if (role === "owner" || role === "admin") {
    const { count } = await supabase.from("approvals").select("id", { count: "exact", head: true }).eq("status", "pending");
    approvals = count ?? 0;
  }
  const items = NAV.filter((n) => n.roles.includes(role)).map((n) => ({ ...n, count: n.badge === "approvals" ? approvals : 0 }));

  return (
    <div className="cmd-app">
      <Sidebar items={items} name={name} roleLabel={ROLE_LABEL[role]} />
      <main className="cmd-main">{children}</main>
    </div>
  );
}

import { redirect } from "next/navigation";
import { isConfigured } from "../../../lib/supabase/env";
import { createClient } from "../../../lib/supabase/server";
import LoginForm from "./LoginForm";
import SetupNeeded from "../SetupNeeded";

export const metadata = { title: "Staff sign-in" };
export const dynamic = "force-dynamic";

export default async function LoginPage() {
  if (!isConfigured) return <SetupNeeded />;
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  if (data?.claims?.sub) redirect("/command");
  return (
    <div className="cmd-login">
      <LoginForm />
    </div>
  );
}

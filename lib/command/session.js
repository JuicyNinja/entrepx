import { cache } from "react";
import { redirect } from "next/navigation";
import { createClient } from "../supabase/server";

export const ROLE_LABEL = { owner: "Owner", admin: "Admin", sales_rep: "Sales rep", bdr: "Business development rep", coach: "Coach" };

// One lookup per request: who is signed in and what staff role they hold.
export const getSession = cache(async () => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/command/login");
  const { data: role } = await supabase.rpc("my_staff_role");
  let name = user.email;
  if (role) {
    const { data } = await supabase.from("staff").select("full_name").eq("user_id", user.id).maybeSingle();
    if (data?.full_name) name = data.full_name;
  }
  return { supabase, user, role: role ?? null, name };
});

// Page-level guard. Hidden nav is not security; RLS is. This just avoids showing empty screens.
export async function requireRole(...allowed) {
  const s = await getSession();
  if (!s.role || !allowed.includes(s.role)) redirect("/command");
  return s;
}

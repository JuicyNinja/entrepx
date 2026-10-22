"use server";
import { revalidatePath } from "next/cache";
import { getSession } from "../../../../lib/command/session";

export async function decide(formData) {
  const { supabase, user } = await getSession();
  const id = String(formData.get("id"));
  const status = formData.get("decision") === "approved" ? "approved" : "declined";
  // RLS decides who may approve which kind; this update simply fails for anyone else.
  const { error } = await supabase.from("approvals")
    .update({ status, decided_by: user.id, decided_at: new Date().toISOString() })
    .eq("id", id).eq("status", "pending");
  if (error) throw new Error(error.message);
  revalidatePath("/command", "layout");
}

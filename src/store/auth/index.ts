import { Database } from "@/supabase/supabase.types";
import { atom } from "jotai";

export const userAtom = atom<
  Database["public"]["Tables"]["profiles"]["Row"] | null
>(null);
export const avatarAtom = atom<string | null>(null);

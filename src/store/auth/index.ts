import { atom } from "jotai";
import { Session } from "@supabase/supabase-js";

export const userAtom = atom<Session | null>(null);
export const avatarAtom = atom<string | null>(null);

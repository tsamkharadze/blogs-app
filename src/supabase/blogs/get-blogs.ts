import { supabase } from "..";
import { Database } from "../supabase.types";

export const getBlogs = async (): Promise<
  Database["public"]["Tables"]["blogs"]["Insert"][]
> => {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false })
    .throwOnError();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

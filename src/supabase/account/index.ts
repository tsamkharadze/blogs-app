import { supabase } from "..";

export const fillProfileInfo = async ({
  id,
  Name_En,
  name_Ka,
  phone_Number,
  avatar_url,
}: {
  id: string;
  Name_En: string;
  name_Ka: string;
  phone_Number: string;
  avatar_url: string;
}) => {
  return supabase.from("profiles").upsert({
    id,
    full_name_en: Name_En,
    full_name_ka: name_Ka,
    phone_number: phone_Number,
    avatar_url: avatar_url,
  });
};

export const getProfileInfo = (id: string | number) => {
  return supabase.from("profiles").select("*").eq("id", id);
};

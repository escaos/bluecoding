import { supabase } from "@/lib/supabase";

export const convertUrl = (url: string) => {
  return url;
};

export const countUrl = (url: string) => {
  return url;
};

export const getPopular = async () => {
  const records = await supabase.from("urls").select();

  return records;
};

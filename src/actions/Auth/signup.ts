import { supabase } from "@/lib/supabaseClient";

export const signUp = async (email: string, password: string, name: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name
        },
      },
    });
    if (error) throw error;
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

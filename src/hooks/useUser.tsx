import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabaseClient";

const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, isSetLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      isSetLoading(true);
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        setUser(data.user);
      }
      isSetLoading(false);
    };

    fetchUser();
  }, []);

  return { user, isLoading };
};

export default useUser;

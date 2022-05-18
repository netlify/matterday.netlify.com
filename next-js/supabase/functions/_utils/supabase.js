import { createClient } from "https://esm.sh/@supabase/supabase-js@^1.33.2";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
);

export default supabase;

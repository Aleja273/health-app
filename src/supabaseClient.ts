import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL ="https://vrryjqqjlahuisfbsziy.supabase.co";
const SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZycnlqcXFqbGFodWlzZmJzeml5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1NjIwNzksImV4cCI6MjA1OTEzODA3OX0.tpQvGa91Jm-VRn6J-BOov_0Q3L5WN1l5bKoz8oEcXc0";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  
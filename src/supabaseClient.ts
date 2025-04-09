import { createClient } from "@supabase/supabase-js";
 
 const SUPABASE_URL = "https://wredipjwrhyegenhxoog.supabase.co";
 const SUPABASE_ANON_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyZWRpcGp3cmh5ZWdlbmh4b29nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1NjIwNTUsImV4cCI6MjA1OTEzODA1NX0.Xk8dWgGZAjK7DeE5SE4nhwy5keCB3lOh5OUF9F6q9Xc";
 
 export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
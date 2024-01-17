import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pelzylezxcnvargibpcz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlbHp5bGV6eGNudmFyZ2licGN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE1MzA3MjQsImV4cCI6MjAxNzEwNjcyNH0.3JHADBgxyU_iMFSGbn1digQpAGYoCXBfotWqwGe3UiM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wwqwomftlksnassorbxd.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3cXdvbWZ0bGtzbmFzc29yYnhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA4NjU4NzUsImV4cCI6MjAzNjQ0MTg3NX0.oMBTYbtcpj1wDgpR9xPxrahK84FAZmVDTtS36lURyE8"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

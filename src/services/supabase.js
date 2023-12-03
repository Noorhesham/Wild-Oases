import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://mzwluaqrsonukztloqjh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16d2x1YXFyc29udWt6dGxvcWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE1OTUzNTgsImV4cCI6MjAxNzE3MTM1OH0.Iy0kVfzYVxFgThb_55CjDKW-s04-7IyJCFK-mvwCeDA";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;

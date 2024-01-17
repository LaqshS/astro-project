import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dqxgrennzfwzxrktaogt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxeGdyZW5uemZ3enhya3Rhb2d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwNzQ3NDQsImV4cCI6MjAyMDY1MDc0NH0.-fVXI1WaQrZ0mxO41hqYJL61fcZFAQQBhkhkdawxAX0";
export const supabase = createClient(supabaseUrl, supabaseKey);
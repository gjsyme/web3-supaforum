import { createClient } from '@supabase/supabase-js';

// in your docker-compose that's generated by your local docker-compose
// should be changed to dotenv
export const supabase = createClient(
  'http://localhost:8000',
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTYwMzk2ODgzNCwiZXhwIjoyNTUwNjUzNjM0LCJyb2xlIjoiYW5vbiJ9.36fUebxgx1mcBo4s19v0SzqmzunP--hm_hep0uLX0ew'
  );


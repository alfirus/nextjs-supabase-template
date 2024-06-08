import { createClient } from './supabase/client';

export function getPublicUrlFromBrowserClient(bucket: string, path: string) {
  const supabaseClient = createClient();
  const { data } = supabaseClient.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
}

export function getPublicUrlFromServerClient(bucket: string, path: string) {
  const supabaseClient = createClient();
  const { data } = supabaseClient.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
}

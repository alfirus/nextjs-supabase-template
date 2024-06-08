import { createClient } from './supabase/server';

export const getUser = async () => {
  const supabaseServer = createClient();
  const {
    data: { user },
  } = await supabaseServer.auth.getUser();

  if (!user) {
    return null;
  }
  return user;
};

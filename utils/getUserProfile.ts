import { getUser } from './getUser';
import { createClient } from './supabase/server';

export const getUserProfile = async () => {
  const user = await getUser();

  if (!user) {
    return null;
  }

  const supabaseServer = createClient();
  const { data: profile, error } = await supabaseServer
    .from('profiles')
    .select('user_id, displayname, username, website, avatar_img')
    .eq('user_id', user.id)
    .single();

  if (error || !profile) {
    return null;
  }

  return { ...profile, email: user.email } as Profile;
};

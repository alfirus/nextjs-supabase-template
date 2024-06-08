import AccountForm from '@/components/_shared/AccountForm';
import { createClient } from '@/utils/supabase/server';

export default async function FirstSettingAccountPage() {
  const supabaseServer = createClient();
  const {
    data: { user },
  } = await supabaseServer.auth.getUser();

  return <AccountForm user={user} />;
}

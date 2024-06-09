import AccountForm from '@/components/_shared/AccountForm';
import { generateRandomUsername } from '@/utils/generateRandom';
import { getUser } from '@/utils/getUser';
import { getUserProfile } from '@/utils/getUserProfile';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function FirstSettingAccountPage() {
  const user = await getUser();
  let profile = await getUserProfile();

  // 認証されていない場合はトップページにリダイレクト
  if (!user) {
    redirect('/');
  }

  // 初回ログイン時はprofileがないので、profilesテーブルに追加
  if (user && !profile) {
    const supabaseServer = createClient();
    // 初期はランダムなusernameを生成して、profilesテーブルに追加
    const { data, error: profileInsertError } = await supabaseServer
      .from('profiles')
      .insert({ user_id: user.id as string, username: generateRandomUsername() })
      .select('*')
      .single();
    if (profileInsertError) {
      redirect('/error');
    }
    profile = { ...data, email: user.email as string };
  }
  // profileをすでに設定している場合はトップページにリダイレクト
  if (profile?.displayname !== null) {
    redirect('/');
  }
  return (
    <div className="flex h-screen w-full items-center">
      <AccountForm profile={profile} />;
    </div>
  );
}

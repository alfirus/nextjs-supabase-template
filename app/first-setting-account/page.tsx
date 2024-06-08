import AccountForm from '@/components/_shared/AccountForm';
import { getUser } from '@/utils/getUser';
import { getUserProfile } from '@/utils/getUserProfile';
import { redirect } from 'next/navigation';

export default async function FirstSettingAccountPage() {
  const user = await getUser();
  const profile = await getUserProfile();
  if (!user || !profile) {
    redirect('/');
  }
  return (
    <div className="flex h-screen w-full items-center">
      <AccountForm profile={profile} />;
    </div>
  );
}

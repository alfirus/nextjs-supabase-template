import CanvasContainer from '@/components/page/CanvasContainer';
import SendMessageContainer from '@/components/page/SendMessageContainer';
import Sidebar from '@/components/page/SideBar';
import { userPrompt } from '@/utils/const';
import Header from '@/components/_shared/Header';
import { getUserProfile } from '@/utils/getUserProfile';
import { redirect } from 'next/navigation';

export default async function Page() {
  const profile = await getUserProfile();
  if (!profile) {
    redirect('/login');
  }
  return (
    <div className="h-screen w-full overflow-hidden">
      <Header profile={profile} />
      <div className="grid h-full pl-12 md:pl-40">
        <Sidebar />
        <div className="flex h-[calc(100%-3rem)] w-full flex-col overflow-hidden">
          <div className="grid flex-1 gap-4 overflow-hidden p-2">
            <CanvasContainer profile={profile} userPrompt={userPrompt} />
          </div>
          <SendMessageContainer />
        </div>
      </div>
    </div>
  );
}

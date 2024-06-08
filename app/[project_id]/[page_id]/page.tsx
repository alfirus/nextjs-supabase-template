import CanvasContainer from '@/components/page/CanvasContainer';
import SendMessageContainer from '@/components/page/SendMessageContainer';
import Sidebar from '@/components/page/SideBar';
import { userPrompt } from '@/utils/const';
import Header from '@/components/_shared/Header';

export default function Page() {
  return (
    <div className="h-screen w-full overflow-hidden">
      <Header />
      <div className="grid h-full pl-12 md:pl-40">
        <Sidebar />
        <div className="flex h-[calc(100%-3rem)] w-full flex-col overflow-hidden">
          <div className="grid flex-1 gap-4 overflow-hidden p-2">
            <CanvasContainer userPrompt={userPrompt} />
          </div>
          <SendMessageContainer />
        </div>
      </div>
    </div>
  );
}

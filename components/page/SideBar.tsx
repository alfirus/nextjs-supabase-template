import { LifeBuoy, SquareUser, Triangle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import HistoryContainer from '@/components/page/HistoryContainer';

export default function Sidebar() {
  return (
    <aside className="inset-y fixed left-0 z-20 flex h-full w-12 flex-col items-center justify-center border-r md:w-40">
      <div className="flex items-center gap-4 border-b p-2">
        <h1 className="text-xl font-semibold max-md:hidden">Eureka</h1>
        <h1 className="text-xl font-semibold md:hidden">E</h1>
      </div>
      <div className="flex justify-center">
        <HistoryContainer />
      </div>
      <TooltipProvider>
        <nav className="mt-auto grid gap-1 p-2">
          <div className="hidden items-center space-x-2 md:flex">
            <Button variant="ghost" size="icon" className="mt-auto rounded-lg" aria-label="Help">
              <LifeBuoy className="size-5" />
            </Button>
            <span className="text-sm">Help</span>
          </div>
          <div className="hidden items-center space-x-2 md:flex">
            <Button variant="ghost" size="icon" className="mt-auto rounded-lg" aria-label="Account">
              <SquareUser className="size-5" />
            </Button>
            <span className="text-sm">Account</span>
          </div>
          <div className="md:hidden">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="mt-auto rounded-lg" aria-label="Help">
                  <LifeBuoy className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Help
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="mt-auto rounded-lg" aria-label="Account">
                  <SquareUser className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Account
              </TooltipContent>
            </Tooltip>
          </div>
        </nav>
      </TooltipProvider>
    </aside>
  );
}

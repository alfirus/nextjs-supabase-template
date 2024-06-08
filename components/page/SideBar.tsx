import { LifeBuoy, SquareUser, Triangle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import HistoryContainer from '@/components/page/HistoryContainer';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="inset-y fixed left-0 z-20 flex h-[calc(100%-3rem)] max-h-[calc(100%-3rem)] w-12 flex-col items-center justify-center overflow-auto border-r md:w-40">
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
          {/* <Link href={'/profile'}>
            <div className="hidden items-center space-x-2 md:flex">
              <Button variant="ghost" size="icon" className="mt-auto rounded-lg" aria-label="Account">
                <SquareUser className="size-5" />
              </Button>
              <span className="text-sm">Account</span>
            </div>
          </Link> */}
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
            {/* <Tooltip>
              <Link href={'/profile'}>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="mt-auto rounded-lg" aria-label="Account">
                    <SquareUser className="size-5" />
                  </Button>
                </TooltipTrigger>

                <TooltipContent side="right" sideOffset={5}>
                  Account
                </TooltipContent>
              </Link>
            </Tooltip> */}
          </div>
        </nav>
      </TooltipProvider>
    </aside>
  );
}

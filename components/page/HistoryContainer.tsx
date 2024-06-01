'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronsLeft } from 'lucide-react';
import Image from 'next/image';

export default function HistoryContainer() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`@container hidden max-h-[calc(100vh-190px)] w-[138px] shrink-0 origin-left select-none flex-col overflow-hidden rounded-lg bg-gray-50 py-2 transition-all duration-300 ease-out lg:flex ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex items-center px-2 pb-3 transition-transform duration-300 ease-out">
        <h2 className="text-sm font-medium text-gray-700 opacity-100 transition-all duration-300">History</h2>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto h-4 w-4 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
          onClick={toggleOpen}
        >
          <ChevronsLeft className="h-4 w-4 transition-transform duration-300" />
          <span className="sr-only">Toggle</span>
        </Button>
      </div>
      <div className="no-scrollbar flex flex-1 flex-col-reverse overflow-auto">
        <div className="flex flex-col gap-3 px-[6px]" data-area="thumbnails">
          {/* Thumbnail items */}
          <div data-id="c-5XU2hfGPvTS">
            <button className="group relative z-10 flex h-full min-h-[25px] w-full min-w-[40px] shrink-0 cursor-pointer rounded-md outline-none focus:ring-gray-700 focus-visible:ring-1">
              <div className="aspect-video w-full origin-top-left overflow-hidden rounded-md border border-gray-200 shadow-sm transition-all duration-300 ease-out hover:border-gray-700 group-[[data-state=open]]:border-gray-700 [&_iframe]:hover:!opacity-100">
                <div className="h-full w-full opacity-50 hover:opacity-100 group-[[data-state=open]]:opacity-100">
                  <Image
                    alt="Thumbnail for prompt: An AI playground with a sidebar navigation and a main content area. The playground has a header with a settings drawer and a share button. The sidebar has navigation links and a user menu. The main content area shows a form to configure the model and messages."
                    src="/fortune.png"
                    width={320}
                    height={180}
                    className="aspect-video object-cover text-left text-xs text-zinc-700"
                  />
                </div>
              </div>
              <div className="absolute bottom-1 left-1 z-10 flex h-6 w-8 items-center justify-center rounded-sm border border-gray-100 bg-gray-100 px-2 font-mono text-xs leading-none text-gray-500 transition-all duration-300 hover:border-gray-200 hover:bg-gray-200 hover:text-gray-700 group-hover:bg-gray-200 group-hover:text-gray-700 group-[[data-state=open]]:border-gray-200 group-[[data-state=open]]:bg-gray-200 group-[[data-state=open]]:text-gray-700">
                v0
              </div>
            </button>
          </div>
          <div data-id="c-5XU2hfGPvTS">
            <button className="group relative z-10 flex h-full min-h-[25px] w-full min-w-[40px] shrink-0 cursor-pointer rounded-md outline-none focus:ring-gray-700 focus-visible:ring-1">
              <div className="aspect-video w-full origin-top-left overflow-hidden rounded-md border border-gray-200 shadow-sm transition-all duration-300 ease-out hover:border-gray-700 group-[[data-state=open]]:border-gray-700 [&_iframe]:hover:!opacity-100">
                <div className="h-full w-full opacity-50 hover:opacity-100 group-[[data-state=open]]:opacity-100">
                  <Image
                    alt="Thumbnail for prompt: An AI playground with a sidebar navigation and a main content area. The playground has a header with a settings drawer and a share button. The sidebar has navigation links and a user menu. The main content area shows a form to configure the model and messages."
                    src="/fortune.png"
                    width={320}
                    height={180}
                    className="aspect-video object-cover text-left text-xs text-zinc-700"
                  />
                </div>
              </div>
              <div className="absolute bottom-1 left-1 z-10 flex h-6 w-8 items-center justify-center rounded-sm border border-gray-100 bg-gray-100 px-2 font-mono text-xs leading-none text-gray-500 transition-all duration-300 hover:border-gray-200 hover:bg-gray-200 hover:text-gray-700 group-hover:bg-gray-200 group-hover:text-gray-700 group-[[data-state=open]]:border-gray-200 group-[[data-state=open]]:bg-gray-200 group-[[data-state=open]]:text-gray-700">
                v1
              </div>
            </button>
          </div>
          {/* More thumbnail items */}
        </div>
      </div>
    </div>
  );
}

'use client';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Separator } from '../ui/separator';
import { Monitor, Tablet, Smartphone, Maximize, History, FlipHorizontal, Code, Code2, Proportions } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';
import { getPublicUrlFromServerClient } from '@/utils/getPublicUrlFromStorage';

export default function CanvasHeader({
  profile,
  userPrompt,
  screen,
  setScreen,
  isOpenCodeContainer,
  setIsOpenCodeContainer,
}: {
  profile: Profile;
  userPrompt: string;
  screen: string;
  setScreen: Dispatch<SetStateAction<string>>;
  isOpenCodeContainer: boolean;
  setIsOpenCodeContainer: Dispatch<SetStateAction<boolean>>;
}) {
  const handleScreenChange = (screen: string) => {
    setScreen(screen);
  };
  const handleCodeClick = () => {
    setIsOpenCodeContainer((prev) => !prev);
  };
  return (
    <div className="flex items-center pb-2">
      <Avatar className="mr-1 h-8 w-8">
        <AvatarImage src={profile.avatar_img ? getPublicUrlFromServerClient('avatars', profile.avatar_img) : ''} alt="Avatar" />
        <AvatarFallback>
          <span className="sr-only">Avatar Fallback</span>
          <svg className="h-full w-full" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </AvatarFallback>
      </Avatar>
      <div className="overflow-hidden text-ellipsis rounded-2xl bg-[#ebebeb] px-3 py-1">
        <span>{userPrompt}</span>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <div className="flex h-10 items-center gap-1 rounded-md border border-border bg-background p-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`hidden h-8 text-muted-foreground hover:bg-gray-100 hover:text-gray-900 lg:flex ${
                    screen === 'desktop' ? 'bg-gray-200 text-gray-900' : ''
                  }`}
                  onClick={() => handleScreenChange('desktop')}
                >
                  <Monitor className="h-4 w-4" />
                  <span className="sr-only">Desktop</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Desktop</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`hidden h-8 text-muted-foreground hover:text-gray-900 lg:flex ${
                    screen === 'tablet' ? 'bg-gray-200 text-gray-900' : ''
                  }`}
                  onClick={() => handleScreenChange('tablet')}
                >
                  <Tablet className="h-4 w-4" />
                  <span className="sr-only">Tablet</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Tablet</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`hidden h-8 text-muted-foreground hover:text-gray-900 lg:flex ${
                    screen === 'mobile' ? 'bg-gray-200 text-gray-900' : ''
                  }`}
                  onClick={() => handleScreenChange('mobile')}
                >
                  <Smartphone className="h-4 w-4" />
                  <span className="sr-only">Mobile</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Mobile</TooltipContent>
            </Tooltip>
            <Separator orientation="vertical" className="hidden h-5 lg:flex" />
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-gray-900">
                  <Maximize className="h-4 w-4" />
                  <span className="sr-only">Full Screen</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Full Screen</TooltipContent>
            </Tooltip>
            <Separator orientation="vertical" className="hidden h-5 lg:flex" />
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-gray-900 aria-expanded:bg-gray-100">
                  <FlipHorizontal className="h-4 w-4" />
                  <span className="sr-only">More</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>More</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Button className="ml-auto gap-1.5 sm:w-[95px]" onClick={handleCodeClick}>
          {isOpenCodeContainer ? (
            <>
              <span className="hidden sm:inline-block">Canvas</span>
              <Proportions className="h-4 w-4 shrink-0" />
            </>
          ) : (
            <>
              <span className="hidden sm:inline-block">Code</span>
              <Code2 className="h-4 w-4 shrink-0" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}

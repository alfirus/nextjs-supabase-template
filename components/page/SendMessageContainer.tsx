'use client';

import React, { use, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, Zap } from 'lucide-react';
import { useSendPrompt } from '@/hooks/useSendPrompt';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import AuthForm from '../login/AuthForm';
import { getPublicUrlFromBrowserClient } from '@/utils/getPublicUrlFromStorage';

export default function SendMessageContainer({ profile }: { profile: Profile | null }) {
  const { setUserPrompt } = useSendPrompt();
  const [isOpenAuthDialog, setIsOpenDialog] = useState(false);

  const onClickSend = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!profile) {
      setIsOpenDialog(true);
      return;
    } else {
      // send prompt
    }
  };

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setUserPrompt(e.target.value);
  };
  return (
    <div className="z-40 flex w-full origin-bottom justify-center sm:-translate-y-1">
      <div className="relative z-10 flex h-12 min-h-12 w-full max-w-[540px] items-center justify-center gap-2 rounded-3xl bg-gray-900 px-2 shadow-lg transition-all duration-300 sm:shadow-black/40">
        <div className="hidden items-center justify-center rounded-l-full sm:flex">
          <Avatar>
            <AvatarImage src={profile?.avatar_img ? getPublicUrlFromBrowserClient('avatars', profile.avatar_img) : ''} alt="Avatar" />
            <AvatarFallback>
              <span className="sr-only">Avatar Fallback</span>
              <svg className="h-full w-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="relative flex w-full min-w-0 flex-1 items-center self-end border-gray-700 pl-2 sm:border-l">
          <form className="h-full w-full">
            <div className="relative flex w-full flex-1 items-center gap-2 transition-all duration-300">
              <label className="sr-only" htmlFor="textarea-input">
                Prompt
              </label>
              <div className="relative flex w-full min-w-0 flex-1 items-center justify-between self-start">
                <textarea
                  id="main-input"
                  placeholder="作りたいものを入力してね"
                  className="max-h-[6rem] min-h-[3rem] w-full flex-[1_0_50%] resize-none border-0 bg-transparent py-2.5 pr-2 text-sm leading-relaxed text-white shadow-none  outline-none ring-0 [scroll-padding-block:0.75rem]  placeholder:text-zinc-400 disabled:bg-transparent disabled:opacity-80 sm:py-3"
                  rows={1}
                  maxLength={1000}
                  minLength={2}
                  onInput={(e) => {
                    const textarea = e.target as HTMLTextAreaElement;
                    textarea.style.height = 'auto';
                    textarea.style.height = `${textarea.scrollHeight}px`;
                  }}
                  onChange={handleChangeTextArea}
                />
              </div>
              <div className="flex">
                <Button id="send-button" type="submit" size="icon" onClick={onClickSend}>
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
                <Dialog open={isOpenAuthDialog} onOpenChange={setIsOpenDialog}>
                  <DialogContent className="sm:h-[80%] sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>Authentication Required</DialogTitle>
                    </DialogHeader>
                    <AuthForm onAuthSuccess={() => setIsOpenDialog(false)} />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

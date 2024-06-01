'use client';

import { useState } from 'react';
import Canvas from './Canvas';
import CanvasHeader from './CanvasHeader';
import CodeContainer from './CodeContainer';

export default function CanvasContainer({ userPrompt }: { userPrompt: string }) {
  const [screen, setScreen] = useState('desktop');
  const [isOpenCodeContainer, setIsOpenCodeContainer] = useState<boolean>(false);
  return (
    <div className="relative flex h-full min-h-[50vh] w-full flex-col justify-center overflow-hidden rounded-xl bg-gray-50 p-2 lg:col-span-2">
      <CanvasHeader
        userPrompt={userPrompt}
        screen={screen}
        setScreen={setScreen}
        isOpenCodeContainer={isOpenCodeContainer}
        setIsOpenCodeContainer={setIsOpenCodeContainer}
      />
      <div className="flex h-full max-w-full flex-1 justify-center gap-4 overflow-hidden">
        <Canvas screen={screen} />

        {isOpenCodeContainer && <CodeContainer />}
      </div>
    </div>
  );
}

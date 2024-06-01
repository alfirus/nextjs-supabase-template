'use client';

import { sampleComponentCode } from '@/utils/const';
import RenderReactComponent from './RenderReactComponent';
export default function Canvas({ screen }: { screen: string }) {
  let screenClass = '';

  switch (screen) {
    case 'desktop':
      screenClass = 'w-full';
      break;
    case 'tablet':
      screenClass = 'max-w-[768px]';
      break;
    case 'mobile':
      screenClass = 'max-w-[375px]';
      break;
    default:
      screenClass = 'w-full';
  }

  return (
    <div
      className={`max-h-full min-w-[275px] flex-1 overflow-auto rounded-lg border-2 border-black/10 bg-white shadow-sm transition-all duration-200 ${screenClass}`}
    >
      <RenderReactComponent componentCode={sampleComponentCode} />
    </div>
  );
}

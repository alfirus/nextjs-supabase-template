import { Terminal, Clipboard, Info, Code } from 'lucide-react';
import { sampleComponentCode } from '@/utils/const';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeContainer() {
  return (
    <div
      className="animate-slide-left-in flex max-h-full min-w-[275px] flex-1 flex-col overflow-hidden rounded-lg border-2 border-black/10 bg-gray-50 bg-white text-gray-900 shadow-sm transition-all duration-200"
      data-id="code-browser"
    >
      <div className="flex flex-col gap-2 p-4 sm:gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="flex items-center gap-1 text-sm font-medium text-gray-950">
            Add <span className="hidden sm:inline">this component </span>to your project
            <a
              className="inline-flex items-center"
              target="_blank"
              title="Learn more"
              href="/docs#integrating-generated-code-into-your-nextjs-app"
            >
              <span className="sr-only">Learn more</span>
              <Info className="ml-0.5 h-3 w-3" />
            </a>
          </h2>
          <div className="text-[12px] text-gray-500 sm:text-[13px]">
            By using this <span className="hidden sm:inline">code or product</span> you agree to the{' '}
            <a
              className="underline decoration-gray-500 underline-offset-2 transition-all hover:text-gray-700 hover:decoration-gray-700"
              target="_blank"
              href="/agreement"
            >
              pre-release agreement
            </a>
            .
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <button className="pointer-events-auto inline-flex h-8 flex-1 items-center justify-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap rounded-lg border border-black/10 bg-white px-3 py-1.5 text-sm font-light text-gray-500 shadow-none transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-100">
              <div className="line-clamp-1 flex flex-1 items-center gap-2 font-mono text-[13px]">
                <Terminal className="h-4 w-4" />
                <span className="inline-block truncate">npx eureka add 1YiDshbxahS </span>
              </div>
              <span className="sr-only">Copy cli command</span>
              <Clipboard className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
      <div className="z-10 flex translate-y-px justify-between pr-4">
        <div className="relative ml-4 w-0 flex-1 text-sm">
          <div className="-ml-4 flex h-full items-end gap-1 overflow-x-scroll px-4">
            <button className="font-regular relative h-full whitespace-nowrap rounded-t-lg border border-b-0 bg-white px-3 pb-1 pt-1.5 text-[13px] transition-colors">
              MainComponent.jsx
            </button>
          </div>
        </div>
      </div>
      <div className="relative flex-1 overflow-auto border-t">
        <SyntaxHighlighter
          language="jsx"
          style={tomorrow}
          customStyle={{
            fontFamily: 'monospace',
            fontSize: '13px',
            lineHeight: '1.5',
            margin: '0',
            borderRadius: '0.5rem',
            backgroundColor: '#1d1f21', // ダークテーマの背景色
            overflowX: 'auto',
          }}
        >
          {sampleComponentCode}
        </SyntaxHighlighter>

        <button className="absolute right-4 top-5 z-10 flex h-6 shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-md border border-input bg-white px-1.5 text-xs font-medium text-gray-500 shadow-none transition-colors hover:bg-gray-100 hover:text-gray-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          Copy Code
          <Clipboard className="h-4 w-4" />
          <span className="sr-only">Copy CLI command</span>
        </button>
      </div>
    </div>
  );
}

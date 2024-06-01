'use client';
import React, { useEffect, useRef, useState } from 'react';
import * as Babel from '@babel/standalone';
import { createRoot } from 'react-dom/client';
import * as ChakraUI from '@chakra-ui/react';

export default function RenderReactComponent({ componentCode }: { componentCode: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<any>(null); // createRoot のインスタンスを保持するための ref

  useEffect(() => {
    if (componentCode && containerRef.current) {
      // containerRef.current が存在し、まだルートが生成されていない場合にのみ createRoot を呼び出す
      if (!rootRef.current) {
        rootRef.current = createRoot(containerRef.current);
        const doc = containerRef.current.ownerDocument;
        const head = doc.head;

        // Tailwind CSSをドキュメントの<head>に追加
        const script = doc.createElement('script');
        script.src = 'https://cdn.tailwindcss.com';
        head.appendChild(script);
      }
      try {
        // コードをトランスパイル
        const transformedCode = Babel.transform(componentCode, {
          presets: ['react'],
        }).code;

        console.log('Transformed code:', transformedCode);

        // トランスパイルされたコードを関数として評価
        const Component = new Function('React', 'useState', 'useEffect', 'ChakraUI', `return ${transformedCode}`)(
          React,
          useState,
          useEffect,
          ChakraUI,
        );

        // 既存のルートを使用してレンダリング
        rootRef.current.render(<Component />);
      } catch (error) {
        console.error('Error rendering component:', error);
      }
    }
  }, [componentCode]);

  return <div ref={containerRef} />;
}

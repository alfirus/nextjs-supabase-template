"use client"
import React from 'react';

function MainComponent() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [chatResponse, setChatResponse] = React.useState('');

  const fetchChatGPTResponse = async () => {
    setIsLoading(true);
    const response = await fetch('/api/integrations/chat-gpt/conversationgpt4', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [{
          role: "user",
          content: "Create a React component"
        }],
        system_prompt: 'Explain how to create a React component',
      }),
    });
    const data = await response.json();
    setChatResponse(data.choices[0].message.content);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#1DA1F2]">
      <button
        onClick={fetchChatGPTResponse}
        className="text-white font-roboto bg-[#000000] mb-4 py-2 px-4 rounded-lg hover:bg-[#14171A] focus:outline-none focus:ring-2 focus:ring-[#1C9CEA] focus:ring-opacity-50"
      >
        {isLoading ? '読み込み中...' : 'アラートを表示'}
      </button>
      <div className="text-white font-roboto max-w-xl text-center">
        {chatResponse ? chatResponse : 'ChatGPTの応答をここに表示します。'}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="w-full">
      <h1>React Preview</h1>
      <p>Write some JSX code in the textarea below and click the button to see the preview.</p>
      <MainComponent />
    </div>
  );
}
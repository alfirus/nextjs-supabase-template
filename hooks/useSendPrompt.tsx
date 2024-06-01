import { useState } from 'react';

export function useSendPrompt() {
  const [userPrompt, setUserPrompt] = useState('');

  const sendPrompt = async (prompt: string) => {
    const response = await fetch('http://localhost:5000/send-prompt', {});
    const data = await response.json();
    setUserPrompt(data.prompt);
  };

  return {
    userPrompt,
    setUserPrompt,
  };
}

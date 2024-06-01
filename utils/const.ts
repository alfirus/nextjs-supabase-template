export const userPrompt = '占い師チャットbotを作って';

export const sampleComponentCode = `function MainComponent() {
    const [userQuestion, setUserQuestion] = useState('');
    const [systemPrompt, setSystemPrompt] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    const fetchChatGPTResponse = async () => {
      if (!userQuestion.trim()) return;
      setIsLoading(true);
      const response = await fetch('/api/integrations/chat-gpt/conversationgpt4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [{
            role: "user",
            content: userQuestion
          }],
          system_prompt: systemPrompt,
        }),
      });
      const data = await response.json();
      setIsLoading(false);
      setChatHistory([...chatHistory, { role: "user", content: userQuestion }, { role: "ai", content: data.choices[0].message.content }]);
      setUserQuestion(''); // Clear the input after sending
    };
  
    const handleInputChange = (event) => {
      setUserQuestion(event.target.value);
    };
  
    const handleSystemPromptChange = (event) => {
      setSystemPrompt(event.target.value);
    };
  
    const handleQuestionSubmit = (event) => {
      event.preventDefault();
      fetchChatGPTResponse();
    };
  
    return (
      <div className="bg-purple-100 h-[1000px] flex flex-col items-center">
        <div className="flex flex-row justify-center items-start mt-10">
          <img src="/fortune.png" alt="Fortune Teller" className="h-48 w-48"/>
          <div className="ml-4 mt-12">
            <h1 className="text-4xl font-bold text-purple-800">Fortune Teller</h1>
            <p className="text-lg mt-2 text-gray-600">Ask a question and get insights into your future.</p>
            <div className="mt-4">
              <input
                className="border-2 border-purple-300 p-2 w-full rounded"
                type="text"
                placeholder="System Prompt..."
                value={systemPrompt}
                onChange={handleSystemPromptChange}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white p-6 shadow-lg rounded-lg mt-6 w-3/4">
          <h2 className="text-xl font-semibold text-purple-800">Chat History</h2>
          <div className="flex-grow overflow-y-auto mt-4 h-64">
            {chatHistory.map((entry, index) => (
              <div key={index} className={\`\${entry.role === "ai" ? "text-right" : "text-left"} p-2\`}>
                <p className={\`\${entry.role === "ai" ? "bg-purple-300" : "bg-blue-300"} inline-block rounded px-4 py-2\`}>{entry.content}
                    {entry.role === "ai" && <span className="ml-2 inline-block">🔮</span>}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <input
              className="border-2 border-purple-300 p-2 w-full rounded"
              type="text"
              placeholder="Type your question..."
              value={userQuestion}
              onChange={handleInputChange}
            />
            <button
              className="mt-2 py-2 w-full bg-purple-600 text-white rounded hover:bg-purple-700 focus:outline-none"
              onClick={handleQuestionSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Ask Fortune Teller"}
            </button>
          </div>
        </div>
      </div>
    );
  }`;

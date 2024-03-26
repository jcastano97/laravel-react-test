import {PlusIcon} from "@heroicons/react/24/outline";
import {useEffect} from "react";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";

export default function ChatbotPreview({chatId, history, onChatbotUpdate}) {
  const [chatHistory, setChatHistory] = useState([...history]);

  const addHistory = (message) => {
    chatHistory.splice(chatHistory.length, 0, {
      id: uuidv4(),
      type: "user",
      message
    });
    setChatHistory([...chatHistory]);
    onChatbotUpdate(chatHistory);
  };

  const setHistory = (index, message) => {
    chatHistory.splice(index, 0, {
      id: uuidv4(),
      type: "user",
      message
    });
    setChatHistory([...chatHistory]);
    onChatbotUpdate(chatHistory);
  };

  useEffect(() => {
    setChatHistory(history)
  }, [history]);

  return (
    <>
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold">Preview ({chatId})</h3>
        <button
          type="button"
          className="flex items-center text-sm py-1 px-4 rounded-sm text-white bg-gray-600 hover:bg-gray-700"
          onClick={() => addHistory()}
        >
          <PlusIcon className="w-4 mr-2"/>
          Add question
        </button>
      </div>
        <div className="text-gray-400 text-center py-4">
            You don't have any questions created
        </div>
    </>
  );
}

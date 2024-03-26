import { ArrowTopRightOnSquareIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react";
import TButton from "../../core/TButton";

export default function ChatbotListItem({ chatbot, onDeleteClick }) {
  return (
    <div className="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[470px]">
      <img
        src={chatbot.image_url}
        alt={chatbot.title}
        className="w-full h-48 object-cover"
      />
      <h4 className="mt-4 text-lg font-bold">{chatbot.title}</h4>
      <div
        dangerouslySetInnerHTML={{ __html: chatbot.description }}
        className="overflow-hidden flex-1"
      ></div>

      <div className="flex justify-between items-center mt-3">
        <TButton to={`/surveys/${chatbot.id}`}>
          <PencilIcon className="w-5 h-5 mr-2 " />
          Edit
        </TButton>
        <div className="flex items-center">
          <TButton href={`/view/chatbot/${chatbot.slug}`} circle link>
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </TButton>

          {chatbot.id && (
            <TButton onClick={ev => onDeleteClick(chatbot.id)} circle link color="red">
              <TrashIcon className="w-5 h-5" />
            </TButton>
          )}
        </div>
      </div>
    </div>
  );
}

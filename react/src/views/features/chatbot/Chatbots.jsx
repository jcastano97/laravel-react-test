import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import axiosClient from "../../../axios";
import TButton from "../../../components/core/TButton";
import PageComponent from "../../../components/PageComponent";
import PaginationLinks from "../../../components/PaginationLinks";
import ChatbotListItem from "../../../components/features/chatbot/ChatbotListItem";
import { useStateContext } from "../../../contexts/ContextProvider";

export default function Chatbots() {
  const { showToast } = useStateContext();
  const [chatbots, setChatbots] = useState([]);
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(false);

  const onDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this survey?")) {
      axiosClient.delete(`/survey/${id}`).then(() => {
        getSurveys();
        showToast('The survey was deleted');
      });
    }
  };

  const onPageClick = (link) => {
    getSurveys(link.url);
  };

  const getSurveys = (url) => {
    url = url || "/survey";
    setLoading(true);
    axiosClient.get(url).then(({ data }) => {
      setChatbots(data.data);
      setMeta(data.meta);
      setLoading(false);
    });
  };

  useEffect(() => {
    getSurveys();
  }, []);

  return (
    <PageComponent
      title="Chatbots"
      buttons={
        <TButton color="green" to="/chatbots/create">
          <PlusCircleIcon className="h-6 w-6 mr-2" />
          Create new
        </TButton>
      }
    >
      {loading && <div className="text-center text-lg">Loading...</div>}
      {!loading && (
        <div>
          {chatbots.length === 0 && (
            <div className="py-8 text-center text-gray-700">
              You don't have chatbots created
            </div>
          )}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {chatbots.map((chatbot) => (
              <ChatbotListItem
                chatbot={chatbot}
                key={chatbot.id}
                onDeleteClick={onDeleteClick}
              />
            ))}
          </div>
          {chatbots.length > 0 && <PaginationLinks meta={meta} onPageClick={onPageClick} />}
        </div>
      )}
    </PageComponent>
  );
}

import { useParams } from "react-router-dom";
import MessagesPage from "./MessagesPage";

export default function ConversationPage() {
  const { conversation_id, participant_id } = useParams();

  return (
    <div className=" lg:grid lg:h-full lg:grid-cols-5 xl:grid-cols-6">
      <div className="hidden border-r border-white dark:border-neutral-800 lg:col-span-2  lg:grid ">
        <MessagesPage />
      </div>
      <div className=" border-r border-white p-2 dark:border-neutral-800 lg:col-span-3">
        <h1>conversation {conversation_id}</h1>
      </div>
      <div className="hidden xl:grid xl:p-2">
        <p>{participant_id}</p>
      </div>
    </div>
  );
}
import { Link, NavLink } from "react-router-dom";
import glassesKissSvg from "../assets/reshot-icon-glasses-kiss-YUSND43AHW.svg";
import { DateTime } from "luxon";
import DefaultImage from "./DefaultImage";

export default function ConversationCard({ conversation }) {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // // use users time zone to format the date of comment
  const formattedDate = DateTime.fromISO(conversation.lastMessage.timestamp)
    .setZone(userTimeZone)
    .toLocaleString(DateTime.DATETIME_SHORT);

  const lastMessageSmaller = conversation.lastMessage.content.slice(0, 30);

  const linkStyle =
    "relative flex flex-row gap-3 px-4 py-2 hover:bg-stone-100 h-[85px]  dark:hover:bg-zinc-800 border-b border-gray-300 dark:border-neutral-700";
  const activeLinkStyle =
    "relative flex flex-row gap-3 px-4 py-2 dark:bg-neutral-800 h-[85px] bg-gray-100  border-b border-gray-300 dark:border-neutral-700";
  return (
    <NavLink
      to={`/conversation/${conversation.conversation_id}`}
      className={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
    >
      {conversation.participant.profile_pic_src ? (
        <img
          className=" h-[60px] w-[60px] rounded-full border-2 border-gray-200  object-cover object-center"
          src={conversation.participant.profile_pic_src}
          alt=""
        />
      ) : (
        <DefaultImage size="[60px]" />
      )}
      <div className="flex w-full flex-row items-center justify-between ">
        <div className="flex flex-col justify-center">
          <p>{conversation.participant.username}</p>
          <p className="text-s text-gray-500">{lastMessageSmaller}...</p>
        </div>
        <p className=" p-2 text-xs">{formattedDate}</p>
      </div>
    </NavLink>
  );
}

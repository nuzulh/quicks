import { assetService } from "@/services";
import { Text } from "../";
import { ChatRoom, cn, formatDateTime } from "@/helpers";
import { useMemo } from "react";

type ChatListItemProps = {
  chatRoom: ChatRoom;
  isLastItem: boolean;
  onOpenChatRoom: (chatRoom: ChatRoom) => void;
};

export function ChatListItem({
  chatRoom,
  isLastItem,
  onOpenChatRoom,
}: ChatListItemProps) {
  const lastChat = useMemo(
    () => [...chatRoom.chats].pop(),
    [chatRoom]
  );

  if (!lastChat) return null;

  return (
    <div
      onClick={() => onOpenChatRoom(chatRoom)}
      className={cn(
        "py-[22px] flex flex-row items-start cursor-pointer border-b-2 border-gray/50",
        isLastItem && "border-none",
      )}
    >
      <div className="flex absolute mt-1">
        {chatRoom.participants.length > 2 ? (
          <>
            <img
              src={assetService.getIcons("person-dark")}
              className="p-2 w-8 rounded-full bg-light"
              alt="person-light-icon"
            />
            <img
              src={assetService.getIcons("person-light")}
              className="p-2 w-8 rounded-full bg-blue ml-[-16px]"
              alt="person-light-icon"
            />
          </>
        ) : (
          <Text
            className="text-white bg-blue ml-2 w-8 h-8 rounded-full font-semibold flex items-center justify-center"
          >
            {lastChat.sender.name[0] || "?"}
          </Text>
        )}
      </div>
      <div className="ml-16">
        <div className="flex items-start gap-4">
          <Text className="text-blue font-semibold line-clamp-2">
            {chatRoom.title}
          </Text>
          <Text className="text-sm w-40 mt-1">
            {formatDateTime(chatRoom.lastActive)}
          </Text>
        </div>
        {chatRoom.participants.length > 2 && (
          <Text className="text-sm font-semibold line-clamp-1">
            {lastChat.sender.name} :
          </Text>
        )}
        <Text className="text-sm line-clamp-1">
          {lastChat.message}
        </Text>
      </div>
      {!lastChat.isReaded && (
        <div className="rounded-full bg-error w-2 h-2 self-end absolute right-[38px] mb-4" />
      )}
    </div>
  );
}

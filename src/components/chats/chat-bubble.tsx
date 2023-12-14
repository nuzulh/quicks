import { Chat, cn, formatDateTime } from "@/helpers";
import { Text } from "..";
import { assetService } from "@/services";
import { useToggle } from "@/hooks";

export type ChatBubbleActions = "EDIT" | "DELETE" | "REPLY" | "SHARE";

type ChatBubbleProps = {
  chat: Chat;
  onAction: (action: ChatBubbleActions) => void;
};

export function ChatBubble({
  chat,
  onAction,
}: ChatBubbleProps) {
  const {
    value: isShowOptions,
    toggle,
  } = useToggle();

  return (
    <div
      key={chat.id}
      className={cn(
        "flex flex-col my-2 text-xs",
        chat.isOwned ? "items-end" : "items-start"
      )}
    >
      <Text
        className={cn(
          "font-semibold mb-1",
          chat.sender.textColor || "text-blue",
        )}
      >
        {chat.sender.name}
      </Text>
      <div
        className={cn(
          "flex items-start",
          chat.isOwned ? "flex-row" : "flex-row-reverse"
        )}
      >
        <img
          role="button"
          src={assetService.getIcons("dots")}
          className="mx-2 w-5"
          onClick={toggle}
          alt="chat-actions"
        />
        {isShowOptions && (
          <>
            <div className="absolute inset-0" onClick={toggle} />
            <div
              className={cn(
                "rounded w-28 bg-white border-[1px] border-gray/50 flex flex-col mt-6",
                "absolute",
              )}
            >
              <button
                className="py-2 w-full hover:bg-light/50 border-b-[1px] border-gray/50"
                onClick={() => {
                  onAction(chat.isOwned ? "EDIT" : "REPLY");
                  toggle();
                }}
              >
                <Text
                  className={cn(
                    "text-blue text-sm text-start ml-4",
                  )}
                >
                  {chat.isOwned ? "Edit" : "Reply"}
                </Text>
              </button>
              <button
                className="py-2 w-full hover:bg-light/50"
                onClick={() => {
                  onAction(chat.isOwned ? "DELETE" : "SHARE");
                  toggle();
                }}
              >
                <Text
                  className={cn(
                    "text-blue text-sm text-start ml-4",
                    chat.isOwned && "text-error",
                  )}
                >
                  {chat.isOwned ? "Delete" : "Share"}
                </Text>
              </button>
            </div>
          </>
        )}
        <div
          className={cn(
            "p-2 rounded max-w-md",
            chat.sender.backgroundColor || "bg-semiwhite",
          )}
        >
          <Text>
            {chat.message}
          </Text>
          <Text className="mt-2 mr-1">
            {formatDateTime(chat.sentAt, { timeStyle: "short" })}
          </Text>
        </div>
      </div>
    </div>
  );
}

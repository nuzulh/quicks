import { ChatRoom } from "@/helpers";
import {
  Button,
  ChatBubble,
  ChatBubbleActions,
  ChatSeparator,
  Form,
  ScrollArea,
  Text,
} from "..";
import { assetService } from "@/services";
import { useForm } from "react-hook-form";
import { Fragment } from "react";

type ChatroomViewProps = {
  chatRoom: ChatRoom;
  onBack: () => void;
  onClose: () => void;
};

export function ChatroomView({
  chatRoom,
  onBack,
  onClose,
}: ChatroomViewProps) {
  const { control, watch, resetField } = useForm();

  function onSendMessage() {
    // TODO: implement send message function
    console.log(watch("message"));
    resetField("message");
  }

  function onChatBubbleAction(action: ChatBubbleActions) {
    switch (action) {
      case "EDIT":
        break;
      case "DELETE":
        break;
      case "REPLY":
        break;
      case "SHARE":
        break;
    }
  }

  return (
    <>
      <div className="flex flex-col h-full mb-[-32px]">
        <div
          className="flex items-center justify-between gap-4 pb-[22px] mx-[-32px] border-b-[1px] border-gray/50"
        >
          <div className="flex items-center gap-4 pl-[32px]">
            <img
              role="button"
              src={assetService.getIcons("arrow-left")}
              onClick={onBack}
              alt="back"
            />
            <div className="flex flex-col">
              <Text className="text-blue font-semibold line-clamp-1">
                {chatRoom.title}
              </Text>
              <Text className="text-xs text-background">
                {chatRoom.participants.length} Participants
              </Text>
            </div>
          </div>
          <img
            role="button"
            src={assetService.getIcons("close")}
            className="pr-[32px]"
            onClick={onClose}
            alt="back"
          />
        </div>
        <ScrollArea className="mb-[32px]">
          {chatRoom.chats.map((chat, index) => (
            <Fragment key={chat.id}>
              {!chat.isReaded && chatRoom.chats[index - 1].isReaded && (
                <ChatSeparator label="New Message" variant="warning" />
              )}
              <ChatBubble
                chat={chat}
                onAction={onChatBubbleAction}
              />
            </Fragment>
          ))}
        </ScrollArea>
      </div>
      <div className="flex gap-4">
        <Form.TextInput
          control={control}
          name="message"
          className="py-2"
          placeholder="Type a new message"
        />
        <Button
          className="text-sm px-5"
          onClick={onSendMessage}
        >
          Send
        </Button>
      </div>
    </>
  );
}

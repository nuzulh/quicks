/* eslint-disable react-hooks/exhaustive-deps */
import { Button, ChatListItem, ChatroomView, Form, Loading, MainContainer, PopupCard, Text } from "@/components";
import { ChatRoom, chatRoomsDummy, cn, taskOptions } from "@/helpers";
import { useDebounce, useToggle } from "@/hooks";
import { assetService } from "@/services";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

export default function HomePage() {
  const {
    value: isOpenIndicators,
    toggle: toggleIndicators,
    off: hideIndicators,
  } = useToggle();
  const {
    value: isOpenChats,
    toggle: toggleChats,
    off: hideChats,
  } = useToggle();
  const {
    value: isOpenTodos,
    toggle: toggleTodos,
    off: hideTodos,
  } = useToggle();
  const {
    value: isLoading,
    on: showLoading,
    off: hideLoading,
  } = useToggle();

  const [selectedChatRoom, setSelectedChatRoom] = useState<ChatRoom | null>(null);

  const {
    control,
    watch,
  } = useForm();

  const searchQuery = watch("search") || "";
  // const selectedTask = watch("task");

  const chatRooms = useMemo(
    () => chatRoomsDummy.filter(
      (item) => item.title.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    [chatRoomsDummy, searchQuery]
  );

  function closeIndicators() {
    hideIndicators();
    hideChats();
    hideTodos();
  }

  // FOR LOADING UI SHOWCASE ONLY
  useDebounce(
    () => hideLoading(),
    500,
    [isOpenChats, isOpenTodos],
    () => (isOpenChats || isOpenTodos) && showLoading(),
  );

  return (
    <>
      <MainContainer>
        <Text className="text-light">contents here</Text>
      </MainContainer>

      <PopupCard isOpen={isOpenIndicators && isOpenChats}>
        {selectedChatRoom ? (
          <ChatroomView
            chatRoom={selectedChatRoom}
            onBack={() => setSelectedChatRoom(null)}
            onClose={closeIndicators}
          />
        ) : (
          <>
            <Form.TextInput
              control={control}
              name="search"
              placeholder="Search"
              icon="search"
            />
            {isLoading ? (
              <Loading label="Loading Chats ..." />
            ) : (
              !selectedChatRoom && chatRooms.map((chatRoom, index) => (
                <ChatListItem
                  key={chatRoom.id}
                  chatRoom={chatRoom}
                  onOpenChatRoom={(value) => setSelectedChatRoom(value)}
                  isLastItem={(chatRooms.length - 1) === index}
                />
              ))
            )}
          </>
        )}
      </PopupCard>

      <PopupCard isOpen={isOpenIndicators && isOpenTodos}>
        <div className="flex justify-between">
          <Form.SelectInput
            control={control}
            name="task"
            data={taskOptions}
            defaultValue="My Task"
          />
          <Button className="text-sm" onClick={() => {}}>
            New Task
          </Button>
        </div>
        {isLoading ? (
          <Loading label="Loading Task List ..." />
        ) : (
          <></>
        )}
      </PopupCard>

      <section className="flex items-center justify-end absolute bottom-4 right-4 w-full">
        <div
          className={cn(
            "transition-all absolute",
            isOpenIndicators ? "mr-20" : "opacity-0",
            isOpenChats && "mr-0 scale-110 z-10",
            isOpenTodos && "mr-20",
          )}
        >
          <Text
            className={cn(
              "text-semiwhite absolute bottom-12 w-full text-center text-sm",
              isOpenChats || isOpenTodos && isOpenIndicators ? "hidden" : ""
            )}
          >
            Inbox
          </Text>
          <Button
            className={cn(
              "p-3 rounded-full bg-semiwhite hover:bg-semiwhite/90",
              isOpenChats && "bg-success hover:bg-success/90",
            )}
            onClick={() => {
              toggleChats();
              if (isOpenTodos) hideTodos();
            }}
          >
            <img
              src={
                assetService.getIcons(
                  isOpenChats
                    ? "chat-bubbles-light"
                    : "chat-bubbles"
                )
              }
              width={22}
              alt="quicks-icon"
            />
          </Button>
        </div>
        <div
          className={cn(
            "transition-all absolute",
            isOpenIndicators ? "mr-36" : "opacity-0",
            isOpenTodos && "mr-0 scale-110 z-10",
            isOpenChats && "mr-20",
          )}
        >
          <Text
            className={cn(
              "text-semiwhite absolute bottom-12 w-full text-center text-sm",
              isOpenChats || isOpenTodos && isOpenIndicators ? "hidden" : ""
            )}
          >
            Task
          </Text>
          <Button
            className={cn(
              "p-3 rounded-full bg-semiwhite hover:bg-semiwhite/90",
              isOpenTodos && "bg-warning hover:bg-warning/90",
            )}
            onClick={() => {
              toggleTodos();
              if (isOpenChats) hideChats();
            }}
          >
            <img
              src={
                assetService.getIcons(
                  isOpenTodos
                    ? "todo-light"
                    : "todo"
                )
              }
              width={22}
              alt="quicks-icon"
            />
          </Button>
        </div>
        <Button
          className={cn(
            "p-2 rounded-full z-20",
            isOpenChats || isOpenTodos
              ? "bg-dark/80 hover:bg-dark/70 mr-3 z-0"
              : "",
          )}
          onClick={() => {
            toggleIndicators();
            if (isOpenChats) hideChats();
            if (isOpenTodos) hideTodos();
          }}
        >
          <img
            src={assetService.getIcons("quicks")}
            width={
              isOpenChats || isOpenTodos
                ? 32
                : 40
            }
            alt="quicks-icon"
          />
        </Button>
      </section>
    </>
  );
}

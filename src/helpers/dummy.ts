import { SelectInputItem } from "@/components";
import { ChatRoom, Participant } from ".";

export const users: Participant[] = [
  {
    id: "1",
    name: "You",
    textColor: "text-chat1",
    backgroundColor: "bg-chat1Light",
  },
  {
    id: "2",
    name: "Cameron Philips",
    textColor: "text-chat2",
    backgroundColor: "bg-chat2Light",
  },
  {
    id: "3",
    name: "Ellen",
    textColor: "text-chat3",
    backgroundColor: "bg-chat3Light",
  },
  {
    id: "4",
    name: "FastVisa Support",
  },
];

export const chatRoomsDummy: ChatRoom[] = [
  {
    id: "1",
    chats: [
      {
        id: "1",
        sender: users[0],
        sentAt: new Date(),
        message: "No worries. It will be completed ASAP. I've asked him yesterday.",
        isSending: false,
        isOwned: true,
        isReaded: true,
      },
      {
        id: "2",
        sender: users[1],
        sentAt: new Date(),
        message: "Please check this out!",
        isSending: false,
        isOwned: false,
        isReaded: false,
      },
      {
        id: "3",
        sender: users[2],
        sentAt: new Date(),
        message: "Please check this out broooooo!",
        isSending: false,
        isOwned: false,
        isReaded: false,
      },
      {
        id: "4",
        sender: users[1],
        sentAt: new Date(),
        message: "ok",
        isSending: false,
        isOwned: false,
        isReaded: false,
      },
    ],
    title: "109220-Naturalization",
    participants: [
      users[0],
      users[1],
      users[2],
    ],
    lastActive: new Date(),
  },
  {
    id: "2",
    chats: [
      {
        id: "1",
        sender: users[2],
        sentAt: new Date(),
        message: "Hey, please read.",
        isSending: false,
        isOwned: false,
        isReaded: true,
      },
    ],
    title: "Jeannette Moraima Guaman Chamba (Hutto I-589) [Hutto Follow Up - Brief Service]",
    participants: [
      users[0],
      users[1],
      users[2],
    ],
    lastActive: new Date(),
  },
  {
    id: "3",
    chats: [
      {
        id: "1",
        sender: users[3],
        sentAt: new Date(),
        message: "Hey there! Welcome to your inbox.",
        isSending: false,
        isOwned: false,
        isReaded: true,
      },
    ],
    title: "FastVisa Support",
    participants: [
      users[0],
      users[3],
    ],
    lastActive: new Date(),
  },
];

export const taskOptions: SelectInputItem[] = [
  {
    label: "Personal Errands",
    value: "Personal Errands",
  },
  {
    label: "Urgent To-Do",
    value: "Urgent To-Do",
  },
];

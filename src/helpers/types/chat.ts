export type Participant = {
  id: string;
  name: string;
  textColor?: string;
  backgroundColor?: string;
};

export type Chat = {
  id: string;
  sender: Participant;
  replyChatId?: string;
  sentAt: Date;
  message: string;
  isSending: boolean;
  isOwned: boolean;
  isReaded: boolean;
};

export type ChatRoom = {
  id: string;
  chats: Chat[];
  title: string;
  participants: Participant[];
  lastActive: Date;
};

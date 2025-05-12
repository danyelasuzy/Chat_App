import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore.js";
import { ChatHeader } from "./ChatHeader.jsx";
import { MessageInput } from "./MessageInput.jsx";
import { MessageSkeleton } from "./skeletons/MessageSkeleton.jsx";

export const ChatContainer = () => {
  const { messages, getMessages, isMessagesLoading, selectedUser } =
    useChatStore();

  useEffect(() => {
    getMessages(selectedUser._id);
  }, [getMessages, selectedUser._id]);

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
      </div>
    );
  }
  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />
      <p>messages...</p>
      <MessageInput />
    </div>
  );
};

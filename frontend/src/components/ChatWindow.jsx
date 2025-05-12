import { useChatStore } from "../store/useChatStore.js";
import { useThemeStore } from "../store/useThemeStore.js";
import { SideBar } from "./SideBar.jsx";
import { NoChatSelected } from "./NoChatSelected.jsx";
import { ChatContainer } from "./ChatContainer.jsx";

const ChatWindow = () => {
  const { selectedUser } = useChatStore();
  const { theme } = useThemeStore();

  return (
    <div
      data-theme={theme}
      className=" flex-col-1  my-6 flex items-start justify-center shadow-gray-800 overflow-auto"
    >
      <div className="flex items-center justify-center px-4">
        <div className=" rounded-lg w-full">
          <div className="flex h-full rounded-lg overflow-hidden">
            <SideBar />
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;

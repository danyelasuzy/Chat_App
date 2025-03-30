import { useChatStore } from "../store/useChatStore.js";
import { useThemeStore } from "../store/useThemeStore.js";

const ChatWindow = () => {
  const { selectedUser } = useChatStore();
  const { theme } = useThemeStore();

  return (
    <div
      data-theme={theme}
      className=" w-3/4 py-10 px-8 flex items-start justify-center"
    >
      <div className="flex items-center justify-center pt-20 px-4">
        <div className=" rounded-lg w-full">
          <div className="flex h-full rounded-lg overflow-hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;

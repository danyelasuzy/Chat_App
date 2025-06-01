import ProfileBoard from "../components/ProfileBoard";
import ChatBox from "../components/ChatBox";
import NoChatBox from "../components/NoChatBox";
import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import { useThemeStore } from "../store/useThemeStore";

export const ProfilePage = () => {
  const { theme } = useThemeStore();
  const { selectedUser } = useChatStore();
  return (
    <div className=" min-h-screen  px-8 bg-[linear-gradient(135deg,_#667eea66,_#764ba266)]">
      <div className="flex flex-col md:flex-row  min-h-screen h-full md:gap-4 ">
        {/* ChatBox */}
        <div data-theme={theme} className="w-full md:w-2/3 p-4 flex mt-20">
          <Sidebar />
          {selectedUser ? <ChatBox /> : <NoChatBox />}
        </div>

        {/* ProfileBoard */}
        <div className="w-full md:w-1/3 max-w-sm mx-auto p-4 mt-20 flex items-center justify-center">
          <ProfileBoard />
        </div>
      </div>
    </div>
  );
};

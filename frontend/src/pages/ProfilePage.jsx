import ChatWindow from "../components/ChatWindow.jsx";
import { ProfileBoard } from "../components/ProfileBoard.jsx";

const ProfilePage = () => {
  return (
    <div className="h-screen bg-[#f3f1f9] px-10">
      <div className="flex h-screen mx-25 md:gap-40">
        <ProfileBoard />
        <ChatWindow />
      </div>
    </div>
  );
};

export default ProfilePage;

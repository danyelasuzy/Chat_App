import { Camera, SquareUserRound, MailOpen } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore.js";
import { useState } from "react";

const ProfileBoard = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  if (!authUser) {
    return (
      <p className="text-center mt-10 text-gray-500">Loading profile...</p>
    );
  }
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center backdrop-blur-md bg-white/30 shadow-2xl border border-white/50 py-8 md:py-10 px-6 sm:px-10">
      <h1 className="text-2xl md:text-5xl font-semibold pt-2">Profile</h1>

      <div className="relative pt-4">
        <img
          src={selectedImg || authUser.profilePic || "/avatar.png"}
          alt="Profile"
          className="size-34 rounded-full object-cover border-3 my-2 transition-all duration-300 ease-in-out"
        />
        <label
          htmlFor="avatar-upload"
          className="absolute bottom-0 right-0 hover:scale-150 bg-gray-400 rounded-full p-2 cursor-pointer"
        >
          <Camera className="size-6" />
          <input
            type="file"
            id="avatar-upload"
            onChange={handleImageChange}
            className="hidden"
            disabled={isUpdatingProfile}
          />
        </label>
      </div>

      <div className="space-y-2 w-full max-w-sm mt-6">
        <div className="text-center">
          <p className="text-2xl font-semibold">Your personal informations</p>
        </div>

        <div className="flex items-center justify-between py-2">
          <span>Member since</span>
          <span>{authUser.createdAt?.split("T")[0]}</span>
        </div>
        <div className="flex items-center justify-between border-t border-gray-300 py-2">
          <span>Status</span>
          <span className="text-green-500">Active</span>
        </div>
        <div className="flex items-center justify-between border-t border-gray-300 py-2">
          <SquareUserRound />
          <p>{authUser.fullName}</p>
        </div>
        <div className="flex items-center justify-between border-t border-gray-300 py-2">
          <MailOpen />
          <p>{authUser.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileBoard;

import { Camera, SquareUserRound, MailOpen } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useState } from "react";

export const ProfileBoard = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageChange = (e) => {
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
    <div className="bg-[#eae4fc] w-1/4 h-screen py-18 flex flex-col items-center">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl md:text-5xl font-semibold pt-2">Profile</h1>
        </div>
        {/*avatar image*/}
        <div className="relative pt-2">
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
        <div className="space-y-2">
          <div className="text-center">
            {" "}
            <p className="text-2xl mt-6 font-semibold">
              Your personal informations
            </p>
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
    </div>
  );
};

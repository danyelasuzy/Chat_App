import { MessageSquareQuote } from "lucide-react";
import { useThemeStore } from "../store/useThemeStore";

const NoChatBox = () => {
  const { theme } = useThemeStore();
  return (
    <div data-theme={theme} className="h-full w-full p-4 shadow-2xl ">
      <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
        <div className="max-w-md text-center space-y-6">
          {/* Icon Display */}
          <div className="flex justify-center gap-4 mb-4">
            <div className="relative">
              <div
                className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center
             justify-center animate-bounce"
              >
                <MessageSquareQuote className="w-8 h-8 text-primary " />
              </div>
            </div>
          </div>

          {/* Welcome Text */}
          <h2 className="text-2xl font-bold">Welcome to Ping!</h2>
          <p className="text-base-content/60">
            Start a conversation with your friends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoChatBox;

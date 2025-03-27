import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useAuthStore } from "../store/useAuthStore";

// eslint-disable-next-line react/prop-types
export default function Modal({ isOpen, onClose, initialTab = "signup" }) {
  const navigate = useNavigate();
  const [tab, setTab] = useState(initialTab);

  const { signup, login, isSigningUp, isLoggingIn } = useAuthStore();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isOpen) setTab(initialTab);
  }, [initialTab, isOpen]);

  if (!isOpen) return null;

  const validateForm = () => {
    if (tab === "signup" && !formData.fullName.trim())
      return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6)
      return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = validateForm();
    if (!success) return;

    if (tab === "signup") {
      signup(formData, () => {
        navigate("/profile");
        onClose();
      });
    } else if (tab === "login") {
      login(formData, () => {
        navigate("/profile");
        onClose();
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-2xl"
        >
          &times;
        </button>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setTab("signup")}
            className={`px-4 py-2 font-semibold border-b-2 ${
              tab === "signup"
                ? "border-purple-600 text-black"
                : "border-transparent text-gray-500"
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={() => setTab("login")}
            className={`px-4 py-2 font-semibold border-b-2 ${
              tab === "login"
                ? "border-purple-600 text-black"
                : "border-transparent text-gray-500"
            }`}
          >
            Login
          </button>
        </div>

        {/* Shared Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {tab === "signup" && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-2 rounded"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 flex justify-center items-center gap-2"
            disabled={isSigningUp || isLoggingIn}
          >
            {isSigningUp || isLoggingIn ? (
              <>
                <Loader2 className="size-5 animate-spin" />
                Loading...
              </>
            ) : tab === "signup" ? (
              "Create Account"
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

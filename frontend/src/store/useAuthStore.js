import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,

  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  onlineUsers: [],

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check", {
        withCredentials: true,
      });

      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in checkAuth:", error);

      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
  signup: async (data, callback) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });
      if (callback) callback();
    } catch (error) {
      toast.error("Signup failed", error);
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data, callback) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });
      toast.success("Login successful");

      if (callback) callback();
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      set({ isLoggingIn: false });
    }
  },
  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axiosInstance.patch("/auth/update-profile", data);
      if (res.data?.user) {
        set({ authUser: res.data.user });
      }
      toast.success("Profile updated successfully");
    } catch (error) {
      console.log("Error in update profile:", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },
}));

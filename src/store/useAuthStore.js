import { create } from "zustand";
import axiosInstance from "@/utils/axios";

const useAuthStore = create((set) => ({
  user: null,
  role: null,
  isAuthenticated: false,
  setAuth: (isAuthenticated, user) => set({ isAuthenticated, user }),

  register: async (userData) => {
    try {
      const { data } = await axiosInstance.post("/auth/register", userData);
      set({ user: data.user, role: "user" });
    } catch (error) {
      console.error(error.response?.data?.error || "Registration failed");
    }
  },

  login: async (credentials) => {
    try {
      console.log(credentials);
      const { data } = await axiosInstance.post("/auth/login", credentials);
      console.log(data);
      set({ user: data.user, role: data.role });
    } catch (error) {
      console.error(error.response?.data?.error || "Login failed");
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ user: null, role: null });
    } catch (error) {
      console.error("Logout failed", error);
    }
  },

  loadUser: async () => {
    try {
      const { data } = await axiosInstance.get("/auth/profile");
      set({ user: data, role: "user" });
    } catch {
      set({ user: null, role: null });
    }
  },
}));

export default useAuthStore;

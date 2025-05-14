import { create } from "zustand";
import type { User } from "../types";

type UserState = {
  user: User | null;
  setUser: (newUser: User | null) => void;
};

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (newUser) => set({ user: newUser }),
}));

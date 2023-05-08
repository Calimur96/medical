import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type TMenu = {
  isActive: boolean;
  setIsActive: (bool: boolean) => void;
};

export const useMenu = create(
  devtools<TMenu>((set) => ({
    isActive: false,
    setIsActive: (bool) => {
      set({ isActive: bool });
    },
  }))
);

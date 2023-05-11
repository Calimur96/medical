import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type TMenu = {
  isActive: boolean;
  isSelect: string;
  setIsActive: (bool: boolean) => void;
  setIsSelect: (str: string) => void;
};

export const useMenu = create(
  devtools<TMenu>((set) => ({
    isActive: false,
    isSelect: "",
    setIsActive: (bool) => {
      set({ isActive: bool });
    },
    setIsSelect: (str) => {
      set({ isSelect: str });
    },
  }))
);

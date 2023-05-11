import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type TEntries = {
  isActive: boolean;
  step: number;
  setIsActive: (bool: boolean) => void;
  setStep: (num: number) => void;
};

export const useEntries = create(
  devtools<TEntries>((set) => ({
    isActive: false,
    step: 1,
    setIsActive: (bool: boolean) => {
      set({ isActive: bool });
    },
    setStep: (num: number) => {
      set({ step: num });
    },
  }))
);

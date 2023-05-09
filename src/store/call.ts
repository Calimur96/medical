import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type TCall = {
    isActive: boolean;
    setIsActive: (bool: boolean) => void;
};

export const useCall = create(
    devtools<TCall>((set) => ({
        isActive: false,
        setIsActive: (bool) => {
            set({ isActive: bool });
        },
    }))
);

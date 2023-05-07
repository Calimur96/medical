import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IUser } from "../types/user.interface";
import { Auth } from "../services/auth.service";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export type TAuth = {
  user: null | IUser;
  getLogin: (email: string, password: string) => void;
  getRefresh: () => void;
  getRegister: (email: string, password: string) => void;
  getLogout: () => void;

  getConfirmRegister: (email: string) => void;
  getVerifyAccount: (email: string) => void;
  getSessionUser: () => void;
};

export const useAuth = create(
  persist<TAuth>(
    (set) => ({
      user: null,
      getLogin: async (email, password) => {
        await Auth.getLogin(email, password)
          .then((res) => {
            set({ user: res.data });
            cookies.set("email", `${res.data.email}`, { path: "/" });
          })
          .catch((err) => console.error(err));
      },
      getRefresh: async () => {
        console.log("asd");
      },
      getRegister: async (email, password) => {
        await Auth.getRegister(email, password)
          .then(() => console.log("Запрос на регистрацию отправлен"))
          .catch((err) => console.error(err));
      },
      getLogout: async () => {
        localStorage.removeItem("auth");
        Auth.getLogout().then(() => {
          console.log("Вы вышли из аккаунта");
          cookies.remove("email");
        });
      },

      getConfirmRegister: async (email) => {
        await Auth.getConfirmRegister(email)
          .then(() => console.log("На почту отправлено подверждение аккаунта"))
          .catch((err) => console.error(err));
      },
      getVerifyAccount: async (email) => {
        await Auth.getVerifyAccount(email)
          .then(() => console.log("Ваша почта подтверждена"))
          .catch((err) => console.error(err));
      },
      getSessionUser: async () => {
        await Auth.getSessionUser()
          .then((res) => {
            if (res.status === 204) {
              localStorage.removeItem("auth");
              return cookies.remove("email");
            }

            console.log("Вы вошли в аккаунт");
            set({ user: res.data });
          })
          .catch((err) => {
            console.error(err);
            cookies.remove("email");
            localStorage.removeItem("auth");
          });
      },
    }),
    { name: "auth" }
  )
);

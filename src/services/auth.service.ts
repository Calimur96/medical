import axios from "axios";
import { BASE_URL } from "../http/index";

export const Auth = {
  async getLogin(email: string, password: string) {
    return await axios.post(`${BASE_URL}/api/auth/login`, {
      email: email,
      password: password,
    });
  },

  async getRegister(email: string, password: string) {
    return await axios.post(`${BASE_URL}/api/auth/registerRequest`, {
      email: email,
      password: password,
    });
  },

  async getConfirmRegister(email: string) {
    return await axios.post(`${BASE_URL}/api/auth/confirmRegister/${email}`);
  },

  //   async getDenyRegister(reply: string) {
  //     const response = await axios.delete(
  //       `${BASE_URL}/api/auth/denyRegister/${reply}`
  //     );
  //     return response;
  //   },

  //   async getAllRegRequest() {
  //     const response = await axios.get(`${BASE_URL}/api/auth/getAllRegRequest`);
  //     return response;
  //   },

    async getLogout() {
      return await axios.post(`${BASE_URL}/api/auth/logout`);
    },

  async getSessionUser() {
    return await axios.get(`${BASE_URL}/api/auth/sessionUser`);
  },

  async getVerifyAccount(email: string) {
    return await axios.put(`${BASE_URL}/api/auth/verifyAccount/${email}`);
  },
};

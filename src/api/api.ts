import axios from "axios";
import { API_KEY } from "./API-KEY";

export const instance = axios.create({
  // withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": API_KEY,
  },
});

instance.interceptors.request.use(function (config) {
  config.headers["Authorization"] =
    "Bearer " + localStorage.getItem("sn-token");

  return config;
});

export enum ResultCodes {
  Success = 0,
  Error = 1,
}

export enum ResultCodesForCuptcha {
  CaptchaIsRequired = 10,
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance
      .get<GetCaptchaUrl>("/security/get-captcha-url")
      .then((response) => response.data);
  },
};

type GetCaptchaUrl = {
  url: string;
};

export type Response<D = {}, RC = ResultCodes> = {
  data: D;
  messages: Array<string>;
  resultCode: RC;
};

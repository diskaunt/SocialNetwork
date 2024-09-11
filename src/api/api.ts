import axios from "axios";
import { API_KEY } from "./API-KEY";
import {
  ContactsType,
  PhotosType,
  ProfileType,
  UsersType,
} from "../types/types";

const instance = axios.create({
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

type GetUsersType = {
  items: Array<UsersType>;
  totalCount: number;
  error: string;
};

type FollowDeleteType = {
  resultCode: ResultCodes;
  messages: Array<string>;
  data: {};
};

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 6, term?: string, friend?: boolean) {
    return instance
      .get<GetUsersType>(
        `users/?page=${currentPage}&count=${pageSize}&term=${term}&friend=${friend}`
      )
      .then((response) => response.data);
  },
  follow(id: number) {
    return instance.post<FollowDeleteType>("follow/" + id).then((response) => response.data);
  },

  delete(id: number) {
    return instance.delete<FollowDeleteType>("follow/" + id).then((response) => response.data);
  },

  getProfile(userId: number) {
    console.warn("Obsolete method. Please profileAPI object");
    return profileAPI.getProfile(userId);
  },
};

type GetProfileType = {
  aboutMe: string | null;
  contacts: ContactsType;
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  fullName: string;
  userId: number;
  photos: {
    small: string | null;
    large: string | null;
  };
};

type UpdateStatus = {
  resultCode: ResultCodes;
  messages: Array<string>;
  data: string;
};

type UpdateProfile = {
  resultCode: ResultCodes;
  messages: Array<string>;
  data: {};
};

type SavePhoto = {
  data: { photos: PhotosType };
  messages: Array<string>;
  resultCode: ResultCodes;
};

export const profileAPI = {
  getProfile(userId: number | null) {
    return instance
      .get<GetProfileType>("profile/" + userId)
      .then((response) => response.data);
  },

  getStatus(userId: number | null) {
    return instance
      .get<string>("profile/status/" + userId)
      .then((response) => response.data);
  },

  updateStatus(status: string) {
    return instance
      .put<UpdateStatus>("profile/status", { status: status })
      .then((response) => response.data);
  },

  updateProfile(info: ProfileType) {
    return instance
      .put<UpdateProfile>("profile/", info)
      .then((response) => response.data);
  },

  savePhoto(photoFile: File) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance
      .put<SavePhoto>("profile/photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => response.data);
  },
};

export enum ResultCodes {
  Success = 0,
  Error = 1,
}

export enum ResultCodesForCuptcha {
  CaptchaIsRequired = 10,
}

type MeResponseType = {
  data: {
    id: number;
    email: string;
    login: string;
  };
  resultCode: ResultCodes;
  messages: Array<string>;
};

type LoginResponseType = {
  data: {
    userId: number;
    token: string;
  };
  resultCode: ResultCodes | ResultCodesForCuptcha;
  messages: Array<string>;
};

type logoutResponseType = {
  data: {};
  resultCode: ResultCodes;
  messages: Array<string>;
};

export const authAPI = {
  me() {
    return instance
      .get<MeResponseType>("auth/me")
      .then((response) => response.data);
  },
  login(
    email?: string,
    password?: string,
    rememberMe = false,
    captcha?: string
  ) {
    return instance
      .post<LoginResponseType>("auth/login", {
        email,
        password,
        rememberMe,
        captcha,
      })
      .then((response) => response.data);
  },
  logout() {
    return instance
      .post<logoutResponseType>("auth/logout")
      .then((response) => response.data);
  },
};

type GetCaptchaUrlType = {
  url: string;
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance
      .get<GetCaptchaUrlType>("/security/get-captcha-url")
      .then((response) => response.data);
  },
};

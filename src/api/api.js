import axios from "axios";
import accessToken from "./AccessToken";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "bfaf3a0b-5031-4e47-b170-c742ccf66d46",
    Authorization: accessToken,
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 6) {
    return instance
      .get(`users/?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(id) {
    return instance.post("follow/" + id).then((response) => response.data);
  },

  delete(id) {
    return instance.delete("follow/" + id).then((response) => response.data);
  },

  getProfile(userId) {
    console.warn("Obsolete method. Please profileAPI object");
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get("profile/" + userId).then((response) => response.data);
  },

  getStatus(userId) {
    return instance
      .get("profile/status/" + userId)
      .then((response) => response.data);
  },

  updateStatus(status) {
    return instance
      .put("profile/status", { status: status })
      .then((response) => response.data);
  },
};

export const authAPI = {
  me() {
    return instance.get("auth/me").then((response) => response.data);
  },
  login(email, password, rememberMe = false) {
    return instance
      .post("auth/login", { email, password, rememberMe })
      .then((response) => response.data);
  },
  logout() {
    return instance.delete("auth/login").then((response) => response.data);
  },
};

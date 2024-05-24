import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "bfaf3a0b-5031-4e47-b170-c742ccf66d46",
  },
});

export const usersApi = {
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
    return instance.get("profile/" + userId).then((response) => response.data);
  },
};

export const authApi = {
  me() {
    return instance.get("auth/me").then((response) => response.data);
  },
};

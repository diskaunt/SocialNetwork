import { UsersType } from "../types/types";
import { instance, ResultCodes } from "./api";

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 6, term?: string, friend?: boolean) {
    return instance
      .get<GetUsers>(
        `users/?page=${currentPage}&count=${pageSize}&term=${term}&friend=${friend}`
      )
      .then((response) => response.data);
  },
  follow(id: number) {
    return instance
      .post<Response>("follow/" + id)
      .then((response) => response.data);
  },

  delete(id: number) {
    return instance
      .delete<Response>("follow/" + id)
      .then((response) => response.data);
  },
};

type GetUsers = {
  items: Array<UsersType>;
  totalCount: number;
  error: string;
};


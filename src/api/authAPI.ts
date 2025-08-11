import { instance, APIResponse, ResultCodes, ResultCodesForCuptcha } from "./api";

export const authAPI = {
  me() {
    return instance
      .get<APIResponse<MeAPIResponseData>>("auth/me")
      .then((response) => response.data);
  },
  login(
    email?: string,
    password?: string,
    rememberMe = false,
    captcha?: string
  ) {
    return instance
      .post<APIResponse<LoginAPIResponseData, ResultCodesForCuptcha | ResultCodes>>(
        "auth/login",
        {
          email,
          password,
          rememberMe,
          captcha,
        }
      )
      .then((response) => response.data);
  },
  logout() {
    return instance
      .post<APIResponse>("auth/logout")
      .then((response) => response.data);
  },
};

type MeAPIResponseData = {
  id: number;
  email: string;
  login: string;
};

type LoginAPIResponseData = {
  userId: number;
  token: string;
};

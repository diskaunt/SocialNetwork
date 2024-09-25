import { instance, Response, ResultCodes, ResultCodesForCuptcha } from "./api";

export const authAPI = {
  me() {
    return instance
      .get<Response<MeResponseData>>("auth/me")
      .then((response) => response.data);
  },
  login(
    email?: string,
    password?: string,
    rememberMe = false,
    captcha?: string
  ) {
    return instance
      .post<Response<LoginResponseData, ResultCodesForCuptcha | ResultCodes>>(
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
      .post<Response>("auth/logout")
      .then((response) => response.data);
  },
};

type MeResponseData = {
  id: number;
  email: string;
  login: string;
};

type LoginResponseData = {
  userId: number;
  token: string;
};

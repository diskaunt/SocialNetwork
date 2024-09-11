import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { authAPI, ResultCodes, ResultCodesForCuptcha, securityAPI, usersAPI } from "../api/api";
import { ThunkType } from "../types/types";

// const SET_USER_DATA = "3RACHA/auth/SET-USER-DATA";
// const SET_USER_PHOTO = "3RACHA/auth/SET-USER-PHOTO";
// const SET_ERROR = "3RACHA/auth/SET_ERROR";
// const SET_CAPTCHA_URL = "3RACHA/auth/SET_CAPTCHA_URL";

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean,
  avatar: null as string | null,
  error: null as string | null,
  captchaUrl: null as string | null, // if null, captcha is not reqired
};

type InitialStateType = typeof initialState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUserData(
      state,
      action: PayloadAction<{
        email: string | null;
        id: number | null;
        login: string | null;
        isAuth: boolean;
      }>
    ) {
      let { email, id, login, isAuth } = action.payload;
      state.email = email;
      state.userId = id;
      state.login = login;
      state.isAuth = isAuth;
      state.captchaUrl = null;
    },
    setAuthPhoto(state, action: PayloadAction<string | null>) {
			state.avatar = action.payload
		},
    setAuthError(state, action: PayloadAction<string | null>) {
			state.error = action.payload
		},
    setCaptchaURL(state, action: PayloadAction<string | null>) {
			state.captchaUrl = action.payload
		},
  },
});

export const getAuthUserData =
  (): ThunkType<Promise<void>> => async (dispatch) => {
    let data = await authAPI.me();
    if (data.resultCode === ResultCodes.Success) {
      let { email, id, login } = data.data;
      dispatch(setAuthUserData({ email, id, login, isAuth: true }));
      let profile = await usersAPI.getProfile(id);
      dispatch(setAuthPhoto(profile.photos.small));
    }
  };

export const login =
  (values: {
    email?: string;
    password?: string;
    rememberMe: boolean;
    captcha?: string;
  }): ThunkType<Promise<string | null>> =>
  async (dispatch) => {
    let { email, password, rememberMe, captcha } = values;
    let data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === ResultCodes.Success) {
      let { userId, token } = data.data;
      dispatch(getAuthUserData());
      localStorage.setItem("sn-token", token);
      dispatch(setAuthError(null));
    } else {
      if (data.resultCode === ResultCodesForCuptcha.CaptchaIsRequired) {
        dispatch(getCaptchaUrl());
      }
      let errorMessage = data.messages[0];
      dispatch(setAuthError(errorMessage));
      return errorMessage;
    }
		return null
  };

export const getCaptchaUrl =
  (): ThunkType<Promise<void>> => async (dispatch) => {
    let data = await securityAPI.getCaptchaUrl();
    dispatch(setCaptchaURL(data.url));
  };

export const logout = (): ThunkType<Promise<void>> => async (dispatch) => {
  let data = await authAPI.logout();
  if (data.resultCode === ResultCodes.Success) {
    dispatch(setAuthUserData({email: null, id: null, login: null, isAuth: false}));
    localStorage.removeItem("sn-token");
    dispatch(setAuthPhoto(null));
  }
};

export const { setAuthUserData, setAuthPhoto, setAuthError, setCaptchaURL } =
  authSlice.actions;

export default authSlice.reducer;

// const authReduser = (
//   state: InitialStateType = initialState,
//   action: ActionsTypes
// ): InitialStateType => {
//   switch (action.type) {
//     case SET_USER_DATA:
//       return {
//         ...state,
//         ...action.payload,
//         captchaUrl: null,
//       };
//     case SET_USER_PHOTO:
//       return {
//         ...state,
//         ...action.payload,
//       };

//     case SET_ERROR:
//       return {
//         ...state,
//         ...action.payload,
//       };

//     case SET_CAPTCHA_URL:
//       return {
//         ...state,
//         ...action.payload,
//       };

//     default:
//       return { ...state };
//   }
// };

// type SetAuthUserDataPayloadType = {
//   email: string | null;
//   userId: number | null;
//   login: string | null;
//   isAuth: boolean;
// };

// type SetAuthPhotoType = {
//   type: typeof SET_USER_PHOTO;
//   payload: { avatar: string | null };
// };

// type SetErrorType = {
//   type: typeof SET_ERROR;
//   payload: { errorMessage: string | null };
// };

// type SetCaptchaType = {
//   type: typeof SET_CAPTCHA_URL;
//   payload: { captchaUrl: string };
// };

// type SetAuthUserDataType = {
//   type: typeof SET_USER_DATA;
//   payload: SetAuthUserDataPayloadType;
// };

// export const setAuthUserData = (
//   email: string | null,
//   id: number | null,
//   login: string | null,
//   isAuth: boolean
// ): SetAuthUserDataType => ({
//   type: SET_USER_DATA,
//   payload: { email, userId: id, login, isAuth },
// });

// export const setAuthPhoto = (avatar: string | null): SetAuthPhotoType => ({
//   type: SET_USER_PHOTO,
//   payload: { avatar },
// });

// export const setAuthError = (errorMessage: string | null): SetErrorType => ({
//   type: SET_ERROR,
//   payload: { errorMessage },
// });

// export const setCaptchaURL = (captchaUrl: string): SetCaptchaType => ({
//   type: SET_CAPTCHA_URL,
//   payload: { captchaUrl },
// });

// type ActionsTypes =
//   | SetAuthUserDataType
//   | SetAuthPhotoType
//   | SetErrorType
//   | SetCaptchaType;

// export default authReduser;

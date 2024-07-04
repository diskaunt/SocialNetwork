import { authAPI, usersAPI } from "../api/api";

const SET_USER_DATA = "3RACHA/auth/SET-USER-DATA";
const SET_USER_PHOTO = "3RACHA/auth/SET-USER-PHOTO";
const SET_ERROR = "3RACHA/auth/SET_ERROR";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  photo: null,
  error: null,
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case SET_USER_PHOTO:
      return {
        ...state,
        photo: action.photo,
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.errorMessage,
      };

    default:
      return { ...state };
  }
};

export const setAuthUserData = (email, id, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { email, userId: id, login, isAuth },
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PHOTO,
  photo: profile.photos.small,
});

export const setError = (errorMessage) => ({
  type: SET_ERROR,
  errorMessage,
});

export const getAuthUserData = () => async (dispatch) => {
  let data = await authAPI.me();
  if (data.resultCode === 0) {
    let { email, id, login } = data.data;
    dispatch(setAuthUserData(email, id, login, true));
  }
  if (data.data.id) {
    let profileId = await usersAPI.getProfile(data.data.id);
    dispatch(setUserProfile(profileId));
  }
  return data;
};

export const login =
  ({ email, password, rememberMe }) =>
  async (dispatch) => {
    let errorMessage;
    let data = await authAPI.login(email, password, rememberMe);
    if (data.resultCode === 0) {
      dispatch(getAuthUserData());
      dispatch(setError(null));
    } else {
      errorMessage = data.messages[0];
      dispatch(setError(errorMessage));
    }
    return errorMessage;
  };
export const logout = () => async (dispatch) => {
  let data = await authAPI.logout();
  if (!data.resultCode) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReduser;

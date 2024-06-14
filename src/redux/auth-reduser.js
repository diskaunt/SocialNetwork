import { authAPI, usersAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";
const SET_USER_PHOTO = "SET-USER-PHOTO";
const SET_ERROR = "SET_ERROR";

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

export const getAuthUserData = () => (dispatch) => {
  return authAPI
    .me()
    .then((data) => {
      if (!data.resultCode) {
        let { email, id, login } = data.data;
        dispatch(setAuthUserData(email, id, login, true));
      }
      return data;
    })
    .then((data) => {
      if (data.data.id) {
        usersAPI.getProfile(data.data.id).then((data) => {
          dispatch(setUserProfile(data));
        });
      }
    });
};

export const login =
  ({ email, password, rememberMe }) =>
  (dispatch) => {
    return authAPI.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        dispatch(getAuthUserData());
        dispatch(setError(null));
      } else {
        const errorMessage = data.messages[0];
        dispatch(setError(errorMessage));
      }
    });
  };
export const logout = () => (dispatch) => {
  authAPI.logout().then((data) => {
    if (!data.resultCode) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

export default authReduser;

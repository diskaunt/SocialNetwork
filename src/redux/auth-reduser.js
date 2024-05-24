import { authApi, usersApi } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";
const SET_USER_PHOTO = "SET-USER-PROFILE";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  photo: null,
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case SET_USER_PHOTO:
      return {
        ...state,
        photo: action.photo,
      };

    default:
      return { ...state };
  }
};

export const setAuthUserData = ({ id, email, login }) => ({
  type: SET_USER_DATA,
  data: { userId: id, email, login },
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PHOTO,
  photo: profile.photos.small,
});

export const getAuthUserData = () => (dispatch) => {
  authApi
    .me()
    .then((data) => {
      if (!data.resultCode) {
        dispatch(setAuthUserData(data.data));
      }
      return data;
    })
    .then((data) => {
      if (data.data.id !== null) {
        usersApi.getProfile(data.data.id).then((data) => {
          dispatch(setUserProfile(data));
        });
      }
    });
};

export default authReduser;

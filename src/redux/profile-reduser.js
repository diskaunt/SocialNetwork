import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const PROFILE_TOGGLE_IS_FETCHING = "PROFILE_TOGGLE_IS_FETCHING";

const initialState = {
  posts: [],
  profile: null,
  status: "",
  isFetching: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost;
      let date = new Date();
      if (action.newPostText.trim().length) {
        newPost = {
          id: state.posts.length,
          name: state.profile.fullName,
          date: date.toLocaleString("ru-RU"),
          message: action.newPostText,
          likesCount: 0,
        };
        return { ...state, posts: [...state.posts, newPost] };
      }
      return { ...state };

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };

    case SET_USER_STATUS:
      return { ...state, status: action.status };

    case PROFILE_TOGGLE_IS_FETCHING:
      return { ...state, isFetching: !state.isFetching };

    default:
      return state;
  }
};

export const addPost = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});

export const toggleIsFetching = () => ({
  type: PROFILE_TOGGLE_IS_FETCHING,
});

export const getUserProfile = (userId) => (dispatch) => {
  dispatch(toggleIsFetching());
  profileAPI.getProfile(userId).then((data) => {
    dispatch(toggleIsFetching());
    dispatch(setUserProfile(data));
  });
};

export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((data) => {
    dispatch(setUserStatus(data));
  });
};

export const updateUserStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((data) => {
    if (!data.resultCode) {
      dispatch(setUserStatus(status));
    }
  });
};

export default profileReducer;

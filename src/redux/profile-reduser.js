import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

const initialState = {
  posts: [],
  newPostText: "",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost;
      let date = new Date();
      if (state.newPostText.trim().length) {
        newPost = {
          id: state.posts.length,
          name: state.profile.fullName,
          date: date.toLocaleString("ru-RU"),
          message: state.newPostText,
          likesCount: 0,
        };
        return { ...state, posts: [...state.posts, newPost], newPostText: "" };
      }
      return { ...state };

    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };

    case SET_USER_STATUS:
      return { ...state, status: action.status };

    default:
      return state;
  }
};

export const addPost = (textarea) => ({
  type: ADD_POST,
  textarea,
});
export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});

export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then((data) => {
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
			dispatch(setUserStatus(status))
		}
	});
};

export default profileReducer;

import { profileAPI } from "../api/api";

const ADD_POST = "3RACHA/profile/ADD_POST";
const SET_USER_PROFILE = "3RACHA/profile/SET_USER_PROFILE";
const SET_USER_STATUS = "3RACHA/profile/SET_USER_STATUS";
const PROFILE_TOGGLE_IS_FETCHING = "3RACHA/profile/PROFILE_TOGGLE_IS_FETCHING";
const DELETE_POST = "3RACHA/profile/DELETE_POST";
const SET_USER_PHOTO ="3RACHA/profile/SET_USER_PHOTO"

const initialState = {
  posts: [
    {
      id: 0,
      name: "DiggerNigger",
      date: new Date(Math.round(new Date() * Math.random())).toLocaleString(
        "ru-RU"
      ),
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      likesCount: Math.round(Math.random() * 100),
    },
    {
      id: 1,
      name: "DiggerNigger",
      date: new Date(Math.round(new Date() * Math.random())).toLocaleString(
        "ru-RU"
      ),
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      likesCount: Math.round(Math.random() * 100),
    },
    {
      id: 2,
      name: "DiggerNigger",
      date: new Date(Math.round(new Date() * Math.random())).toLocaleString(
        "ru-RU"
      ),
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      likesCount: Math.round(Math.random() * 100),
    },
  ],
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
          name: action.fullName,
          date: date.toLocaleString("ru-RU"),
          message: action.newPostText,
          likesCount: Math.round(Math.random() * 100),
        };
        return { ...state, posts: [...state.posts, newPost] };
      } else return { ...state };

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };

    case SET_USER_STATUS:
      return { ...state, status: action.status };

    case PROFILE_TOGGLE_IS_FETCHING:
      return { ...state, isFetching: !state.isFetching };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.id),
      };

		case SET_USER_PHOTO:
			return {
				...state,
				profile: {...state.profile, photos: action.photos}

			}
    default:
      return state;
  }
};

export const addPost = (newPostText, fullName) => ({
  type: ADD_POST,
  newPostText,
  fullName,
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

export const deletePost = (id) => ({
  type: DELETE_POST,
  id,
});

export const setUserPhoto = (photos) => ({
	type: SET_USER_PHOTO,
	photos
})

export const getUserProfile = (userId) => async (dispatch) => {
  dispatch(toggleIsFetching());
  let data = await profileAPI.getProfile(userId);
  dispatch(toggleIsFetching());
  dispatch(setUserProfile(data));
};

export const getUserStatus = (userId) => async (dispatch) => {
  let data = await profileAPI.getStatus(userId);
  dispatch(setUserStatus(data));
};

export const updateUserStatus = (status) => async (dispatch) => {
  let data = await profileAPI.updateStatus(status);
  if (!data.resultCode) {
    dispatch(setUserStatus(status));
  }
};

export const savePhoto = (file) => async (dispatch) => {
	let data = await profileAPI.savePhoto(file);
	if (!data.resultCode) {
    dispatch(setUserPhoto(data.data.photos));
  }

};

export default profileReducer;
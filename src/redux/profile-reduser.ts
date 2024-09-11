import {
  createSlice,
  PayloadAction,
  ThunkAction,
  UnknownAction,
} from "@reduxjs/toolkit";
import { profileAPI, ResultCodes } from "../api/api";
import { PhotosType, PostType, ProfileType, ThunkType } from "../types/types";
import { setAuthPhoto } from "./auth-reduser";
import store, { RootState } from "./redux-store";

// const ADD_POST = "3RACHA/profile/ADD_POST";
// const SET_USER_PROFILE = "3RACHA/profile/SET_USER_PROFILE";
// const SET_USER_STATUS = "3RACHA/profile/SET_USER_STATUS";
// const PROFILE_TOGGLE_IS_FETCHING = "3RACHA/profile/PROFILE_TOGGLE_IS_FETCHING";
// const DELETE_POST = "3RACHA/profile/DELETE_POST";
// const SET_USER_PHOTO = "3RACHA/profile/SET_USER_PHOTO";
// const SET_USER_PHOTO_ERROR = "3RACHA/profile/SET_USER_PHOTO_ERROR";

const initialState = {
  posts: [
    // {
    //   id: 0,
    //   name: "DiggerNigger",
    //   date: new Date(Math.round(new Date() * Math.random())).toLocaleString(
    //     "ru-RU"
    //   ),
    //   message:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   likesCount: Math.round(Math.random() * 100),
    // },
    // {
    //   id: 1,
    //   name: "DiggerNigger",
    //   date: new Date(Math.round(new Date() * Math.random())).toLocaleString(
    //     "ru-RU"
    //   ),
    //   message:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   likesCount: Math.round(Math.random() * 100),
    // },
    // {
    //   id: 2,
    //   name: "DiggerNigger",
    //   date: new Date(Math.round(new Date() * Math.random())).toLocaleString(
    //     "ru-RU"
    //   ),
    //   message:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   likesCount: Math.round(Math.random() * 100),
    // },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: "" as string,
  photoError: null as string | null,
  isFetching: false as boolean,
};

type InitialStateType = typeof initialState;

const profileSlice = createSlice({
  name: "profilePage",
  initialState,
  reducers: {
    addPost(
      state,
      action: PayloadAction<{ newPostText: string; fullName: string }>
    ) {
      const { newPostText, fullName } = action.payload;
      let newPost;
      let date = new Date();
      if (newPostText.trim().length) {
        newPost = {
          id: state.posts.length,
          name: fullName,
          date: date.toLocaleString("ru-RU"),
          message: newPostText,
          likesCount: Math.round(Math.random() * 100),
        };
        state.posts = [...state.posts, newPost];
      }
    },
    setUserProfile(state, action: PayloadAction<ProfileType>) {
      state.profile = action.payload;
    },
    setUserStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    toggleIsFetching(state) {
      state.isFetching = !state.isFetching;
    },
    deletePost(state, action: PayloadAction<number>) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    setUserPhoto(state, action: PayloadAction<{ photos: PhotosType }>) {
      state.profile = { ...state.profile, ...action.payload };
      state.posts = state.posts.map((post) => ({
        ...post,
        photo: action.payload.photos,
      }));
    },
    setUserPhotoError(state, action: PayloadAction<string>) {
      state.photoError = action.payload;
    },
  },
});

export const getUserProfile =
  (userId: number | null): ThunkType<Promise<void>> =>
  async (dispatch) => {
    dispatch(toggleIsFetching());
    let data = await profileAPI.getProfile(userId);
    dispatch(toggleIsFetching());
    dispatch(setUserProfile(data));
  };

export const getUserStatus =
  (userId: number | null): ThunkType<Promise<void>> =>
  async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(data));
  };

export const updateUserStatus =
  (status: string): ThunkType<Promise<void>> =>
  async (dispatch) => {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === ResultCodes.Success) {
      dispatch(setUserStatus(status));
    }
  };

export const savePhoto =
  (file: File): ThunkType<Promise<Array<String>>> =>
  async (dispatch) => {
    let data = await profileAPI.savePhoto(file);
    if (data.resultCode === ResultCodes.Success) {
      dispatch(setUserPhoto(data.data));
      dispatch(setAuthPhoto(data.data.photos.small));
    } else {
      dispatch(setUserPhotoError(data.messages[0]));
    }
    return data.messages;
  };

export const saveProfile = (info: ProfileType): ThunkType<Promise<string | null>> => async (dispatch) => {
  const userId = store.getState().auth.userId;
  let data = await profileAPI.updateProfile(info);
  if (data.resultCode === ResultCodes.Success) {
    dispatch(getUserProfile(userId));
    return null;
  } else return data.messages[0];
};

export const {
  addPost,
  setUserProfile,
  setUserStatus,
  toggleIsFetching,
  deletePost,
  setUserPhoto,
  setUserPhotoError,
} = profileSlice.actions;

export default profileSlice.reducer;

// const profileReducer = (
//   state: InitialStateType = initialState,
//   action: ActionsTypes
// ): InitialStateType => {
//   switch (action.type) {
//     case ADD_POST:
//       const { newPostText, fullName } = action.payload;
//       let newPost;
//       let date = new Date();
//       if (newPostText.trim().length) {
//         newPost = {
//           id: state.posts.length,
//           name: fullName,
//           date: date.toLocaleString("ru-RU"),
//           message: newPostText,
//           likesCount: Math.round(Math.random() * 100),
//         };
//         return { ...state, posts: [...state.posts, newPost] };
//       } else return { ...state };

//     case SET_USER_PROFILE:
//       return { ...state, ...action.payload };

//     case SET_USER_STATUS:
//       return { ...state, ...action.payload };

//     case PROFILE_TOGGLE_IS_FETCHING:
//       return { ...state, isFetching: !state.isFetching };

//     case DELETE_POST:
//       return {
//         ...state,
//         posts: state.posts.filter((post) => post.id !== action.payload),
//       };

//     case SET_USER_PHOTO:
//       return {
//         ...state,
//         profile: { ...state.profile, ...action.payload },
//         posts: state.posts.map((post) => ({
//           ...post,
//           photo: action.payload.photos,
//         })),
//       };
//     case SET_USER_PHOTO_ERROR:
//       return {
//         ...state,
//         photoError: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// type AddPostType = {
//   type: typeof ADD_POST;
//   payload: { newPostText: string; fullName: string };
// };
// type SetUserProfileType = {
//   type: typeof SET_USER_PROFILE;
//   payload: { profile: ProfileType };
// };
// type SetUserStatusType = {
//   type: typeof SET_USER_STATUS;
//   payload: { status: string };
// };
// type ToggleIsFetchingType = {
//   type: typeof PROFILE_TOGGLE_IS_FETCHING;
// };
// type DeletePostType = {
//   type: typeof DELETE_POST;
//   payload: number;
// };
// type SetUserPhotoType = {
//   type: typeof SET_USER_PHOTO;
//   payload: { photos: PhotosType };
// };
// type SetUserPhotoErrorType = {
//   type: typeof SET_USER_PHOTO_ERROR;
//   payload: string;
// };

// export const addPost = (
//   newPostText: string,
//   fullName: string
// ): AddPostType => ({
//   type: ADD_POST,
//   payload: { newPostText, fullName },
// });

// export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({
//   type: SET_USER_PROFILE,
//   payload: { profile },
// });

// export const setUserStatus = (status: string): SetUserStatusType => ({
//   type: SET_USER_STATUS,
//   payload: { status },
// });

// export const toggleIsFetching = (): ToggleIsFetchingType => ({
//   type: PROFILE_TOGGLE_IS_FETCHING,
// });

// export const deletePost = (id: number): DeletePostType => ({
//   type: DELETE_POST,
//   payload: id,
// });

// export const setUserPhoto = (photos: PhotosType): SetUserPhotoType => ({
//   type: SET_USER_PHOTO,
//   payload: { photos },
// });

// export const setUserPhotoError = (error: string): SetUserPhotoErrorType => ({
//   type: SET_USER_PHOTO_ERROR,
//   payload: error,
// });

// type ActionsTypes =
//   | AddPostType
//   | SetUserProfileType
//   | SetUserStatusType
//   | ToggleIsFetchingType
//   | DeletePostType
//   | SetUserPhotoType
//   | SetUserPhotoErrorType
//   | SetAuthPhotoType;

// export default profileReducer;

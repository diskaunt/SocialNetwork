import { ThunkAction, UnknownAction } from "@reduxjs/toolkit";
import { RootState } from "../redux/redux-store";

export type PostType = {
  id: number;
  name: string;
  date: string;
  message: string;
  likesCount: number;
};

export type ContactsType = {
  [key: string]: string | null;
  facebook: string | null;
  github: string | null;
  vk: string | null;
  twitter: string | null;
  instagram: string | null;
  website: string | null;
  youtube: string | null;
  mainLink: string | null;
};

export type PhotosType = {
  small: string | null;
  large: string | null;
};

export type ProfileType = {
  userId?: number;
  lookingForAJob?: boolean;
  lookingForAJobDescription?: string | null;
  fullName?: string;
  contacts?: ContactsType;
  aboutMe?: string | null;
  photos?: PhotosType;
};

export type UsersType = {
  [key: string]: any;
  id: number;
  name: string;
  status: string | null;
  photos: PhotosType;
  followed: boolean;
};

export type ProfilePageType = {
  posts: Array<PostType>;
  profile: ProfileType | null;
  status: string;
  photoError: string | null;
  isFetching: boolean;
};

export type AuthType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  avatar: string | null;
  captchaUrl: string | null;
  error: string | null;
};

export type DialogType = {
  id: number;
  name: string;
	messages: Array<MessageType>
  avatar?: string;
};

export type MessageType = {
  id: number;
  message: string;
  avatar?: string;
  date?: string;
  name?: string;
};

export type DialogsPageType = {
  dialogs: Array<DialogType>;
};

export type ThunkType<ReturnType = Promise<void>> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UnknownAction
>;

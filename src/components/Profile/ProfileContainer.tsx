import {
  addPost,
  deletePost,
  getUserProfile,
  getUserStatus,
  savePhoto,
  saveProfile,
  updateUserStatus,
} from "../../redux/profile-reduser";
import { connect } from "react-redux";
import * as React from "react";
import Profile from "./Profile";
import { Navigate } from "react-router-dom";
import { RootState } from "../../redux/redux-store";
import {
  AuthType,
  ProfilePageType,
  ProfileType,
  UsersType,
} from "../../types/types";
import { requestUsers } from "../../redux/users-reduser";
import { useGetUserProfile } from "../../hooks/hooks";

type MapStateToPropsType = {
  profilePage: ProfilePageType;
  auth: AuthType;
  users: Array<UsersType>;
  totalUsersCount: number;
};

type MapDispatchPropsType = {
  addPost: (payload: {newPostText: string, fullName: string}) => void;
  getUserProfile: (userId: number) => void;
  getUserStatus: (userId: number) => void;
  updateUserStatus: (status: string) => void;
  deletePost: (id: number) => void;
  savePhoto: (file: any) => Promise<any>;
  saveProfile: (info: ProfileType) => Promise<string | null>;
  requestUsers: (
    currentPage: number,
    pageSize: number,
    search?: string,
    friend?: boolean
  ) => void;
};

type PropsType = MapStateToPropsType & MapDispatchPropsType;

let ProfileContainer = ({
  getUserProfile,
  getUserStatus,
  requestUsers,
  auth,
  ...props
}: PropsType) => {
  let id = useGetUserProfile(
    auth.userId,
    getUserProfile,
    getUserStatus,
    requestUsers
  );

  return id ? (
    <Profile isOwner={id === auth.userId} auth={auth} {...props} />
  ) : (
    <Navigate to={"/login"} />
  );
};

const mapStateToProps = (state: RootState): MapStateToPropsType => {
  return {
    profilePage: state.profilePage,
    auth: state.auth,
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
  };
};

export default connect(mapStateToProps, {
  addPost,
  getUserProfile,
  getUserStatus,
  updateUserStatus,
  deletePost,
  savePhoto,
  saveProfile,
  requestUsers,
})(ProfileContainer);

import {
  addPost,
  deletePost,
  getUserProfile,
  getUserStatus,
  savePhoto,
  saveProfile,
  updateUserStatus,
} from '../../redux/profile-reduser';
import { connect } from 'react-redux';
import * as React from 'react';
import Profile from './Profile';
import { Navigate } from 'react-router-dom';
import { RootState } from '../../redux/redux-store';
import { ProfileType } from '../../types/types';
import { requestUsers } from '../../redux/users-reduser';
import { useGetUserProfile } from '../../hooks/hooks';
import WithAuthorize from '../../hoc/withAuthorize';

// type MapStateToProps = {
//   profilePage: ProfilePageType;
//   auth: AuthType;
//   users: Array<UsersType>;
//   totalUsersCount: number;
// };

type MapProps = ReturnType<typeof mapStateToProps>;

type MapDispatchProps = {
  addPost: (payload: { newPostText: string; fullName: string }) => void;
  getUserProfile: (userId: number) => void;
  getUserStatus: (userId: number) => void;
  updateUserStatus: (status: string) => void;
  deletePost: (id: number) => void;
  savePhoto: (file: any) => Promise<any>;
  saveProfile: (info: ProfileType) => Promise<string | null>;
  requestUsers: ({
    currentPage,
    pageSize,
    search,
    friend,
  }: {
    currentPage: number;
    pageSize: number;
    search?: string;
    friend?: boolean;
  }) => void;
};

type Props = MapProps & MapDispatchProps;

let ProfileContainer = ({
  getUserProfile,
  getUserStatus,
  requestUsers,
  auth,
  ...props
}: Props) => {
  let id = useGetUserProfile(
    auth.userId,
    getUserProfile,
    getUserStatus,
    requestUsers
  );

  return (
    <WithAuthorize
      isAuthorize={!!id}
      components={{
        Authorized: (
          <Profile isOwner={id === auth.userId} auth={auth} {...props} />
        ),
        Unauthorized: <Navigate to={'/login'} />,
      }}
    />
  );
};

const mapStateToProps = (state: RootState) => {
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

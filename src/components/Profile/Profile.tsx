import * as React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../common/Preloader/Preloader";
import ProfileInfoPreloader from "../common/Preloader/ProfileInfoPreloader";
import {
  AuthType,
  ProfilePageType,
  ProfileType,
  UsersType,
} from "../../types/types";

type PropsType = {
  profilePage: ProfilePageType;
  auth: AuthType;
  isOwner: boolean;
  users: Array<UsersType>;
  totalUsersCount: number;
  updateUserStatus: (status: string) => void;
  addPost: (payload: {newPostText: string, fullName: string}) => void;
  deletePost: (id: number) => void;
  savePhoto: (file: any) => Promise<any>;
  saveProfile: (info: ProfileType) => Promise<string | null>;
};

const Profile = ({
  profilePage: { isFetching, profile, status, posts },
  auth,
  isOwner,
  users,
  totalUsersCount,
  updateUserStatus,
  addPost,
  deletePost,
  savePhoto,
  saveProfile,
}: PropsType) => {
  return (
    <div className={classes.container}>
      <div className={classes.profileInfo}>
        {profile === null || isFetching ? (
          <ProfileInfoPreloader />
        ) : (
          <ProfileInfo
            totalUsersCount={totalUsersCount}
            users={users}
            isOwner={isOwner}
            profile={profile}
            status={status}
            updateUserStatus={updateUserStatus}
            savePhoto={savePhoto}
            saveProfile={saveProfile}
          />
        )}
      </div>
      <div className={classes.myPosts}>
        {isOwner ? (
          profile === null || isFetching ? (
            <div className={classes.preloader}>
              <Preloader />
            </div>
          ) : (
            <MyPosts
              posts={posts}
              profile={profile}
              addPost={addPost}
              deletePost={deletePost}
            />
          )
        ) : null}
      </div>
    </div>
  );
};
export default Profile;

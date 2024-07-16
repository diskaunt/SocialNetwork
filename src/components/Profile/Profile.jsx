import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../common/preloader/Preloader";
import ProfileInfoPreloader from "../common/preloader/ProfileInfoPreloader";

const Profile = ({
  profilePage: { isFetching, profile, status, posts },
  updateUserStatus,
  addPost,
  deletePost,
  auth,
  isOwner,
  savePhoto,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.profileInfo}>
        {profile === null || isFetching ? (
          <ProfileInfoPreloader />
        ) : (
          <ProfileInfo
            isOwner={isOwner}
            profile={profile}
            status={status}
            updateUserStatus={updateUserStatus}
            savePhoto={savePhoto}
          />
        )}
      </div>
      <div className={classes.myPosts}>
        {auth?.userId === profile?.userId ? (
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
        ) : (
          " "
        )}
      </div>
    </div>
  );
};
export default Profile;

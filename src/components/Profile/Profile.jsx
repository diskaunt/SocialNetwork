import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../common/preloader/Preloader";

const Profile = (props) => {
  return (
    <div className={classes.content}>
      {props.profilePage.profile === null || props.profilePage.isFetching ? (
        <div className={classes.preloader}>
          <Preloader />
        </div>
      ) : (
        <>
          <ProfileInfo
            profile={props.profilePage.profile}
            status={props.profilePage.status}
            updateUserStatus={props.updateUserStatus}
          />
          <MyPosts
            posts={props.profilePage.posts}
            profile={props.profilePage.profile}
            addPost={props.addPost}
          />
        </>
      )}
    </div>
  );
};
export default Profile;

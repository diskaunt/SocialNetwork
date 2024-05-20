import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../common/preloader/Preloader";

const Profile = (props) => {

  if (!props.profilePage.profile) {
    return (
      <div className={classes.preloader}>
        <Preloader />
      </div>
    );
  }
  return (
    <div className={classes.content}>
      <ProfileInfo profile={props.profilePage.profile} />
      <MyPosts
        profilePage={props.profilePage}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};
export default Profile;

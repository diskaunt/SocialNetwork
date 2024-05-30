import React from "react";
import classes from "./ProfileInfo.module.css";
import Contacts from "./Contacts";
import Job from "./Job";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  return (
    <div className={classes.profile}>
      <div className={classes.overPageCover}>
        <img
          src={props.profile.photos.large || "http://dummyimage.com/600x400"}
          alt="profile-background"
        />
      </div>
      <div className={classes.profileHeader}>
        <div className={classes.profileHeaderImg}>
          <div className={classes.wrapperImg}>
            <img
              src={props.profile.photos.small || "http://dummyimage.com/140"}
              alt="avatar"
            />
          </div>
        </div>
        <div className={classes.profileInfo}>
          <div className={classes.fullName}>{props.profile.fullName}</div>
          <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
          <div className={classes.infoSection}>
            <div className={classes.infoHeadline}>About me:</div>
            <div className={classes.info}>{props.profile.aboutMe}</div>
          </div>
          <div className={classes.infoSection}>
            <div className={classes.infoHeadline}>Contact information:</div>
            <Contacts contacts={props.profile.contacts} />
          </div>
          <div className={classes.infoSection}>
            <div className={classes.infoHeadline}>Job information:</div>
            <Job
              lookingForAJob={props.profile.lookingForAJob}
              lookingForAJobDescription={
                props.profile.lookingForAJobDescription
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

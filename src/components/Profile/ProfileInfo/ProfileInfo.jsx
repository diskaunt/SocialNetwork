import React from "react";
import classes from "./ProfileInfo.module.css";
import Contacts from "./Contacts";
import Job from "./Job";

const ProfileInfo = (props) => {
  return (
    <div className={classes.profile}>
      <div className={classes.overPageCover}>
        <img
          src={
            props.profile.photos.large ||
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png"
          }
          alt="profile-background"
        />
      </div>
      <div className={classes.profileHeader}>
        <div className={classes.profileHeaderImg}>
          <div className={classes.wrapperImg}>
            <img
              src={
                props.profile.photos.small ||
                "https://i5.imageban.ru/out/2024/04/23/1bb19e775b66a89851ce626a69603c73.png"
              }
              alt="avatar"
            />
          </div>
        </div>
        <div className={classes.profileInfo}>
          <div className={classes.fullName}>{props.profile.fullName}</div>
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

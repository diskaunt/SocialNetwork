import React, { memo } from "react";
import classes from "./ProfileInfo.module.css";
import Contacts from "./Contacts";
import Job from "./Job";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({
  profile: {
    photos,
    fullName,
    aboutMe,
    contacts,
    lookingForAJob,
    lookingForAJobDescription,
  },
  status,
  updateUserStatus,
}) => {
  return (
    <>
      <div className={classes.overPageCover}>
        <img
          src={photos.large || "http://dummyimage.com/600x400"}
          alt="profile-background"
        />
      </div>
      <div className={classes.profileHeader}>
        <div className={classes.profileHeaderImg}>
          <div className={classes.wrapperImg}>
            <img
              src={photos.small || "http://dummyimage.com/140"}
              alt="avatar"
            />
          </div>
        </div>
        <div className={classes.profileInfo}>
          <div className={classes.fullName}>{fullName}</div>
          <ProfileStatus
            status={status}
            updateUserStatus={updateUserStatus}
          />
          <div className={classes.infoSection}>
            <div className={classes.infoHeadline}>About me:</div>
            <div className={classes.info}>{aboutMe}</div>
          </div>
          <div className={classes.infoSection}>
            <div className={classes.infoHeadline}>Contact information:</div>
            <Contacts contacts={contacts} />
          </div>
          <div className={classes.infoSection}>
            <div className={classes.infoHeadline}>Job information:</div>
            <Job
              lookingForAJob={lookingForAJob}
              lookingForAJobDescription={lookingForAJobDescription}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ProfileInfo);

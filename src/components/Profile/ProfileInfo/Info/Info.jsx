import React from "react";
import ProfileStatus from "./ProfileStatus";
import Contacts from "./Contacts";
import Job from "./Job";
import classes from "./Info.module.css";

const Info = ({
  profile: {
    fullName,
    isOwner,
    status,
    updateUserStatus,
    aboutMe,
    contacts,
    lookingForAJob,
    lookingForAJobDescription,
  },
}) => (
  <>
    <div className={classes.fullName}>{fullName}</div>
    <ProfileStatus
      isOwner={isOwner}
      status={status}
      updateUserStatus={updateUserStatus}
    />
    <div className={classes.infoSection}>
      <div className={classes.infoHeadline}>About me:</div>
      <div className={classes.descriptions}>{aboutMe}</div>
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
  </>
);

export default Info;

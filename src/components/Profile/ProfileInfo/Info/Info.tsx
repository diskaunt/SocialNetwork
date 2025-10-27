import * as React from "react";
import classes from "./info.module.css";
import { ContactsType } from "../../../../types/types";

type PropsType = {
  aboutMe?: string | null;
  contacts?: ContactsType;
  lookingForAJob?: boolean;
  lookingForAJobDescription?: string | null;
};

const Info = ({
  aboutMe,
  contacts,
  lookingForAJob,
  lookingForAJobDescription,
}: PropsType) => {
  let contact = contacts && Object.keys(contacts).map((key) => {
    if (contacts[key]) {
      return (
        <div key={key} className={classes.contact}>
          <div className={classes.item}>{key}: </div>
          <div>{contacts[key]}</div>
        </div>
      );
    }
    return "";
  });
  return (
    <>
      {aboutMe && aboutMe.length > 0 && (
        <div className={classes.infoSection}>
          <div className={classes.infoHeadline}>About me:</div>
          <div className={classes.descriptions}>{aboutMe}</div>
        </div>
      )}
      <div className={classes.infoSection}>
        <div className={classes.infoHeadline}>Contact information:</div>
        {contact}
      </div>
      <div className={classes.infoSection}>
        <div className={classes.infoHeadline}>Job information:</div>
        <div className={classes.work}>
          {lookingForAJob ? (
            <div className={classes.job}>
              <div className={classes.item}>looking for a job:</div>
              <div>&#10004;</div>
              <div className={classes.item}>kind of job:</div>
              <div>{lookingForAJobDescription}</div>
            </div>
          ) : (
            <div className={classes.job}>
              <div className={classes.item}>looking for a job:</div>
              <div>&#10008;</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Info;

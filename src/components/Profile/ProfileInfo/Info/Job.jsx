import React, { memo } from "react";
import classes from "./Info.module.css";

const Job = ({ lookingForAJob, lookingForAJobDescription }) => (
  <>
    <div className={classes.work}>
      {lookingForAJob ? (
        <div className={classes.job}>
          <div className={classes.infoItem}>looking for a job:</div>
          <div>&#10004;</div>
          <div className={classes.infoItem}>kind of job:</div>
          <div>{lookingForAJobDescription}</div>
        </div>
      ) : (
        <div className={classes.job}>
          <div className={classes.infoItem}>looking for a job:</div>
          <div>&#10008;</div>
        </div>
      )}
    </div>
  </>
);

export default memo(Job);

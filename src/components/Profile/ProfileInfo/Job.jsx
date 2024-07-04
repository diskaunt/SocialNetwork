import React, { memo } from "react";
import classes from "./ProfileInfo.module.css";

const Job = ({lookingForAJob, lookingForAJobDescription}) => (
  <div className={classes.info}>
              <div className={classes.lookingForAJob}>
                {lookingForAJob ? (
                  <div className={classes.job}>
                    <div className={classes.infoName}>looking for a job:</div>
                    <div>&#10004;</div>
                    <div className={classes.infoName}>kind of job:</div>
                    <div>{lookingForAJobDescription}</div>
                  </div>
                ) : (
                  <div className={classes.job}>
                    <div className={classes.infoName}>looking for a job:</div>
                    <div>&#10008;</div>
                  </div>
                )}
              </div>
            </div>
  );

export default memo(Job);

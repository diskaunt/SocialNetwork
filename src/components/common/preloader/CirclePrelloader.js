import React from "react";
import classes from "./CirclePreloader.module.css";

let CirclePreloader = (props) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes["loader-box"]}>
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
        </div>
        <h2 className={classes["loader-title"]}>Loading...</h2>
      </div>
    </>
  );
};

export default CirclePreloader;

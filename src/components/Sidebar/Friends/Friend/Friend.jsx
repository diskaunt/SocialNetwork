import React from "react";
import classes from "./Friend.module.css";

const Friend = (props) => {
	return (
  <div className={classes.friend}>
    <div className={classes.ava}>
      <img src={props.src} alt="ava" />
    </div>
		<div className={classes.name}>{props.name}</div>
  </div>
	)
};

export default Friend;

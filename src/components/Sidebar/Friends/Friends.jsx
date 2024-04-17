import React from "react";
import classes from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {
  const friendElements = props.sidebar.friends.map((friend) => (
    <Friend key={friend.id} name={friend.name} src={friend.src} />
  ));

  return (
    <div className={classes.friends}>
      <div className={classes.title}>Friends</div>
      <div className={classes.friend}>{friendElements}</div>
    </div>
  );
};

export default Friends;

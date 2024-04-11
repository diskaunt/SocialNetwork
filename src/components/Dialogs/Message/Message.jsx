import React from "react";
import classes from "./Message.module.css"

const Message = (props) => {
	return (
    <div className={classes.message}>
      <div className={classes.ava}><img src={props.src} alt="ava"/></div>
      <div className={classes.name}>{props.name || 'name'}</div>
      <div className={classes.text}>{props.message}</div>
    </div>
  );
}

export default Message;
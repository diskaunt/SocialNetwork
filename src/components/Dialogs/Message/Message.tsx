import React from "react";
import classes from "./message.module.css"
import { MessageType } from "../../../types/types";

const Message = (props: MessageType) => {
	const time = props.date && props.date.split(",")[1]
	return (
    <div className={classes.message}>
      <div className={classes.ava}><img src={props.avatar} alt="ava"/></div>
      <div className={classes.name}>{props.name || 'name'}</div>
			<div className={classes.date}>{time}</div>
      <div className={classes.text}>{props.message}</div>
    </div>
  );
}

export default Message;
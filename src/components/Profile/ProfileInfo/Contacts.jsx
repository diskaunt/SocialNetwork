import React from "react";
import classes from "./ProfileInfo.module.css";

const Contacts = (props) =>
  Object.keys(props.contacts).map((key) => {
    if (props.contacts[key]) {
      return (
        <div key={key} className={classes.contacts}>
          <div className={classes.infoName}>{key}: </div>
          <div className={classes.info}>{props.contacts[key]}</div>
        </div>
      );
    }
		return ('')
  });

export default Contacts;

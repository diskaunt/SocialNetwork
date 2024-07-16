import React, { memo } from "react";
import classes from "./Info.module.css";

const Contacts = ({contacts}) =>
  Object.keys(contacts).map((key) => {
    if (contacts[key]) {
      return (
        <div key={key} className={classes.contacts}>
          <div className={classes.infoItem}>{key}: </div>
          <div className={classes.info}>{contacts[key]}</div>
        </div>
      );
    }
		return ('')
  });

export default memo(Contacts);

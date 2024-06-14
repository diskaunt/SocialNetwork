import React from "react";
import classes from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  const path = "/dialogs/" + props.id;
  return (
    <div id={classes.key} className={classes.dialog}>
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : "")}
        to={path}
      >
        <div className={classes.ava}>
          <img src={props.avatar} alt="ava" />
        </div>
        <div className={classes.name}>{props.name}</div>
      </NavLink>
    </div>
  );
};

export default DialogItem;

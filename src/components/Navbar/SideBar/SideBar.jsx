import React from "react";
import classes from "./SideBar.module.css";
import IconProfile from "./svg/IconProfile";
import IconMessage from "./svg/IconMessage";
import IconNews from "./svg/IconNews";
import IconMusic from "./svg/IconMusic";
import IconSetting from "./svg/IconSetting";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className={classes.SideBar}>
      <div className={classes.item}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <IconProfile className={classes.svg} />
          <span>Profile</span>
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <IconMessage className={classes.svg} />
          <span>Message</span>
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/News"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <IconNews className={classes.svg} />
          <span>News</span>
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/Music"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <IconMusic className={classes.svg} />
          <span>Music</span>
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/Settings"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <IconSetting className={classes.svg} />
          <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;

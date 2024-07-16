import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import IconSettings from "../../../assets/svg/IconSetting";
import IconProfile from "../../../assets/svg/IconProfile";
import IconNews from "../../../assets/svg/IconNews";
import IconMusic from "../../../assets/svg/IconMusic";
import IconMessage from "../../../assets/svg/IconMessage";
import IconUsers from "../../../assets/svg/IconUsers";

const Navbar = () => {
  return (
    <div className={classes.SideBar}>
      <div className={classes.item}>
        <NavLink
          to="/profile"
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
          <span>Dialogs</span>
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <IconNews className={classes.svg} />
          <span>News</span>
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/music"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <IconMusic className={classes.svg} />
          <span>Music</span>
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <IconSettings className={classes.svg} />
          <span>Settings</span>
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <IconUsers className={classes.svg} />
          <span>Find users</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

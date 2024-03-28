import React from "react";
import IconProfile from "./svg/IconProfile";
import IconMessage from "./svg/IconMessage";
import IconNews from "./svg/IconNews";
import IconMusic from "./svg/IconMusic";
import IconSetting from "./svg/IconSetting";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";


const Navbar = () => {
	return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <IconProfile />
          <span>Profile</span>
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <IconMessage />
          <span>Message</span>
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/News"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <IconNews />
          <span>News</span>
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/Music"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <IconMusic />
          <span>Music</span>
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/Settings"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <IconSetting />
          <span>Settings</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
import React from "react";
import SideBar from "./SideBar/SideBar";
import classes from "./Navbar.module.css";
import Friend from "./Friend/Friend";

const Navbar = (props) => {
  const friendElements = props.sidebar.friends.map((friend) => (
    <Friend key={friend.id} name={friend.name} src={friend.src} />
  ));
  return (
    <nav className={classes.nav}>
      <SideBar />
      <div className={classes.friends}>
        <div className={classes.title}>Friends</div>
        <div className={classes.friend}>{friendElements}</div>
      </div>
    </nav>
  );
};

export default Navbar;

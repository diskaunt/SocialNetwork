import React from "react";
import Navbar from "./Navbar/Navbar";
import classes from "./Sidebar.module.css";
import FriendsContainer from "./Friends/FriendsContainer";

const Sidebar = (props) => {
  return (
    <nav className={classes.nav}>
      <Navbar />
      <FriendsContainer />
    </nav>
  );
};

export default Sidebar;

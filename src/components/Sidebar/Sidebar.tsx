import * as React from "react";
import classes from "./Sidebar.module.css";
import Navbar from "./Navbar/Navbar"

const Sidebar = () => {
  return (
    <nav className={classes.nav}>
      <Navbar />
    </nav>
  );
};

export default Sidebar;

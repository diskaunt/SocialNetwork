import * as React from "react";
import classes from "./sidebar.module.css";
import Navbar from "./navbar/Navbar"

const Sidebar = () => {
  return (
    <nav className={classes.nav}>
      <Navbar />
    </nav>
  );
};

export default Sidebar;

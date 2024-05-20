import React from "react";
import classes from "./NoMatch.module.css";

let NoMatch = () => {
	return (
		<div className={classes.main}>
      <p className={classes.errorNumber}>404, page not found</p>
      <span className={classes.handle}></span>
    </div>
  );
}

export default NoMatch
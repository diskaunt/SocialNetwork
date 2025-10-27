import React from "react";
import classes from "./noMatch.module.css";

let NoMatch:React.FC = () => {
	return (
		<div className={classes.main}>
      <p className={classes.errorNumber}>404, page not found</p>
      <span className={classes.handle}></span>
    </div>
  );
}

export default NoMatch
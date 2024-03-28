import React from "react";
import classes from "./Header.module.css";

const Header = () => {
	return (
    <header className={classes.header}>
			<div className={classes.contentWrapper}>
      <img
        src="https://img.freepik.com/premium-vector/modern-color-hexagon-logo_103224-173.jpg?w=1380"
        alt="StrayKids"
      />
			<h1>3RACHA</h1>
			</div>
    </header>
  );
}

export default Header
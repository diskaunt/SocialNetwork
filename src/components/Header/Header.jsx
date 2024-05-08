import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.contentWrapper}>
        <a href="/">
          <img
            src="https://i6.imageban.ru/out/2024/04/17/e6ef60ba95ab712c75a6294e3551c00a.png"
            alt="StrayKids"
          />
          <h1>3RACHA</h1>
        </a>
      </div>
    </header>
  );
};

export default Header;

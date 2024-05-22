import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.contentWrapper}>
        <Link to="/News">
          <img
            src="https://i6.imageban.ru/out/2024/04/17/e6ef60ba95ab712c75a6294e3551c00a.png"
            alt="logo"
          />
          <h1>3RACHA</h1>
        </Link>
        <div className={classes.loginBlock}>
          {props.isAuth ? (
            <Link to={"settings"}>
              <img
                alt="avatar"
                src={
                   props.profile?.photos.small || "https://i5.imageban.ru/out/2024/04/23/1bb19e775b66a89851ce626a69603c73.png"
                }
              ></img>{" "}
              {props.login}
            </Link>
          ) : (
            <Link to={"/login"}>login</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

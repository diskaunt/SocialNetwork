import React, { useState } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import IconLogout from "./LogoutIcon";

const Header = (props) => {
	const [menuBlockСondition, changeСondition] = useState(false)
	const onSwitch = () => changeСondition(!menuBlockСondition);
	const onLogout = () => {
		props.logout()
		changeСondition(!menuBlockСondition)
	}
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
          {props.auth.isAuth ? (
            <div className={menuBlockСondition? classes.button_isactive + " " + classes.menuBtn : classes.menuBtn}>
              <MenuButton {...props} onSwitch={onSwitch} />
              <div className={menuBlockСondition? classes.menuBlock: classes.menuBlock + " " + classes.invisible}>
                <MenuBlock {...props} onLogout = {onLogout} />
              </div>
            </div>
          ) : (
            <div className={classes.loginBtn}>
              <Link to={"/login"}>login</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

const MenuButton = (props) => {
  return (
    <button onClick={props.onSwitch}>
      <div className={classes.menuButton_avatar}>
        <img
          alt="avatar"
          src={props.profile?.photos.small || "http://dummyimage.com/32"}
        ></img>
      </div>
      <svg
        height="8"
        viewBox="0 0 12 8"
        width="12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2.16 2.3a.75.75 0 0 1 1.05-.14L6 4.3l2.8-2.15a.75.75 0 1 1 .9 1.19l-3.24 2.5c-.27.2-.65.2-.92 0L2.3 3.35a.75.75 0 0 1-.13-1.05z"></path>
      </svg>
    </button>
  );
};

const MenuBlock = (props) => {
  return (
    <>
      <div className={classes.menuBlock_avatar}>
        <img
          src={props.profile?.photos.small || "http://dummyimage.com/56"}
          alt="avater"
        />
      </div>
      <div className={classes.loginName}>{props.auth.login}</div>
      <div className={classes.logoutBtn}>
        <button onClick={props.onLogout}><IconLogout />Logout</button>
      </div>
    </>
  );
};
export default Header;

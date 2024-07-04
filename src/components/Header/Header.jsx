import React, { useEffect, useRef, useState } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import IconLogout from "./LogoutIcon";
import useClickOutside from "../../hooks/useClickOutside";

const Header = ({ logout, auth }) => {
  const [menuBlockСondition, setMenuBlockСondition] = useState(false);
  const onLogout = () => {
    logout();
    setMenuBlockСondition(!menuBlockСondition);
  };

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useClickOutside(menuRef, buttonRef, () => setMenuBlockСondition(false));

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
          {auth.isAuth ? (
            <div
              className={
                menuBlockСondition
                  ? classes.button_isActive + " " + classes.menuBtn
                  : classes.menuBtn
              }
            >
              {" "}
              <div className={classes.btnWrapper} ref={buttonRef}>
                <MenuButton
                  auth={auth}
                  onSwitch={setMenuBlockСondition}
                  menuBlockСondition={menuBlockСondition}
                />
              </div>
              <div
                ref={menuRef}
                className={
                  menuBlockСondition
                    ? classes.menuBlock
                    : classes.menuBlock + " " + classes.invisible
                }
              >
                <MenuBlock auth={auth} onLogout={onLogout} />
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

const MenuButton = ({ auth, onSwitch, menuBlockСondition }) => {
  return (
    <button onClick={() => onSwitch(!menuBlockСondition)}>
      <div className={classes.menuButton_avatar}>
        <img
          alt="avatar"
          src={(auth.photo && auth.photo) || "http://dummyimage.com/32"}
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

const MenuBlock = ({ auth, onLogout }) => {
  return (
    <>
      <div className={classes.menuBlock_avatar}>
        <img
          src={(auth.photo && auth.photo) || "http://dummyimage.com/56"}
          alt="avater"
        />
      </div>
      <div className={classes.loginName}>{auth.login}</div>
      <div className={classes.logoutBtn}>
        <button onClick={onLogout}>
          <IconLogout />
          Logout
        </button>
      </div>
    </>
  );
};
export default Header;

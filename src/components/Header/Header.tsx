import React, { useRef, useState } from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
import MenuBlock from "./menuBlock/MenuBlock";
import MenuButton from "./menuButton/MenuButton";
import { useClickOutside } from "../../hooks/hooks";

type PropsType = {
  logout: () => void;
  isAuth: boolean;
  login: string | null;
  avatar: string | null;
};

const Header = ({ logout, isAuth, login, avatar }: PropsType) => {
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
        <Link className={classes.logo} to="/News">
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="logo"
          />
          <h1 className={classes.title}>3RACHA</h1>
        </Link>
        <div className={classes.loginBlock}>
          {isAuth ? (
            <div
              className={
                menuBlockСondition
                  ? classes.active + " " + classes.menuBtn
                  : classes.menuBtn
              }
            >
              {" "}
              <div className={classes.btnWrapper} ref={buttonRef}>
                <MenuButton
                  avatar={avatar}
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
                <MenuBlock
                  menuBlockСondition={menuBlockСondition}
                  login={login}
                  avatar={avatar}
                  onLogout={onLogout}
                />
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

export default Header;

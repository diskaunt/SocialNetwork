import React, { SetStateAction } from "react";
import classes from "./MenuButton.module.css";

type PropsType = {
	avatar: string | null;
	onSwitch: (arg: boolean) => void;
	menuBlockСondition: boolean;
}

const MenuButton = ({ avatar, onSwitch, menuBlockСondition }: PropsType) => {
  return (
    <button onClick={() => onSwitch(!menuBlockСondition)}>
      <div className={classes.avatarWrapper}>
        <img alt="avatar" src={avatar || "http://dummyimage.com/32"}></img>
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

export default MenuButton;

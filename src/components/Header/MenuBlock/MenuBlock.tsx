import React from "react";
import classes from './MenuBlock.module.css'
import IconLogout from "../../../assets/svg/IconLogout";
import IconSettings from "../../../assets/svg/IconSetting";

type PropsType = {
	avatar: string | null;
	login: string | null;
	onLogout: () => void;
	menuBlockСondition: boolean;
}

const MenuBlock = ({ avatar, login, onLogout, menuBlockСondition }: PropsType) => {
  return (
    <>
      <div className={classes.avatar}>
        <img
          src={avatar || "http://dummyimage.com/56"}
          alt="avater"
        />
      </div>
      <div className={classes.loginName}>{login}</div>
      <div className={classes.btnWrapper}>
				<button disabled={!menuBlockСondition} className={classes.btn} onClick={()=>{}}>
          <IconSettings />
          Edit a profile
        </button>
        <button disabled={!menuBlockСondition} className={classes.btn} onClick={onLogout}>
          <IconLogout />
          Logout
        </button>
      </div>
    </>
  );
};

export default MenuBlock;

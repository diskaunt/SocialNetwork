import React from "react";
import classes from './menuBlock.module.css'
import Icon from "../../icon/Icon";

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
          <Icon name={'setting'} />
          Edit a profile
        </button>
        <button disabled={!menuBlockСondition} className={classes.btn} onClick={onLogout}>
          <Icon name='logout' />
          Logout
        </button>
      </div>
    </>
  );
};

export default MenuBlock;

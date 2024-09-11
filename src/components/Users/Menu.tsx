import * as React from "react";
import classes from "./Users.module.css";

type PropsType = {
  friend: boolean;
  setFriend: (friend: boolean) => void;
};

const Menu = ({ friend, setFriend }: PropsType) => {
  const onFriend = () => setFriend(!friend);
  return (
    <div className={classes.menu}>
      <div className={classes.item}>
        <button
          className={friend ? classes.btn + " " + classes.active : classes.btn}
          onClick={onFriend}
        >
          My friends
        </button>
      </div>
      <div className={classes.item}>
        <button
          className={friend ? classes.btn : classes.btn + " " + classes.active}
          onClick={onFriend}
        >
          Search for friends
        </button>
      </div>
    </div>
  );
};

export default Menu;

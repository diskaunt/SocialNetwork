import * as React from "react";
import classes from "./Users.module.css";
import { getCurrentPage } from "../../redux/users-selector";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/users-reduser";

type PropsType = {
  friend: boolean;
  setFriend: (friend: boolean) => void;
	setPortionNumber: React.Dispatch<React.SetStateAction<number>>;
};

const Menu = ({ friend, setFriend, setPortionNumber }: PropsType) => {
	const dispatch = useDispatch()
  const onFriend = () => {
    setFriend(!friend);
		dispatch(setCurrentPage(1))
		setPortionNumber(1)
  };
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

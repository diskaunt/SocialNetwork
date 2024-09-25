import React, { Fragment } from "react";
import classes from "./Friends.module.css";
import { UsersType } from "../../../../types/types";
import { Link } from "react-router-dom";
import { textSlicer } from "../../../../utils/object-helper";

type PropsType = {
  users: Array<UsersType>;
  totalUsersCount: number;
};

const Friends = ({ users, totalUsersCount }: PropsType) => {
  const friends = users.map((user) => {
    const slicaedName: string | null = textSlicer(user.name, 7);
    return (
      <Link key={user.id} to={"/profile/" + user.id}>
        <div className={classes.user}>
          <div className={classes.avatarWrapper}>
            <img
              className={classes.avatar}
              src={user.photos.large || "http://dummyimage.com/64"}
              alt=""
            />
          </div>
          <div className={classes.name}>{slicaedName}</div>
        </div>
      </Link>
    );
  });

  return (
    <>
      <Link to={"/friends"}>
        <div className={classes.title}>
          Friends{" "}
          <span className={classes.countOfUsers}>{totalUsersCount}</span>
        </div>
      </Link>
      <div className={classes.main}>
        <div className={classes.users}>{friends}</div>
      </div>
    </>
  );
};

export default Friends;

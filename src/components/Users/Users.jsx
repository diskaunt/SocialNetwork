import React from "react";
import classes from "./Users.module.css";
import Preloader from "../common/preloader/Preloader";
import User from "./User/User";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={classes.users}>
      <h1 className={classes.header}>Users</h1>
      <div className={classes.user}>
        {props.isFetching ? (
          <div className={classes.preloader}>
            <Preloader />
          </div>
        ) : (
          props.users.map((u) => <User u={u} unfollow={props.unfollow} follow={props.follow} />)
        )}
      </div>
      <div className={classes.pagesWrapper}>
        {pages.map((p) => (
          <span>
            <span
              onClick={() => props.onPageChanged(p)}
              className={
                props.currentPage === p ? classes.selectedPage : classes.pages
              }
            >
              {p}
            </span>
            <span>, </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Users;

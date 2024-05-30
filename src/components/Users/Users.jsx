import React from "react";
import classes from "./Users.module.css";
import Preloader from "../common/preloader/Preloader";
import User from "./User/User";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  let startIndex = props.currentPage - 3 > 0 ? props.currentPage - 3 : 1;
  let endIndex =
    props.currentPage + 3 <= pagesCount ? props.currentPage + 3 : pagesCount;
  for (let i = startIndex; i <= endIndex; i++) {
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
          props.users.map((u) => (
            <User
              u={u}
              unfollow={props.unfollow}
              follow={props.follow}
              followingInProgress={props.followingInProgress}
            />
          ))
        )}
      </div>
      <div className={classes.pagesWrapper}>
        {pages.map((p) => (
          <span
            onClick={() => props.onPageChanged(p)}
            className={
              props.currentPage === p ? classes.activePage : classes.pages
            }
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Users;

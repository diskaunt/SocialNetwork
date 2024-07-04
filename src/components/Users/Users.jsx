import React from "react";
import classes from "./Users.module.css";
import Preloader from "../common/preloader/Preloader";
import User from "./User/User";
import Paginator from "../common/paginator/Paginator";

let Users = ({
  totalUsersCount,
  pageSize,
  currentPage,
  isFetching,
  users,
  follow,
  unfollow,
  followingInProgress,
  onPageChanged,
}) => {

  return (
    <div className={classes.usersContainer}>
      <h1 className={classes.header}>Users</h1>
      <div className={classes.user}>
        {isFetching ? (
          <div className={classes.preloader}>
            <Preloader />
          </div>
        ) : (
          users.map((u) => (
            <User
							key={u.id}
              user={u}
              follow={follow}
              unfollow={unfollow}
              followingInProgress={followingInProgress}
            />
          ))
        )}
      </div>
      <Paginator
        onPageChanged={onPageChanged}
        currentPage={currentPage}
        totalItemsCount={totalUsersCount}
				pageSize={pageSize}
      />
    </div>
  );
};

export default Users;

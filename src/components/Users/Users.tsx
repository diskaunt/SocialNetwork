import * as React from "react";
import classes from "./Users.module.css";
import Preloader from "../common/Preloader/Preloader";
import User from "./User/User";
import Paginator from "../common/Paginator/Paginator";
import Search from "../common/Search/Search";
import { UsersType } from "../../types/types";
import Menu from "./Menu";

type PropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  isFetching: boolean;
  users: Array<UsersType>;
  followingInProgress: Array<number>;
  search: string;
  friend: boolean;
  setFriend: (friend: boolean) => void;
  follow: (id: number) => void;
  unfollow: (id: number) => void;
  onPageChanged: (pageNumber: number) => void;
  setSearchValue: (value: string) => void;
};

let Users = ({
  totalUsersCount,
  pageSize,
  currentPage,
  isFetching,
  users,
  followingInProgress,
  search,
  friend,
  setFriend,
  follow,
  unfollow,
  onPageChanged,
  setSearchValue,
}: PropsType) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.pages}>
          <h1 className={classes.header}>Friends</h1>
          <Search search={search} setSearchValue={setSearchValue} />
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
        <Menu friend={friend} setFriend={setFriend} />
      </div>
    </>
  );
};

export default Users;

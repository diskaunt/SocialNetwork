import * as React from "react";
import classes from "./Users.module.css";
import Preloader from "../common/Preloader/Preloader";
import User from "./User/User";
import Paginator from "../common/Paginator/Paginator";
import Search from "../common/Search/Search";
import { UsersType } from "../../types/types";
import Menu from "./Menu";

type Props = {
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
  onSearch: (value: string) => void;
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
  onSearch,
}: Props) => {
  let [portionNumber, setPortionNumber] = React.useState<number>(1);
  return (
    <>
      <div className={classes.container}>
        <div className={classes.pages}>
          <h1 className={classes.header}>Friends</h1>
          <Search
            search={search}
            onSearch={onSearch}
            placeHolderValue={"Enter a request"}
          />
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
            portionNumber={portionNumber}
            setPortionNumber={setPortionNumber}
          />
        </div>
        <Menu
          friend={friend}
          setFriend={setFriend}
          setPortionNumber={setPortionNumber}
        />
      </div>
    </>
  );
};

export default Users;

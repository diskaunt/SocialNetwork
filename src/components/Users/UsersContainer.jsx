import { connect } from "react-redux";
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
  togleIsFetching,
} from "../../redux/users-reduser";
import React, { useEffect } from "react";
import axios from "axios";
import Users from "./Users";

const UsersComponent = (props) => {
  useEffect(() => {
    props.togleIsFetching();
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users/?page=${props.currentPage}&count=${props.pageSize}`,
        { withCredentials: true }
      )
      .then((response) => {
        props.togleIsFetching();
        props.setUsers(response.data.items);
        props.setTotalUsersCount(response.data.totalCount);
      });
  }, []);

  const onPageChanged = (pageNumber) => {
    props.togleIsFetching();
    props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`,
        { withCredentials: true }
      )
      .then((response) => {
        props.togleIsFetching();
        props.setUsers(response.data.items);
      });
  };

  return (
    <Users
      totalUsersCount={props.totalUsersCount}
      pageSize={props.pageSize}
      users={props.users}
      follow={props.follow}
			unfollow={props.unfollow}
      onPageChanged={onPageChanged}
      currentPage={props.currentPage}
      isFetching={props.isFetching}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  follow,
	unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  togleIsFetching,
})(UsersComponent);

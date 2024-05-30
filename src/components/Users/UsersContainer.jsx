import { connect } from "react-redux";
import {
  follow,
  unfollow,
  getUsers,
} from "../../redux/users-reduser";
import React, { useEffect } from "react";
import Users from "./Users";

const UsersComponent = (props) => {
  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize);
  }, []);

  const onPageChanged = (pageNumber) => {
    if (props.currentPage === pageNumber) return;
    props.getUsers(pageNumber, props.pageSize);
  };

  return (
    <Users {...props} onPageChanged={onPageChanged}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    followingInProgress: state.usersPage.followingInProgress,
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
  getUsers,
})(UsersComponent);

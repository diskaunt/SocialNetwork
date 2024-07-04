import { connect } from "react-redux";
import { follow, unfollow, requestUsers } from "../../redux/users-reduser";
import React, { useEffect } from "react";
import Users from "./Users";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../redux/users-selector";

const UsersComponent = ({ currentPage, pageSize, requestUsers, ...props }) => {
  useEffect(() => {
    requestUsers(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const onPageChanged = (pageNumber) => {
    if (currentPage === pageNumber) return;
    requestUsers(pageNumber, pageSize);
  };

  return (
    <Users
      {...props}
      currentPage={currentPage}
      pageSize={pageSize}
      onPageChanged={onPageChanged}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  requestUsers,
})(UsersComponent);

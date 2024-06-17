import { connect } from "react-redux";
import {
  follow,
  unfollow,
  requestUsers,
} from "../../redux/users-reduser";
import React, { useEffect } from "react";
import Users from "./Users";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../redux/users-selector";

const UsersComponent = (props) => {
  useEffect(() => {
    props.requestUsers(props.currentPage, props.pageSize);
  }, []);

  const onPageChanged = (pageNumber) => {
    if (props.currentPage === pageNumber) return;
    props.requestUsers(pageNumber, props.pageSize);
  };

  return (
    <Users {...props} onPageChanged={onPageChanged}
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

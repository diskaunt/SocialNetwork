import { connect } from "react-redux";
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
	toggleFollowingProgress,
} from "../../redux/users-reduser";
import React, { useEffect } from "react";
import Users from "./Users";
import { usersApi } from "../../api/api";

const UsersComponent = (props) => {
  useEffect(() => {
    props.toggleIsFetching();
    usersApi.getUsers(props.currentPage, props.pageSize).then((data) => {
      props.toggleIsFetching();
      props.setUsers(data.items);
      props.setTotalUsersCount(data.totalCount);
    });
  }, []);

  const onPageChanged = (pageNumber) => {
		if (props.currentPage === pageNumber) return
    props.toggleIsFetching();
    props.setCurrentPage(pageNumber);
    usersApi.getUsers(pageNumber, props.pageSize).then((data) => {
      props.toggleIsFetching();
      props.setUsers(data.items);
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
			toggleFollowingProgress={props.toggleFollowingProgress}
			followingInProgress={props.followingInProgress}
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
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
	toggleFollowingProgress,
})(UsersComponent);

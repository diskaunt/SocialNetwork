import { connect } from "react-redux";
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
  togleIsFetching,
} from "../../redux/users-reduser";
import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersComponent extends React.Component {
  componentDidMount() {
    this.props.togleIsFetching();
    if (!this.props.users.length) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
        .then((response) => {
          this.props.togleIsFetching();
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
  }

  onFollow = (userId) => {
    this.props.follow(userId);
  };

  onPageChanged = (pageNumber) => {
    this.props.togleIsFetching();
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.togleIsFetching();
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        users={this.props.users}
        follow={this.onFollow}
        onPageChanged={this.onPageChanged}
        currentPage={this.props.currentPage}
        isFetching={this.props.isFetching}
      />
    );
  }
}

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

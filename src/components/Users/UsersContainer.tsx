import * as React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, requestUsers } from '../../redux/users-reduser';
import Users from './Users';
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from '../../redux/users-selector';
import { RootState } from '../../redux/redux-store';
import { useTrottle } from '../../hooks/hooks';
import WithAuthorize from '../../hoc/WithAuthorize';
import { Navigate } from 'react-router-dom';

// type MapStatePropsType = {
//   currentPage: number;
//   pageSize: number;
//   users: Array<UsersType>;
//   totalUsersCount: number;
//   isFetching: boolean;
//   followingInProgress: Array<number>;
// };

type MapProps = ReturnType<typeof mapStateToProps>;

type MapDispatchPropsType = {
  requestUsers: ({
    currentPage,
    pageSize,
    search,
    friend,
  }: {
    currentPage: number;
    pageSize: number;
    search?: string;
    friend?: boolean;
  }) => void;
  follow: (id: number) => void;
  unfollow: (id: number) => void;
};

type PropsType = MapProps & MapDispatchPropsType;

const UsersComponent = ({
  auth,
  currentPage,
  pageSize,
  requestUsers,
  ...props
}: PropsType) => {
  const [search, setSearchValue] = useState('');
  const [friend, setFriend] = useState(true);
  React.useEffect(() => {
    requestUsers({ currentPage, pageSize, search, friend });
  }, [currentPage, pageSize, friend]);

  const onPageChanged = (pageNumber: number) => {
    currentPage !== pageNumber &&
      requestUsers({ currentPage: pageNumber, pageSize });
  };

  useTrottle(
    () => requestUsers({ currentPage, pageSize, search, friend }),
    [search],
    1500
  );

  return (
    <WithAuthorize
      isAuthorize={!!auth}
      components={{
        Authorized: (
          <Users
            {...props}
            currentPage={currentPage}
            pageSize={pageSize}
            search={search}
            friend={friend}
            setFriend={setFriend}
            onPageChanged={onPageChanged}
            onSearch={setSearchValue}
          />
        ),
        Unauthorized: (<Navigate to={'/login'} />),
      }}
    />
  );
};

let mapStateToProps = (state: RootState) => {
  return {
    auth: state.auth.userId,
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

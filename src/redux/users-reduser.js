import { usersApi } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USER_COUNT = "SET-TOTAL-USER-COUNT";
const TOGLE_IS_FETCHING = "TOGLE-IS-FETCHING";
const TOGLE_IS_FOLLOWING_PROGRESS = "TOGLE-IS-FOLLOWING-PROGRESS";

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: !u.followed };
          }
          return u;
        }),
      };
    // case UNFOLLOW:
    //   return {
    //     ...state,
    //     users: state.users.map((u) => {
    //       if (u.id === action.userId) {
    //         return { ...u, followed: false };
    //       }
    //       return u;
    //     }),
    //   };
    case SET_USERS: {
      return { ...state, users: !state.users.every((user, index) => user === action.users[index])? [...state.users]: [...state.users, ...action.users] };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }

    case SET_TOTAL_USER_COUNT: {
      return {
        ...state,
        totalUsersCount: action.count,
      };
    }

    case TOGLE_IS_FETCHING: {
      return { ...state, isFetching: !state.isFetching };
    }

    case TOGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter((id) => id !== action.id),
      };
    }

    default:
      return state;
  }
};

export const followSucces = (userId) => ({
  type: FOLLOW,
  userId,
});

// export const unfollowSucces = (userId) => ({
//   type: UNFOLLOW,
//   userId,
// });

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalUsersCount = (totalUserCount) => ({
  type: SET_TOTAL_USER_COUNT,
  count: totalUserCount,
});

export const toggleIsFetching = () => ({
  type: TOGLE_IS_FETCHING,
});

export const toggleFollowingProgress = (id, isFetching) => ({
  type: TOGLE_IS_FOLLOWING_PROGRESS,
  id,
  isFetching,
});

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleIsFetching());
  usersApi.getUsers(currentPage, pageSize).then((data) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching());
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  });
};

export const unfollow = (id) => (dispatch) => {
  dispatch(toggleFollowingProgress(id, true));
  usersApi.delete(id).then((data) => {
    if (!data.resultCode) {
      dispatch(followSucces(id));
    }
    dispatch(toggleFollowingProgress(id, false));
  });
};

export const follow = (id) => (dispatch) => {
  dispatch(toggleFollowingProgress(id, true));
  usersApi.follow(id).then((data) => {
    if (!data.resultCode) {
      dispatch(followSucces(id));
    }
    dispatch(toggleFollowingProgress(id, false));
  });
};

export default usersReduser;

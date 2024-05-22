const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USER_COUNT = "SET-TOTAL-USER-COUNT";
const TOGLE_IS_FETCHING = "TOGLE-IS-FETCHING";
const TOGLE_IS_FOLLOWING_PROGRESS = "TOGLE-IS-FOLLOWING-PROGRESS";

const initialState = {
  users: [],
  pageSize: 6,
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
      return { ...state, users: [...action.users] };
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

export const follow = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unfollow = (userId) => ({
  type: UNFOLLOW,
  userId,
});

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

export default usersReduser;

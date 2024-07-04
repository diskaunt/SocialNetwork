import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helper";

const FOLLOW_UNFOLLOW = "3RACHA/users/FOLLOW_UNFOLLOW";
const SET_USERS = "3RACHA/users/SET-USERS";
const SET_CURRENT_PAGE = "3RACHA/users/SET-CURRENT-PAGE";
const SET_TOTAL_USER_COUNT = "3RACHA/users/SET-TOTAL-USER-COUNT";
const USER_TOGLE_IS_FETCHING = "3RACHA/users/TOGLE-IS-FETCHING";
const TOGLE_IS_FOLLOWING_PROGRESS = "3RACHA/users/TOGLE-IS-FOLLOWING-PROGRESS";

const initialState = {
  users: [],
  pageSize: 16,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, "id", action.userId, action.newObjectProps),
      };

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

    case USER_TOGLE_IS_FETCHING: {
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

export const followUnfollowSucces = (userId, newObjectProps) => ({
  type: FOLLOW_UNFOLLOW,
  userId,
  newObjectProps,
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
  type: USER_TOGLE_IS_FETCHING,
});

export const toggleFollowingProgress = (id, isFetching) => ({
  type: TOGLE_IS_FOLLOWING_PROGRESS,
  id,
  isFetching,
});

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching());
  let data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setCurrentPage(currentPage));
  dispatch(toggleIsFetching());
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};

const followUnfollowFlow = async (dispatch, id, apiMethod, newObjectProps) => {
  dispatch(toggleFollowingProgress(id, true));
  let data = await apiMethod(id);
  if (!data.resultCode) {
    dispatch(followUnfollowSucces(id, newObjectProps));
  }
  dispatch(toggleFollowingProgress(id, false));
};

export const follow = (id) => async (dispatch) => {
	followUnfollowFlow(dispatch, id, usersAPI.follow, { followed: true });
};

export const unfollow = (id) => async (dispatch) => {
  followUnfollowFlow(dispatch, id, usersAPI.delete, { followed: false });
};


export default usersReduser;

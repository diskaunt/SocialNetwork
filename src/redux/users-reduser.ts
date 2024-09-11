import { usersAPI } from "../api/api";
import { ThunkType, UsersType } from "../types/types";
import { updateObjectInArray } from "../utils/object-helper";
import {
	createSlice,
  Dispatch,
  PayloadAction,
	UnknownAction,
} from "@reduxjs/toolkit";

// const FOLLOW_UNFOLLOW = "3RACHA/users/FOLLOW_UNFOLLOW";
// const SET_USERS = "3RACHA/users/SET-USERS";
// const SET_CURRENT_PAGE = "3RACHA/users/SET-CURRENT-PAGE";
// const SET_TOTAL_USER_COUNT = "3RACHA/users/SET-TOTAL-USER-COUNT";
// const USER_TOGLE_IS_FETCHING = "3RACHA/users/TOGLE-IS-FETCHING";
// const TOGLE_IS_FOLLOWING_PROGRESS = "3RACHA/users/TOGLE-IS-FOLLOWING-PROGRESS";

const initialState = {
  users: [] as Array<UsersType>,
  pageSize: 24 as number,
  totalUsersCount: 0 as number,
  currentPage: 1 as number,
  isFetching: false as boolean,
  followingInProgress: [] as Array<number>, // array of user ids
};

export type InitialStateType = typeof initialState;
type DispatchType = Dispatch<UnknownAction>;

const usersSlice = createSlice({
  name: "usersPage",
  initialState,
  reducers: {
    followUnfollowSucces(
      state,
      action: PayloadAction<{
        userId: number;
        newObjectProps: { followed: boolean };
      }>
    ) {
      state.users = updateObjectInArray(state.users, "id", action.payload);
    },
    setUsers(state, action: PayloadAction<Array<UsersType>>) {
      state.users = [...action.payload];
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setTotalUsersCount(state, action: PayloadAction<number>) {
      state.totalUsersCount = action.payload;
    },
    toggleIsFetching(state) {
      state.isFetching = !state.isFetching;
    },
    toggleFollowingProgress(
      state,
      action: PayloadAction<{ userId: number; isFetching: boolean }>
    ) {
      state.followingInProgress = action.payload.isFetching
        ? [...state.followingInProgress, action.payload.userId]
        : state.followingInProgress.filter(
            (id) => id !== action.payload.userId
          );
    },
  },
});

export const requestUsers =
  (
    currentPage: number,
    pageSize: number,
    search?: string,
    friend?: boolean
  ): ThunkType<Promise<void>> =>
  async (dispatch, getState) => {
    dispatch(toggleIsFetching());
    let data = await usersAPI.getUsers(currentPage, pageSize, search, friend);
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching());
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };

const _followUnfollowFlow = async (
  dispatch: DispatchType,
  id: number,
  apiMethod: any,
  newObjectProps: { followed: boolean }
) => {
  dispatch(toggleFollowingProgress({userId: id, isFetching: true}));
  let data = await apiMethod(id);
  if (!data.resultCode) {
    dispatch(followUnfollowSucces({userId: id, newObjectProps}));
  }
  dispatch(toggleFollowingProgress({userId: id, isFetching: true}));
};

export const follow =
  (id: number): ThunkType<Promise<void>> =>
  async (dispatch) => {
    _followUnfollowFlow(dispatch, id, usersAPI.follow, { followed: true });
  };

export const unfollow =
  (id: number): ThunkType<Promise<void>> =>
  async (dispatch) => {
    _followUnfollowFlow(dispatch, id, usersAPI.delete, { followed: false });
  };

	export default usersSlice.reducer;
	export const {followUnfollowSucces,
		setUsers,
		setCurrentPage,
		setTotalUsersCount,
		toggleIsFetching,
		toggleFollowingProgress} = usersSlice.actions;

// const usersReduser = (
//   state = initialState,
//   action: ActionsTypes
// ): InitialStateType => {
//   switch (action.type) {
//     case FOLLOW_UNFOLLOW:
//       return {
//         ...state,
//         users: updateObjectInArray(state.users, "id", action.payload),
//       };

//     case SET_USERS: {
//       return { ...state, users: [...action.payload] };
//     }

//     case SET_CURRENT_PAGE: {
//       return {
//         ...state,
//         currentPage: action.payload,
//       };
//     }

//     case SET_TOTAL_USER_COUNT: {
//       return {
//         ...state,
//         totalUsersCount: action.payload,
//       };
//     }

//     case USER_TOGLE_IS_FETCHING: {
//       return { ...state, isFetching: !state.isFetching };
//     }

//     case TOGLE_IS_FOLLOWING_PROGRESS: {
//       let { userId, isFetching } = action.payload;
//       return {
//         ...state,
//         followingInProgress: isFetching
//           ? [...state.followingInProgress, userId]
//           : state.followingInProgress.filter((id) => id !== userId),
//       };
//     }
//     default:
//       return state;
//   }
// };

// type ActionsTypes =
//   | FollowUnfollowSucces
//   | SetUsers
//   | SetCurrentPage
//   | SetTotalUsersCount
//   | ToggleIsFetchingType
//   | ToggleFollowingProgress;

// type FollowUnfollowSucces = {
//   type: typeof FOLLOW_UNFOLLOW;
//   payload: { userId: number; newObjectProps: { followed: boolean } };
// };

// export const followUnfollowSucces = (
//   userId: number,
//   newObjectProps: { followed: boolean }
// ): FollowUnfollowSucces => ({
//   type: FOLLOW_UNFOLLOW,
//   payload: { userId, newObjectProps },
// });

// type SetUsers = { type: typeof SET_USERS; payload: Array<UsersType> };

// export const setUsers = (users: Array<UsersType>): SetUsers => ({
//   type: SET_USERS,
//   payload: users,
// });

// type SetCurrentPage = {
//   type: typeof SET_CURRENT_PAGE;
//   payload: number;
// };

// export const setCurrentPage = (currentPage: number): SetCurrentPage => ({
//   type: SET_CURRENT_PAGE,
//   payload: currentPage,
// });

// type SetTotalUsersCount = {
//   type: typeof SET_TOTAL_USER_COUNT;
//   payload: number;
// };

// export const setTotalUsersCount = (
//   totalUserCount: number
// ): SetTotalUsersCount => ({
//   type: SET_TOTAL_USER_COUNT,
//   payload: totalUserCount,
// });

// type ToggleIsFetchingType = {
//   type: typeof USER_TOGLE_IS_FETCHING;
// };

// export const toggleIsFetching = (): ToggleIsFetchingType => ({
//   type: USER_TOGLE_IS_FETCHING,
// });

// type ToggleFollowingProgress = {
//   type: typeof TOGLE_IS_FOLLOWING_PROGRESS;
//   payload: { userId: number; isFetching: boolean };
// };

// export const toggleFollowingProgress = (
//   userId: number,
//   isFetching: boolean
// ): ToggleFollowingProgress => ({
//   type: TOGLE_IS_FOLLOWING_PROGRESS,
//   payload: { userId, isFetching },
// });

// type GetStateType = () => RootState;
// type ThunkType = ThunkAction<Promise<void>, RootState, unknown, ActionsTypes>;

// export default usersReduser;

import { usersAPI } from '../api/usersAPI';
import { ThunkType, UsersType } from '../types/types';
import { updateObjectInArray } from '../utils/object-helper';
import {
  createSlice,
  Dispatch,
  PayloadAction,
  UnknownAction,
} from '@reduxjs/toolkit';

const initialState = {
  users: [] as Array<UsersType>,
  pageSize: 24 as number,
  totalUsersCount: 0 as number,
  currentPage: 1 as number,
  isFetching: false as boolean,
  followingInProgress: [] as Array<number>, // array of user ids
};

export type InitialState = typeof initialState;

const usersSlice = createSlice({
  name: 'usersPage',
  initialState,
  reducers: {
    followUnfollowSucces(
      state,
      action: PayloadAction<{
        userId: number;
        newObjectProps: { followed: boolean };
      }>
    ) {
      state.users = updateObjectInArray(state.users, 'id', action.payload);
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
    toggleIsFetching(state, action: PayloadAction<boolean>) {
      state.isFetching = action.payload;
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
  ): ThunkType =>
  async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await usersAPI.getUsers(currentPage, pageSize, search, friend);
    dispatch(toggleIsFetching(false));
    dispatch(setCurrentPage(currentPage));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };

type DispatchType = Dispatch<UnknownAction>;

const _followUnfollowFlow = async (
  dispatch: DispatchType,
  id: number,
  apiMethod: any,
  newObjectProps: { followed: boolean }
) => {
  dispatch(toggleFollowingProgress({ userId: id, isFetching: true }));
  let data = await apiMethod(id);
  if (!data.resultCode) {
    dispatch(followUnfollowSucces({ userId: id, newObjectProps }));
  }
  dispatch(toggleFollowingProgress({ userId: id, isFetching: true }));
};

export const follow =
  (id: number): ThunkType =>
  async (dispatch) => {
    _followUnfollowFlow(dispatch, id, usersAPI.follow, { followed: true });
  };

export const unfollow =
  (id: number): ThunkType =>
  async (dispatch) => {
    _followUnfollowFlow(dispatch, id, usersAPI.delete, { followed: false });
  };

export default usersSlice.reducer;
export const {
  followUnfollowSucces,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
} = usersSlice.actions;

// const usersReduser = (
//   state = initialState,
//   action: Actions
// ): InitialState => {
//   switch (action.type) {
//     case "FOLLOW_UNFOLLOW":
//       return {
//         ...state,
//         users: updateObjectInArray(state.users, "id", action.payload),
//       };

//     case "SET_USERS": {
//       return { ...state, users: [...action.payload] };
//     }

//     case "SET_CURRENT_PAGE": {
//       return {
//         ...state,
//         currentPage: action.payload,
//       };
//     }

//     case "SET_TOTAL_USER_COUNT": {
//       return {
//         ...state,
//         totalUsersCount: action.payload,
//       };
//     }

//     case "USER_TOGLE_IS_FETCHING": {
//       return { ...state, isFetching: !state.isFetching };
//     }

//     case "TOGLE_IS_FOLLOWING_PROGRESS": {
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

// type Properties<T> = T extends {[key: string]: infer U} ? U : never;
// export type AppState<T extends {[key: string]: (...args: any[]) => infer U} ? U : never  > = ReturnType<Properties<T>>

// type Actions<T> = T extends { [key: string]: (...args: any[]) => infer U }
//   ? U
//   : never;

// export const actions = {
//   followUnfollowSucces: (
//     userId: number,
//     newObjectProps: { followed: boolean }
//   ) => ({
//     type: "FOLLOW_UNFOLLOW",
//     payload: { userId, newObjectProps },
//   } as const),
//   setUsers: (users: Array<UsersType>) => ({
//     type: "SET_USERS",
//     payload: users,
//   } as const),
//   setCurrentPage: (currentPage: number) => ({
//     type: "SET_CURRENT_PAGE",
//     payload: currentPage,
//   } as const),
//   setTotalUsersCount: (totalUserCount: number) => ({
//     type: "SET_TOTAL_USER_COUNT",
//     payload: totalUserCount,
//   } as const),
//   toggleIsFetching: () => ({
//     type: "USER_TOGLE_IS_FETCHING",
//   } as const),
//   toggleFollowingProgress: (
//     userId: number,
//     isFetching: boolean
//   ) => ({
//     type: "TOGLE_IS_FOLLOWING_PROGRESS",
//     payload: { userId, isFetching },
//   } as const),
// };

// type GetStateType = () => RootState; default usersReduser;

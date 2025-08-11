import { usersAPI } from '../api/usersAPI';
import { UsersType } from '../types/types';
import { updateObjectInArray } from '../utils/object-helper';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    followUnfollowSuccess(
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
    //не используется , утратил актуальность после реализации extraReducers
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
  extraReducers: (builder) => {
		// request Users
    builder.addCase(requestUsers.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(requestUsers.fulfilled, (state, action) => {
      const data = action.payload;
      state.users = data.users;
      state.totalUsersCount = data.totalCount;
      state.currentPage = data.currentPage;
      state.isFetching = false;
    });
    builder.addCase(requestUsers.rejected, (state, action) => {
      state.isFetching = false;
    });
		// follow User
    builder.addCase(follow.pending, (state, action) => {
      state.followingInProgress.push(action.meta.arg);
    });
    builder.addCase(follow.fulfilled, (state, action) => {
      if (!action.payload.resultCode) {
        state.users = updateObjectInArray(state.users, 'id', {
          userId: action.payload.id,
          newObjectProps: { followed: action.payload.followed },
        });
        state.followingInProgress = state.followingInProgress.filter(
          (id) => id !== action.payload.id
        );
      }
    });
    builder.addCase(follow.rejected, (state, action) => {
      state.followingInProgress = state.followingInProgress.filter(
        (id) => id !== action.meta.arg
      );
    });
		// unfollow Users
    builder.addCase(unfollow.pending, (state, action) => {
      state.followingInProgress.push(action.meta.arg);
    });
    builder.addCase(unfollow.fulfilled, (state, action) => {
      if (!action.payload.resultCode) {
        state.users = updateObjectInArray(state.users, 'id', {
          userId: action.payload.id,
          newObjectProps: { followed: action.payload.followed },
        });
        state.followingInProgress = state.followingInProgress.filter(
          (id) => id !== action.payload.id
        );
      }
    });
    builder.addCase(unfollow.rejected, (state, action) => {
      state.followingInProgress = state.followingInProgress.filter(
        (id) => id !== action.meta.arg
      );
    });
  },
});

export const requestUsers = createAsyncThunk(
  'requestUsers',
  async (
    {
      currentPage,
      pageSize,
      search,
      friend,
    }: {
      currentPage: number;
      pageSize: number;
      search?: string;
      friend?: boolean;
    },
    thunkAPI
  ) => {
    try {
      const data = await usersAPI.getUsers(
        currentPage,
        pageSize,
        search,
        friend
      );
      return {
        users: data.items,
        totalCount: data.totalCount,
        currentPage: currentPage,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const follow = createAsyncThunk(
  'follow',
  async (id: number, thunkAPI) => {
    try {
      let data = await usersAPI.follow(id);
      return { id, resultCode: data.resultCode, followed: true };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const unfollow = createAsyncThunk(
  'unfollow',
  async (id: number, thunkAPI) => {
    try {
      let data = await usersAPI.delete(id);
      return { id, resultCode: data.resultCode, followed: false };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export default usersSlice.reducer;
export const {
  followUnfollowSuccess,
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
//   followUnfollowSuccess: (
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

import { createSlice, ThunkAction, UnknownAction } from "@reduxjs/toolkit";
import { getAuthUserData } from "./auth-reduser";
import { RootState } from "./redux-store";

export interface InitialStateType {
  initialized: boolean;
}

const initialState: InitialStateType = {
  initialized: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setInitialized(state) {
      state.initialized = true;
    },
  },
});

type ThunkType = ThunkAction<Promise<void>, RootState, unknown, UnknownAction>

export const initializedApp = (): ThunkType => async (dispatch) => {
  let promises = [dispatch(getAuthUserData())];
  Promise.all(promises).then(() =>
    setTimeout(() => dispatch(setInitialized()), 500)
  );
};

export const { setInitialized } = appSlice.actions;

export default appSlice.reducer;

// const SET_INITIALIZED = "3RACHA/app/SET_INITIALIZED";
// const appReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_INITIALIZED:
//       return {
//         ...state,
//         initialized: true,
//       };
//     default:
//       return { ...state };
//   }
// };

// export const setInitialized = () => ({
// 	type: SET_INITIALIZED,
// });

// export const initializedApp = () => async (dispatch) => {
//   let promise = [dispatch(getAuthUserData())];
//   const data: Object = await Promise.all(promise);
//   if (data.resultCode === 0) {
//     setTimeout(() => dispatch(setInitialized()), 500);
//   }
// };



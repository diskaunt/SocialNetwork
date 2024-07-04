import { getAuthUserData } from "./auth-reduser";

const SET_INITIALIZED = "3RACHA/app/SET_INITIALIZED";

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      };
    default:
      return { ...state };
  }
};

export const setInitialized = () => ({
  type: SET_INITIALIZED,
});

export const initializedApp = () => (dispatch) => {
  let promise = [dispatch(getAuthUserData())];
  Promise.all(promise).then(() => setTimeout(()=> dispatch(setInitialized()), 1000));
};

export default appReducer;

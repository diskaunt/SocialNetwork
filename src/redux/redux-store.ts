import { configureStore } from "@reduxjs/toolkit";

import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReduser from "./users-reduser";
import authReduser from "./auth-reduser";
import appReducer from "./app-reduser";

const store = configureStore({
  reducer: {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReduser,
    auth: authReduser,
    app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppState = typeof store;

export default store

//@ts-ignore
window.__store__ = store;

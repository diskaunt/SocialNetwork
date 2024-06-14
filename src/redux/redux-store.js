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

window.store = store.getState();

export default store;

import { configureStore } from "@reduxjs/toolkit";

import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReduser from "./users-reduser";
import authReduser from "./auth-reduser";

const store = configureStore({
  reducer: {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReduser,
    auth: authReduser,
  },
});

window.store = store;

export default store;

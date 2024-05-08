import { configureStore } from "@reduxjs/toolkit";

import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReduser from "./users-reduser";

const store = configureStore({
  reducer: {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
		usersPage: usersReduser,
  },
});

export default store
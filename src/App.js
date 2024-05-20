import "./App.css";
import React from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsComtainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import NoMatch from "./components/ErrorPage/NoMatch";
import HeaderContainer from "./components/Header/HeaderContainer";

export default function App() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NoMatch />,
    children: [
      {
        path: "/profile/*",
        element: <ProfileContainer />,
        errorElement: <NoMatch />,
      },
      { path: "/dialogs/*", element: <DialogsContainer /> },
      { path: "/news/", element: <News /> },
      { path: "/music/", element: <Music /> },
      { path: "/settings/", element: <Settings /> },
      { path: "/users/", element: <UsersContainer /> },
    ],
  },
]);

function Root() {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Sidebar />
      <div className="appWrapperContent">
        <Outlet />
      </div>
    </div>
  );
}

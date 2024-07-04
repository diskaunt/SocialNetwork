import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import NoMatch from "./components/ErrorPage/NoMatch";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import LoginPage from "./components/Login/Login";
import { lazy } from "react";
import Preloader from "./components/common/preloader/Preloader";
import { withSuspense } from "./hoc/withSuspense";

const DialogsContainer = lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = lazy(() =>
  import("././components/Profile/ProfileContainer")
);

const UsersContainer = lazy(() => import("./components/Users/UsersContainer"));

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NoMatch />,
    children: [
      {
        path: "/profile/:userId?",
        element: withSuspense(ProfileContainer)(),
        errorElement: <NoMatch />,
      },
      {
        path: "dialogs/*",
        element: withSuspense(DialogsContainer)(),
        errorElement: <NoMatch />,
      },
      { path: "news/", element: <News /> },
      { path: "music/", element: <Music /> },
      { path: "settings/", element: <Settings /> },
      {
        path: "users/",
        element: withSuspense(UsersContainer)(),
        errorElement: <NoMatch />,
      },
      { path: "login", element: <LoginPage /> },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import "./App.css";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import HeaderContainer from "./components/Header/HeaderContainer";
import { initializedApp } from "./redux/app-reduser";
import CirclePreloader from "./components/common/Preloader/CirclePrelloader";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";

function App() {
  const initialized = useAppSelector((state) => state.app.initialized);
  const dispatch = useAppDispatch();
  const catchAllUnhandledErrors = (event: PromiseRejectionEvent): any => {
    console.error(`Uncaught error in`, event.promise);
  };
  useEffect(() => {
    dispatch(initializedApp());
    window.addEventListener("unhandledrejection", catchAllUnhandledErrors);
    return window.removeEventListener(
      "unhandledrejection",
      catchAllUnhandledErrors
    );
  }, [initialized, dispatch]);
  return (
    <div className="appWrapper">
      <HeaderContainer />
      {initialized ? (
        <>
          <Sidebar />
          <div className="appWrapperContent">
            <Outlet />
          </div>
        </>
      ) : (
        <CirclePreloader />
      )}
    </div>
  );
}

export default App;

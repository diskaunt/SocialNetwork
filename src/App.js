import "./App.css";
import React, { useEffect } from "react";
import {
  Outlet,
} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import HeaderContainer from "./components/Header/HeaderContainer";
import { connect } from "react-redux";
import { initializedApp } from "./redux/app-reduser";
import CirclePreloader from "./components/common/preloader/CirclePrelloader";

function App({initializedApp, initialized, ...props}) {
	useEffect(() => {
    initializedApp();
  }, [initialized]);
  return (
	<div className="app-wrapper">
	<HeaderContainer />
	{initialized? <><Sidebar />
	<div className="appWrapperContent">
		<Outlet />
	</div></> : <CirclePreloader />}
</div>
	)
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  initialized: state.app.initialized,
});

const ReactJsApp = connect(mapStateToProps, { initializedApp })(App);

export default ReactJsApp

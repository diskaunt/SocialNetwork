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

function App(props) {
	useEffect(() => {
    props.initializedApp();
  }, [props.initialized]);
  return (
	<div className="app-wrapper">
	<HeaderContainer />
	{props.initialized? <><Sidebar />
	<div className="appWrapperContent">
		<Outlet />
	</div></>: <CirclePreloader />}
</div>
	)
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializedApp })(App);

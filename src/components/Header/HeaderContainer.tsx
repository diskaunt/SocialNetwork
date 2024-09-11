import React from "react";
import Header from "./Header";
import { logout } from "../../redux/auth-reduser";
import { connect } from "react-redux";
import { RootState } from "../../redux/redux-store";

type MapStateToPropsType = {
	// auth: AuthType
  isAuth: boolean;
	login: string | null;
	avatar: string | null;
};

type MapActionToPropsType = {
  logout: () => void;
};

type PropsType = MapActionToPropsType & MapStateToPropsType;

const HeaderContainer = ({ isAuth, login, avatar, logout }: PropsType) => {
  return (
    <Header isAuth={isAuth} login={login} avatar={avatar} logout={logout} />
  );
};

let mapStateToProps = (state: RootState): MapStateToPropsType => {
  return {
    // auth: state.auth,
		isAuth: state.auth.isAuth,
		login: state.auth.login,
		avatar: state.auth.avatar,
  };
};

export default connect(mapStateToProps, {
  logout,
})(HeaderContainer);

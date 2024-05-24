import React, { useEffect } from "react";
import Header from "./Header";
import { getAuthUserData } from "../../redux/auth-reduser";
import { connect } from "react-redux";

const HeaderContainer = (props) => {
  useEffect(() => {
    props.getAuthUserData();
  }, [props.isAuth]);

  return <Header {...props} />;
};

let mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
    profile: state.auth.profile,
  };
};

export default connect(mapStateToProps, {
  getAuthUserData,
})(HeaderContainer);

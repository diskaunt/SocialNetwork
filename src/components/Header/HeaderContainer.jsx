import React from "react";
import Header from "./Header";
import { logout } from "../../redux/auth-reduser";
import { connect } from "react-redux";

const HeaderContainer = (props) => {
  return <Header {...props} />;
};

let mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {
  logout,
})(HeaderContainer);

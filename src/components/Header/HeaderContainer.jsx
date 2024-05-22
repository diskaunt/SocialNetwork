import React, { useEffect } from "react";
import Header from "./Header";
import { setUserData, setUserProfile } from "../../redux/auth-reduser";
import { connect } from "react-redux";
import { authApi, profileApi } from "../../api/api";

const HeaderContainer = (props) => {
  useEffect(() => {
    authApi.getAuth()
      .then((response) => {
        if (!response.resultCode) {
          props.setUserData(response.data);
        }
      })
      .then(() => {
        if (props.userId !== null) {
          profileApi.getProfile(props.userId).then((response) => {
            props.setUserProfile(response);
          });
        }
      });
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
  setUserData,
  setUserProfile,
})(HeaderContainer);

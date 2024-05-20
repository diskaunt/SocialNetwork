import React, { useEffect } from "react";
import Header from "./Header";
import { setUserData, setUserProfile } from "../../redux/auth-reduser";
import { connect } from "react-redux";
import axios from "axios";
import Preloader from "../common/preloader/Preloader";
import classes from "./Header.module.css";

const HeaderContainer = (props) => {
  useEffect(() => {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          props.setUserData(response.data.data);
        }
      })
      .then(() => {
        if (props.userId !== null) {
          axios
            .get(
              "https://social-network.samuraijs.com/api/1.0/profile/" +
                props.userId,
              {}
            )
            .then((response) => {
              props.setUserProfile(response.data);
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

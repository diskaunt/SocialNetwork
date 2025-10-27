import React from "react";
import classes from "./login.module.css";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reduser";
import { Navigate } from "react-router-dom";
import LoginForm from "./loginForm/LoginForm";
import { RootState } from "../../redux/redux-store";
import logo from "public/logo.png"

type PropsType = {
  isAuth: boolean;
  captchaUrl: string | null;
  login: (values: {
    email?: string;
    password?: string;
    rememberMe: boolean;
    captcha?: string;
  }) => Promise<string | null>;
};

const Login = ({ isAuth, login, captchaUrl }: PropsType) => {
  return isAuth ? (
    <Navigate to={"/profile/me"} />
  ) : (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.logo}>
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="logo"
          />
          <h1 className={classes.header}>3RACHA</h1>
        </div>
        <LoginForm login={login} captchaUrl={captchaUrl} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
  };
};

export default connect(mapStateToProps, { login })(Login);

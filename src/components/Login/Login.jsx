import React from "react";
import classes from "./Login.module.css";
import RememberIcon from "./RememberIcon";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reduser";
import { Input } from "../common/FormsControls/FormsControls";
import {
  composeValidators,
  maxLength,
  required,
} from "../../utils/validators/validators";
import { Navigate } from "react-router-dom";
import { FORM_ERROR } from "final-form";

const Login = ({ isAuth, login }) => {
  return isAuth ? (
    <Navigate to={"/profile"} />
  ) : (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.logo}>
          <img
            src="https://i6.imageban.ru/out/2024/04/17/e6ef60ba95ab712c75a6294e3551c00a.png"
            alt="logo"
          />
          <h1 className={classes.header}>3RACHA</h1>
        </div>
        <LoginForm login={login} />
      </div>
    </div>
  );
};

const LoginForm = ({ login }) => {
  return (
    <Form
      onSubmit={async (values) => {
        let errorMessage = await login(values);
        if (errorMessage) {
          return { [FORM_ERROR]: errorMessage };
        }
      }}
      initialValues={{ rememberMe: false }}
      render={({ submitError, handleSubmit, values, submitting, pristine }) => (
        <form onSubmit={handleSubmit} action="" className={classes.form}>
          <div className={classes.msgInf}>
            To view this page, you need to go to the website.
          </div>
          <div className={classes.inputWrapper}>
            <Field
              name="email"
              component={Input}
              type="text"
              placeholder={"Email"}
              validate={composeValidators(required, maxLength(30))}
              autoComplete="username"
              className={classes.inputText}
            />
          </div>
          <div className={classes.inputWrapper}>
            <Field
              name="password"
              component={Input}
              type="password"
              placeholder={"Password"}
              validate={composeValidators(required, maxLength(30))}
              autoComplete="current-password"
              className={classes.inputText}
            />
          </div>
          <div className={classes.checkboxArea}>
            <label>
              <Field
                name="rememberMe"
                component={Input}
                type="checkbox"
                className={classes.inputcheck}
              />
              <span>Remember me</span>
            </label>
            <div className={classes.rememberDescr}>
              <RememberIcon />
            </div>
            <div className={classes.descr}>
              <h3>Save Login Select</h3>
              <span>
                to save your account details for quick login on this device
              </span>
            </div>
          </div>
          <div className={classes.btn}>
            <button
              type="submit"
              disabled={submitting || pristine}
              className={classes.btn}
            >
              Sing in
            </button>
          </div>
          <div className={classes.line}></div>
          {submitError && (
            <div className={classes.submitError}>{submitError}</div>
          )}
        </form>
      )}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { login })(Login);

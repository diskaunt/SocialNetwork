import { FORM_ERROR } from "final-form";
import React from "react";
import classes from "./Login.module.css";
import { Field, Form } from "react-final-form";
import { Input } from "../common/FormsControls/FormsControls";
import {
  composeValidators,
  maxLength,
  required,
} from "../../utils/validators/validators";
import IconRemember from "../../assets/svg/IconRemember";
import Button from "../common/Button/Button";

type PropsType = {
  login: (values: {
    email?: string;
    password?: string;
    rememberMe: boolean;
    captcha?: string;
  }) => Promise<string | null>;
  captchaUrl: string | null;
};

type Values = {
  email?: string;
  password?: string;
  rememberMe: boolean;
  captcha?: string;
};

const LoginForm = ({ login, captchaUrl }: PropsType) => {
  return (
    <Form
      onSubmit={async (values: Values) => {
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
              <IconRemember />
            </div>
            <div className={classes.descr}>
              <h3>Save Login Select</h3>
              <span>
                to save your account details for quick login on this device
              </span>
            </div>
          </div>
          {captchaUrl ? (
            <div className={classes.inputWrapper}>
              <div className={classes.captcha}>
                <img src={captchaUrl} alt="captcha" />
              </div>
              <Field
                name="captcha"
                component={Input}
                type="text"
                placeholder={"Symbols from image"}
                // validate={composeValidators(required, maxLength(10))}
                className={classes.inputText}
              />
            </div>
          ) : null}
          <div className={classes.btnWrapper}>
            <Button disabled={submitting || pristine} type={"submit"}>
              Sing in
            </Button>
          </div>
          <div className={classes.line}></div>
          {Boolean(submitError) && (
            <div className={classes.submitError}>{submitError}</div>
          )}
        </form>
      )}
    />
  );
};

export default LoginForm;

import * as React from "react";
import classes from "./Button.module.css";

type PropsType = {
  children: React.ReactNode;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  handler?: () => void;
};

const Button = ({ children, disabled, type, handler }: PropsType) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={classes.btn}
      onClick={handler}
    >
      {children}
    </button>
  );
};

export default Button;

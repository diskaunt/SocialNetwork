import React from "react";
import classes from "./FormsControls.module.css";

export const Textarea = ({ input, meta: { error, touched }, ...props }) => {
  const hasError = error && touched;
  return (
    <div
      className={
        classes.textareaWrapper + " " + (hasError ? classes.error : "")
      }
    >
      <textarea {...input} {...props} />
      <span className={classes.errorText}>{hasError ? error : ""}</span>
    </div>
  );
};

export const Input = ({
  input,
  meta: { error, submitError, touched },
  ...props
}) => {
  const hasError = (error || submitError) && touched;
  return (
    <div className={hasError ? classes.error : ""}>
      <input {...input} {...props} />
      <span className={classes.errorText}>
        {hasError ? error || submitError : ""}
      </span>
    </div>
  );
};

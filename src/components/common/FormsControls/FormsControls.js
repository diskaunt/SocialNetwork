import React from "react";
import classes from "./FormsControls.module.css";
export const Textarea = ({ input, meta, ...props }) => {
  return (
    <div
      className={
        classes.textareaWrapper +
        " " +
        (meta.error && meta.touched ? classes.error : "")
      }
    >
      <textarea {...input} {...props} />
      <span className={classes.errorText}>
        {meta.error && meta.touched ? meta.error : ""}
      </span>
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  return (
    <div className={meta.error && meta.touched ? classes.error : ""}>
      <input {...input} {...props} />
      <span className={classes.errorText}>
        {(meta.error || meta.submitError) && meta.touched ? meta.error || meta.submitError : ""}
      </span>
    </div>
  );
};

import React from "react";
import classes from "./FormsControls.module.css";
import { FieldInputProps, FieldMetaState } from "react-final-form";

export const Textarea = ({
  input,
  meta: { error, touched },
  ...props
}: {
  input: FieldInputProps<string>;
  meta: FieldMetaState<string>;
}) => {
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
}: {
  input: FieldInputProps<string>;
  meta: FieldMetaState<string>;
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

// export const ReactSelectAdapter = ({ input, ...rest }) => (
//   <Select
//     {...input}
//     {...rest}
//     classNames={{
//       control: (state) =>
//         state.isFocused
//           ? classes.selectFocus + " " + classes.select
//           : classes.select,
//     }}
//   />
// );

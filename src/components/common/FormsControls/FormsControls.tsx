import React, { useEffect, useRef } from "react";
import classes from "./FormsControls.module.css";
import { FieldInputProps, FieldMetaState } from "react-final-form";
import { useResizeTextarea } from "../../../hooks/hooks";

type FormControls = {
  input: FieldInputProps<string>;
  meta: FieldMetaState<string>;
	validlength?: number;
	entertern?: boolean;
};

export const Textarea = ({
  input,
  meta: { error, touched },
  ...props
}: FormControls) => {
  const field = useRef<HTMLTextAreaElement>(null);

	useResizeTextarea(field.current, props.validlength, props.entertern)

  const hasError = error && touched;

  return (
    <>
      <div className={hasError ? classes.error : classes.field}>
        <textarea ref={field} {...input} {...props} />
      </div>
      <span className={classes.errorText}>{hasError ? error : null}</span>
    </>
  );
};

export const Input = ({
  input,
  meta: { error, submitError, touched },
  ...props
}: FormControls) => {
  const hasError = (error || submitError) && touched;
  return (
    <>
      <div className={hasError ? classes.error : classes.field}>
        <input {...input} {...props} />
      </div>
      <span className={classes.errorText}>
        {hasError ? error || submitError : null}
      </span>
    </>
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

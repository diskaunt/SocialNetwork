import React, { useEffect } from "react";
import { Field, Form } from "react-final-form";
import Button from "../common/Button/Button";
import classes from "./Dialogs.module.css";
import { Textarea } from "../common/FormsControls/FormsControls";
import {
  composeValidators,
  maxLength,
  required,
} from "../../utils/validators/validators";

type PropsType = {
  onSubmit: (valuse:{newMessageBody: string}) => void;
};

const NewMessageForm = ({ onSubmit }: PropsType) => {
  useEffect(() => {
    // textarea.style.height = "auto";
    // if (textarea.clientHeight < 54) {
    //   textarea.style.height = 36 + "px";
    // }
    // if (textarea.scrollHeight > 201) {
    //   textarea.style.overflow = "auto";
    //   textarea.style.height = 201 + "px";
    // } else {
    //   textarea.style.overflow = "hidden";
    //   textarea.style.height = textarea.scrollHeight + "px";
    // }
  }, []);
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{}}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} className={classes.newMessageForm}>
          <Field
            name="newMessageBody"
            component={Textarea}
            validate={composeValidators(required, maxLength(100))}
            type="text"
            placeholder="Write a message..."
            className={classes.newMessageFild}
          />
          <div className={classes.btnWrapper}>
            <Button type="submit" disabled={submitting || pristine}>
              Send
            </Button>
          </div>
        </form>
      )}
    />
  );
};

export default NewMessageForm;

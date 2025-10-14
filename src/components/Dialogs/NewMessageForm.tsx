import React from "react";
import { Field, Form } from "react-final-form";
import Button from "../common/button/Button";
import classes from "./dialogs.module.css";
import { Textarea } from "../common/formsControls/FormsControls";

type PropsType = {
  onSendMessage: (
    values: { newMessageBody: string },
    form: Record<string, any>
  ) => void;
};

const NewMessageForm = ({ onSendMessage }: PropsType) => {
  return (
    <Form
      onSubmit={onSendMessage}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} className={classes.newMessageForm}>
          <Field<string>
            name="newMessageBody"
            component={Textarea}
            // validate={composeValidators(maxLength(1000))}
            placeholder="Write a message..."
            type="text"
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

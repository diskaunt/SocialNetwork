import * as React from "react";
import { Field, Form } from "react-final-form";
import { Textarea } from "../../common/FormsControls/FormsControls";
import {
  composeValidators,
  maxLength,
  required,
} from "../../../utils/validators/validators";
import classes from "./AddNewPostForm.module.css";
import Button from "../../common/Button/Button";

type PropsType = {
  onSubmit: (value: { newPostText: string }) => void;
};

const AddNewPostForm = ({ onSubmit }: PropsType) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
        <div className={classes.formItem}>
          <Field
            name="newPostText"
            component={Textarea}
            placeholder="What's new for you?"
            type="text"
            validate={composeValidators(required, maxLength(100))}
            className={classes.newPostTextarea}
          />
        </div>
        <div className={classes.btnWrapper}>
          <Button type="submit" disabled={pristine}>
            Add post
          </Button>
        </div>
      </form>
    )}
  />
);

export default AddNewPostForm;

import * as React from "react";
import { Field, Form } from "react-final-form";
import { Textarea } from "../../common/formsControls/FormsControls";
import classes from "./addNewPostForm.module.css";
import Button from "../../common/button/Button";

type PropsType = {
  onAddPost: (values: { newPostText: string }, form: Record<string, any>) => void;
};

const AddNewPostForm = ({ onAddPost }: PropsType) => {
  return (
    <Form
      onSubmit={onAddPost}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div className={classes.formItem}>
            <Field<string>
              name="newPostText"
              component={Textarea}
              // validate={composeValidators(maxLength(300))}
              placeholder="What's new for you?"
              type="text"
              className={classes.newPostTextarea}
            />
          </div>
          <div className={classes.btnWrapper}>
            <Button type="submit" disabled={pristine || submitting}>
              Add post
            </Button>
          </div>
        </form>
      )}
    />
  );
};

export default AddNewPostForm;

import * as React from "react";
import { Fragment } from "react";
import IconClose from "../../../../../assets/svg/IconClose";
import classes from "./UpdateProfileInfo.module.css";
import { Field, Form } from "react-final-form";
import {
  Input,
  Textarea,
} from "../../../../common/FormsControls/FormsControls";
import { FORM_ERROR } from "final-form";
import Button from "../../../../common/Button/Button";
import { ContactsType, ProfileType } from "../../../../../types/types";

type PropsType = {
	onModalClose: () => void;
  onSaveProfile: (values: ProfileType) => Promise<string | null> | null;
  fullName?: string | null;
  aboutMe?: string | null;
  contacts?: ContactsType;
  lookingForAJob?: boolean;
  lookingForAJobDescription?: string | null;
}

const UpdateProfileInfo = ({
  onModalClose,
  onSaveProfile,
  fullName,
  aboutMe,
  contacts,
  lookingForAJob,
  lookingForAJobDescription,
}: PropsType) => {
  return (
    <>
      <Form
        onSubmit={async (values: ProfileType) => {
          const error = await onSaveProfile(values);
          if (error) {
            return { [FORM_ERROR]: error };
          }
        }}
        initialValues={
          {fullName,
          aboutMe,
          contacts,
          lookingForAJob,
          lookingForAJobDescription}
        }
        render={({
          submitError,
          handleSubmit,
          values,
          submitting,
          pristine,
        }) => (
          <form onSubmit={handleSubmit} className={classes.form}>
            <h3 className={classes.header}>Edit Info</h3>
            <div className={classes.item}>
              <label className={classes.label}>FullName:</label>
              <Field
                name="fullName"
                component={Input}
                type="text"
                placeholder="fullName"
                className={classes.inputText}
              />
            </div>
            <div className={classes.item}>
              <label className={classes.label}>About me:</label>
              <Field
                name="aboutMe"
                component={Textarea}
                type="text"
                placeholder="About me"
                className={classes.textareaText}
              />
            </div>
            <div className={classes.item}>
              <label className={classes.label}>Contacts: </label>
              <div className={classes.contacts}>
                {contacts && Object.keys(contacts).map((contact, i) => {
                  return (
                    <Fragment key={i}>
                      <label className={classes.label}>{contact}: </label>
                      <Field
                        name={"contacts." + contact}
                        component={Input}
                        type="text"
                        placeholder={contact + ".com"}
                        className={classes.inputText}
                      />
                    </Fragment>
                  );
                })}
              </div>
            </div>
            <div className={classes.item}>
              <label className={classes.label}>Looking for a job: </label>
              <Field
                name="lookingForAJob"
                component="select"
                className={classes.select}
              >
                <option>not selected</option>
                <option value={"true"}>yes</option>
                <option value={"false"}>no</option>
              </Field>
              {/* <Field
                name="lookingForAJob"
                component={ReactSelectAdapter}
                className={classes.select}
                options={[
                  { label: "not selected", value: null },
                  { label: "yes", value: true },
                  { label: "no", value: false },
                ]}
              /> */}
              {String(values.lookingForAJob) === "true" ? (
                <>
                  <label className={classes.label}>Skills:</label>
                  <Field
                    name="lookingForAJobDescription"
                    component={Textarea}
                    type="textarea"
                    placeholder="My professional skills"
                    className={classes.textareaText}
                  />
                </>
              ) : null}
            </div>
            <div className={classes.submitBtnWrapper}>
              <Button type="submit"> Save changes</Button>
            </div>
            <span className={classes.error}>{submitError}</span>
          </form>
        )}
      />
      <button onClick={onModalClose} className={classes.closeWrapper}>
        <div className={classes.close}>
          <IconClose />
        </div>
      </button>
    </>
  );
};

export default UpdateProfileInfo;

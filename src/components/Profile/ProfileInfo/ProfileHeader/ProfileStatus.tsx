import * as React from "react";
import { useState, useRef, memo } from "react";
import classes from "./profileStatus.module.css";
import Button from "../../../common/button/Button";
import { useClickOutside } from "../../../../hooks/hooks";
import { Field, Form } from "react-final-form";
import { Textarea } from "../../../common/formsControls/FormsControls";
import {
  composeValidators,
  maxLength,
} from "../../../../utils/validators/validators";

type PropsType = {
  status: string;
  isOwner?: boolean;
  updateUserStatus?: (newStatus: string) => void;
};

const ProfileStatus = ({ status, updateUserStatus, isOwner }: PropsType) => {
  const [editMode, setEditMode] = useState(false);
  const statusFormRef = useRef(null);

  useClickOutside(statusFormRef, null, () => setEditMode(false));

  return (
    <div className={classes.statusField}>
      {isOwner ? (
        <>
          <div
            ref={statusFormRef}
            className={
              editMode
                ? classes.statusFildActive
                : classes.statusFildActive + " " + classes.disable
            }
          >
            <Form
              onSubmit={(values) => {
                values.status !== status && updateUserStatus && updateUserStatus(values.status);
                setEditMode(!editMode);
              }}
              initialValues={{ status: status }}
              render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values,
              }) => (
                <form onSubmit={handleSubmit} className={classes.statusForm}>
                  <Field
                    name="status"
                    component={Textarea}
                    validate={composeValidators( maxLength(300))}
                    type="text"
                    placeholder="Write a status..."
                    className={classes.statusFild}
										maxLength={305}
										validlength={300}
										entertern={"true"}
                  />
                  <div className={classes.btnWrapper}>
                    <Button type="submit" disabled={submitting || pristine}>
                      Accept
                    </Button>
                  </div>
                  <div className={classes.btnWrapper}>
                    <Button
                      type={"button"}
                      disabled={!editMode}
                      handler={() => setEditMode(!editMode)}
                    >
                      Close
                    </Button>
                  </div>
                </form>
              )}
            />
          </div>
          <div className={classes.statusFildStatic}>
            <span onDoubleClick={() => setEditMode(!editMode)}>
              {status || "Изменить статус..."}
            </span>
          </div>
        </>
      ) : (
        <div className={classes.statusFildStatic}>
          <span>{status || " "}</span>
        </div>
      )}
    </div>
  );
};

export default memo(ProfileStatus);

import * as React from "react";
import { useState, useRef, useEffect, memo, ChangeEvent } from "react";
import classes from "./ProfileStatus.module.css";
import Button from "../../../common/Button/Button";
import { useClickOutside } from "../../../../hooks/hooks";

type PropsType = {
  status: string;
  isOwner: boolean;
  updateUserStatus: (newStatus: string) => void;
};

const ProfileStatus = ({ status, updateUserStatus, isOwner }: PropsType) => {
  const [editMode, setEditMode] = useState(false);
  const [newStatus, setStatus] = useState<string>(status);
  const statusFildRef = useRef(null);

  const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };

  useEffect(() => {
    setStatus(status);
  }, [status]);

  useClickOutside(statusFildRef, null, () => setEditMode(false));

  return (
    <div className={classes.statusField}>
      {isOwner ? (
        <>
          <div
            ref={statusFildRef}
            className={
              editMode
                ? classes.statusFildActive
                : classes.statusFildActive + " " + classes.disable
            }
          >
            <input
              disabled={!editMode}
              onChange={onStatusChanged}
              autoFocus={true}
              value={newStatus}
            />
            <div className={classes.btnWrapper}>
              <Button
                type={"button"}
                disabled={!editMode}
                handler={() => {
                  newStatus !== status && updateUserStatus(newStatus);
                  setEditMode(!editMode);
                }}
              >
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

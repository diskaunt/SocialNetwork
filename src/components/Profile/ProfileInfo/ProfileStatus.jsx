import React, { useEffect, useState } from "react";
import classes from "./ProfileInfo.module.css";

const ProfileStatus = (props) => {
  const [editMode, setIsEdit] = useState(false);
  const [statusValue, setStatusValue] = useState(props.status);

	useEffect(() => {
		setStatusValue(props.status)
	},[editMode])

  return (
    <div className={classes.statusField}>
      {editMode ? (
        <div className={classes.statusFildActive}>
          <input
            onChange={(event) => setStatusValue(event.target.value)}
            // onBlur={(event) => setIsEdit(!editMode)}
            autoFocus={true}
            value={statusValue}
          />
          <button
            onClick={() => {
              props.updateUserStatus(statusValue);
              setIsEdit(!editMode);
            }}
          >
            Accept
          </button>
          <button onClick={() => setIsEdit(!editMode)}>Close</button>
        </div>
      ) : (
        <div className={classes.statusFildStatic}>
          <span onDoubleClick={() => setIsEdit(!editMode)}>
            {props.status || "Изменить статус..."}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;

import React, { memo, useEffect, useState } from "react";
import classes from "./Info.module.css";

const ProfileStatus = ({ status, updateUserStatus, isOwner }) => {
  const [editMode, setEditMode] = useState(false);
  const [newStatus, setStatus] = useState(status);

  useEffect(() => {
    setStatus(status);
  }, [status]);

  return (
    <div className={classes.statusField}>
      {isOwner ? (
        editMode ? (
          <div className={classes.statusFildActive}>
            <input
              onChange={(event) => setStatus(event.target.value)}
              // onBlur={(event) => setEditMode(!editMode)}
              autoFocus={true}
              value={newStatus}
            />
            <button
              onClick={() => {
                updateUserStatus(newStatus);
                setEditMode(!editMode);
              }}
            >
              Accept
            </button>
            <button onClick={() => setEditMode(!editMode)}>Close</button>
          </div>
        ) : (
          <div className={classes.statusFildStatic}>
            <span onDoubleClick={() => setEditMode(!editMode)}>
              {status || "Изменить статус..."}
            </span>
          </div>
        )
      ) : (
        <div className={classes.statusFildStatic}>
          <span>{status || " "}</span>
        </div>
      )}
    </div>
  );
};

export default memo(ProfileStatus);

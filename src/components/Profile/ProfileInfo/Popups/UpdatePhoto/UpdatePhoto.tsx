import React, { ChangeEvent, useCallback, useRef, useState } from "react";
import IconClose from "../../../../../assets/svg/IconClose";
import IconUpload from "../../../../../assets/svg/IconUpload";
import classes from "./UpdatePhoto.module.css";

type PropsType = {
  onModalClose: () => void;
  savePhoto: (file: File) => Promise<any>;
};

const UpdatePhoto = ({ onModalClose, savePhoto }: PropsType) => {
  const dragAndDropZoneRef = useRef(null);
  const setFocus = useCallback((element: HTMLInputElement) => {
    element && element.focus();
  }, []);
  const [errorMessage, setErrorMessage] = useState(null);
  const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File = (e.target.files as FileList)[0];
    Boolean(file) &&
      savePhoto(file).then((data) => {
        if (data.length === 0) {
					setErrorMessage(null)
          onModalClose();
        } else {
          setErrorMessage(data[0]);
        }
      });
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.header}>Uploading a new photo</div>
        <div className={classes.main}>
          <div
            ref={dragAndDropZoneRef}
            className={classes.dragAndDropUploadZone}
          >
            <div className={classes.iconUploadWrapper}>
              <IconUpload />
            </div>
            <div className={classes.inputWrapper}>
              <div className={classes.text}>Move the photo here or</div>
              <input
                ref={setFocus}
                id="avatarInput"
                name="avatar"
                accept="image/*"
                type="file"
                className={classes.input}
                onChange={onPhotoSelected}
              />
              <label className={classes.label} htmlFor="avatarInput">
                select a file
              </label>
            </div>
            <div
              className={
                errorMessage
                  ? classes.error
                  : classes.error + " " + classes.invisible
              }
            >
              {errorMessage}!
            </div>
          </div>
        </div>
        <div id="hint" className={classes.footer}>
          If you are having problems uploading, try choosing a smaller photo.
        </div>
      </div>
      <button onClick={onModalClose} className={classes.closeWrapper}>
        <div className={classes.close}>
          <IconClose />
        </div>
      </button>
    </>
  );
};

export default UpdatePhoto;

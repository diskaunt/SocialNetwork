import React, { forwardRef, useEffect, useRef } from "react";
import IconClose from "../../../assets/svg/IconClose";
import IconUpload from "../../../assets/svg/IconUpload";
import classes from "./ModalUpdatePhoto.module.css";

const ModalUpdatePhoto = forwardRef(function ModalUpdatePhoto({
  updatePhotoRef,
  onModalUpdatePhotoClose,
	savePhoto,
}) {
	const dragAndDropZoneRef = useRef(null)
	const onPhotoSelected = (e) => {
		e.target.files.length && savePhoto(e.target.files[0]);
		onModalUpdatePhotoClose();
	}
  return (
    <dialog ref={updatePhotoRef} className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.header}>Uploading a new photo</div>
        <div className={classes.main}>
          <div ref={dragAndDropZoneRef} className={classes.dragAndDropUploadZone}>
            <div className={classes.iconUploadWrapper}>
              <IconUpload />
            </div>
            <div className={classes.inputWrapper}>
              <div className={classes.text}>Move the photo here or</div>
              <input
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
          </div>
        </div>
        <div id="hint" className={classes.footer}>
          If you are having problems uploading, try choosing a smaller photo.
        </div>
      </div>
      <button
        onClick={onModalUpdatePhotoClose}
        className={classes.closeWrapper}
      >
        <div className={classes.close}>
          <IconClose />
        </div>
      </button>
    </dialog>
  );
});

export default ModalUpdatePhoto;

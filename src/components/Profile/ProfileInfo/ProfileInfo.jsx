import React, { memo, useRef, useState } from "react";
import classes from "./ProfileInfo.module.css";
import useMouseOverLeaveDebounce from "../../../hooks/useMouseOverLeaveDebaunce";
import MenuBlock from "./MenuBlock";
import ModalUpdatePhoto from "./ModalUpdatePhoto";
import useCloseOnBackModalClick from "../../../hooks/useCloseOnBackModalClick";
import Info from "./Info/Info";

const ProfileInfo = ({
  profile,
  savePhoto,
  status,
  updateUserStatus,
  isOwner,
}) => {
  const [isMouseOver, setMouseOver] = useState(null);
  const menuRef = useRef(null);
  const updatePhotoRef = useRef(null);
  const onModalUpdatePhotoOpen = () => {
    updatePhotoRef.current.showModal();
    document.body.style.overflowY = "hidden";
  };
  const onModalUpdatePhotoClose = () => {
    updatePhotoRef.current.close();
    document.body.style.overflowY = "auto";
  };
  useMouseOverLeaveDebounce(menuRef, setMouseOver, 200);
  useCloseOnBackModalClick(updatePhotoRef, onModalUpdatePhotoClose);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.avatar} ref={menuRef}>
          <div className={classes.imgWrapper}>
            <img
              src={profile.photos.large || "http://dummyimage.com/140"}
              alt="avatar"
            />
          </div>
          <div
            className={
              isMouseOver
                ? classes.menuBlockWrapper + " " + classes.optionsActive
                : classes.menuBlockWrapper
            }
          >
            <MenuBlock
              updatePhotoRef={updatePhotoRef}
              onModalUpdatePhotoOpen={onModalUpdatePhotoOpen}
              isOwner={isOwner}
            />
          </div>
        </div>
        <div className={classes.info}>
          <Info profile={profile} status={status} updateUserStatus={updateUserStatus} />
        </div>
      </div>
      <ModalUpdatePhoto
        updatePhotoRef={updatePhotoRef}
        onModalUpdatePhotoClose={onModalUpdatePhotoClose}
        savePhoto={savePhoto}
      />
    </>
  );
};

export default memo(ProfileInfo);

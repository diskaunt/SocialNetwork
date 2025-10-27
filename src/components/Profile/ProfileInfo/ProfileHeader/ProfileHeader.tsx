import * as React from "react";
import classes from "./profileHeader.module.css";
import { useRef, useState } from "react";
import { useMouseOverLeaveDebounce } from "../../../../hooks/hooks";
import ProfileStatus from "./ProfileStatus";
import MenuBlock from "./menuBlock/MenuBlock";
import { PhotosType } from "../../../../types/types";

type PropsType = {
  photos?: PhotosType;
  isOwner: boolean;
  fullName?: string;
  status: string;
  updateUserStatus: (value: string) => void;
  savePhoto: (file: File) => void;
  onModalOpen: (type: string) => void;
};

const ProfileHeader = ({
	photos,
  isOwner,
  fullName,
  status,
  savePhoto,
  onModalOpen,
  updateUserStatus,
}: PropsType) => {
  const menuRef = useRef(null);
  const [isMouseOver, setMouseOver] = useState(false);

  useMouseOverLeaveDebounce(menuRef, setMouseOver, 200);

  return (
    <>
      <div className={classes.avatar} ref={menuRef}>
        <div className={classes.imgWrapper}>
          <img src={(photos && photos.large) || "http://dummyimage.com/140"} alt="avatar" />
        </div>
        <div
          className={
            isMouseOver
              ? classes.menuBlockWrapper + " " + classes.optionsActive
              : classes.menuBlockWrapper
          }
        >
          <MenuBlock
            onModalOpen={onModalOpen}
            isOwner={isOwner}
            savePhoto={savePhoto}
          />
        </div>
      </div>
      <div className={classes.main}>
        <div className={classes.fullName}>{fullName}</div>
        {isOwner ? (
          <button
            data-modal="editProfile"
            className={classes.editBtn}
            onClick={(e) => e.currentTarget.dataset.modal && onModalOpen(e.currentTarget.dataset.modal)}
          >
            Edit a profile
          </button>
        ) : null}
        <div className={classes.status}>
          <ProfileStatus
            isOwner={isOwner}
            status={status}
            updateUserStatus={updateUserStatus}
          />
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;

import * as React from "react";
import classes from "./MenuBlock.module.css";
import IconPicture from "../../../../../assets/svg/IconPicture";
import IconPencil from "../../../../../assets/svg/IconPencil";
import IconDelete from "../../../../../assets/svg/IconDelete";

type PropsType = {
  isOwner: boolean;
  onModalOpen: (type: string) => void;
  savePhoto: (file: File) => void;
};

const MenuBlock = ({ isOwner, onModalOpen, savePhoto }: PropsType) => {
  const onPhotoDeleted = () => {
    // savePhoto(null);
  }; // it is not provided by the server side, null is processed and returns an error
  return (
    <div className={classes.menuBlock}>
      <div
        onClick={(e) => {
          console.log(e.target);
        }}
        className={classes.menuItem}
      >
        <span className={classes.icon}>
          <IconPicture />
        </span>
        <span>Open a photo</span>
      </div>
      {isOwner ? (
        <>
          <div
            data-modal="updateThePhoto"
            onClick={(e) =>
              e.currentTarget.dataset.modal &&
              onModalOpen(e.currentTarget.dataset.modal)
            }
            className={classes.menuItem}
          >
            <span className={classes.icon}>
              <IconPencil />
            </span>
            <span>Update the photo</span>
          </div>
          <div onClick={onPhotoDeleted} className={classes.menuItem}>
            <span className={classes.icon}>
              <IconDelete />
            </span>
            <span>Delete a photo</span>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default MenuBlock;

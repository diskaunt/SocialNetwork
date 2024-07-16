import React from "react";
import classes from "./MenuBlock.module.css";
import IconPicture from "../../../assets/svg/IconPicture";
import IconPencil from "../../../assets/svg/IconPencil";
import IconDelete from "../../../assets/svg/IconDelete";

const MenuBlock = ({ isOwner, onModalUpdatePhotoOpen }) => {
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
          <div onClick={onModalUpdatePhotoOpen} className={classes.menuItem}>
            <span className={classes.icon}>
              <IconPencil />
            </span>
            <span className={classes.menuText}>Update the photo</span>
          </div>
          <div
            onClick={(e) => {
              console.log(e.target);
            }}
            className={classes.menuItem}
          >
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

import React, { memo, useRef, useState } from "react";
import classes from "./Post.module.css";
import IconLike from "./svg/iconLike";
import OptionPostIcon from "./svg/OptionPostIcon";
import useMouseLeaveOutside from "../../../../hooks/useMouseLeaveOutside";

const Post = ({ src, name, date, deletePost, id, message, likesCount }) => {
  const [isOptionsSelect, setOptionsSelect] = useState(false);
  let optionsRef = useRef(null);
  useMouseLeaveOutside(optionsRef, () => setOptionsSelect(false), 500);
  return (
    <>
      <div className={classes.imgWrapper}>
        <img src={src} alt="avatar" />
      </div>
      <div className={classes.name}>
        <div>{name}</div>
        <div className={classes.date}>{date}</div>
      </div>
      <div
        ref={optionsRef}
        onMouseOver={() => setOptionsSelect(true)}
        className={
          isOptionsSelect
            ? classes.options + " " + classes.optionsActive
            : classes.options
        }
      >
        <OptionPostIcon />
        <div className={classes.menuBlock}>
          <div onClick={() => deletePost(id)} className={classes.menuItem}>
            Delete an entry
          </div>
        </div>
      </div>
      <div className={classes.wallPost}>{message}</div>
      <div className={classes.postBtn}>
        <IconLike className={classes.svg} />
        <span className={classes.likesCount}>{likesCount}</span>
      </div>
    </>
  );
};

export default memo(Post);

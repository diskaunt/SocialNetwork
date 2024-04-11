import React from "react";
import classes from "./Post.module.css";
import IconLike from "./svg/iconLike";

const Post = (props) => {
  return (
    <div className={classes.posts}>
      <div className={classes.item}>
        <div className={classes.imgWrapper}>
          <img src={props.src} alt="avatar" />
        </div>
        <div className={classes.name}>
          <div>{props.name}</div>
          <div className={classes.date}>{props.date}</div>
        </div>
        <div className={classes.wallPost}>{props.message}</div>
        <div className={classes.postBtn}>
          <IconLike className={classes.svg}/>
          <span className={classes.likesCount}>{props.likesCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;

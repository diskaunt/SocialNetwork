import React from "react";
import classes from "./Post.module.css";
import IconLike from "./svg/iconLike";

const Post = (props) => {
	return (
    <div className={classes.posts}>
      <div className={classes.item}>
        <div className={classes.imgWrapper}>
          <img
            src={props.src}
            alt="avatar"
          />
        </div>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.wallPost}>{props.message}</div>
        <div className={classes.postBtn}>
          <IconLike />
          <span>{props.likesCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Post;
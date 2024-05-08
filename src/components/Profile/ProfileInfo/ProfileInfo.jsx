import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={classes.profile}>
      <div className={classes.overPageCover}>
        <img
          src={
            props.src
              ? props.src
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png"
          }
          alt="Seul"
        />
      </div>
      <div className={classes.profileHeader}>
        <div className={classes.profileHeaderImg}>
          <div className={classes.wrapperImg}>
            <img
              src= {props.src || "https://i5.imageban.ru/out/2024/04/23/1bb19e775b66a89851ce626a69603c73.png"}
              alt="avatar"
            />
          </div>
        </div>
        <div className={classes.profileInfo}>
          <div className={classes.name}>Name</div>
          <div className={classes.age}>Age</div>
          <div className={classes.city}>City</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

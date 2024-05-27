import React from "react";
import classes from "./User.module.css";
import { Link } from "react-router-dom";

let User = (props) => {
  return (
    <div className={classes.user} key={props.u.id}>
      <div className={classes.avatar}>
        <Link to={"/profile/" + props.u.id}>
          <img
            src={
              props.u.photos.small || "https://i4.imageban.ru/out/2024/05/22/5fcfc3ee519160aab17e3a871818a423.jpeg"
            }
            alt=""
          />
        </Link>
      </div>
      <div className={classes.content}>
        <div className={classes.name}>
          <Link to={"/profile/" + props.u.id}>{props.u.name}</Link>
        </div>
        <div className={classes.location}>
          {/* {props.u.location.country || "country"} */}
          {/* {props.u.location.city || "city"} */}
        </div>
        <div className={classes.status}>{props.u.status}</div>
        <div className={classes.btn}>
          {props.u.followed ? (
            <button
              disabled={props.followingInProgress.some((id) => id === props.u.id)}
              onClick={() => {
                props.unfollow(props.u.id)
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.followingInProgress.some((id) => id === props.u.id)}
              onClick={() => {
                props.follow(props.u.id)
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;

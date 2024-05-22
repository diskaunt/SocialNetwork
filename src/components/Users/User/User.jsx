import React from "react";
import classes from "./User.module.css";
import { Link } from "react-router-dom";
import { followApi } from "../../../api/api";

let User = (props) => {
  return (
    <div className={classes.user} key={props.u.id}>
      <div className={classes.avatar}>
        <Link to={"/profile/" + props.u.id}>
          <img
            src={
              props.u.photos.small
                ? props.u.photos.small
                : "https://i5.imageban.ru/out/2024/04/23/1bb19e775b66a89851ce626a69603c73.png"
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
                props.toggleFollowingProgress(props.u.id, true);
                followApi.delete(props.u.id).then((response) => {
                  if (!response.resultCode) {
                    props.follow(props.u.id);
                  }
                  props.toggleFollowingProgress(props.u.id, false);
                });
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.followingInProgress.some((id) => id === props.u.id)}
              onClick={() => {
                props.toggleFollowingProgress(props.u.id, true);
                followApi.follow(props.u.id).then((response) => {
                  if (!response.resultCode) {
                    props.follow(props.u.id);
                  }
                  props.toggleFollowingProgress(props.u.id, false);
                });
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

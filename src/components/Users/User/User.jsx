import React from "react";
import classes from "./User.module.css";
import { Link } from "react-router-dom";
import FollowIcon from "./follow";
import Unfollow from "./unfollow";

let User = (props) => {
  return (
    <div className={classes.user} key={props.u.id}>
      <div className={classes.avatar}>
        <Link to={"/profile/" + props.u.id}>
          <img
            src={
              props.u.photos.large || "http://dummyimage.com/205"
            }
            alt=""
          />
        </Link>
      </div>
      <div className={classes.content}>
        <div className={classes.name}>
          <Link to={"/profile/" + props.u.id}>{props.u.name}</Link>
        </div>
        {/* <div className={classes.location}>
        </div> */}
        <div className={classes.status}>{props.u.status}</div>
        <div className={classes.btn}>
          {props.u.followed ? (
            <button
              disabled={props.followingInProgress.some((id) => id === props.u.id)}
              onClick={() => {
                props.unfollow(props.u.id)
              }}
            >
              <Unfollow />
            </button>
          ) : (
            <button
              disabled={props.followingInProgress.some((id) => id === props.u.id)}
              onClick={() => {
                props.follow(props.u.id)
              }}
            >
              <FollowIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;

import React from "react";
import classes from "./User.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

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
              onClick={() => {
                axios
                  .delete(
                    "https://social-network.samuraijs.com/api/1.0/follow/" +
                      props.u.id,
                    {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "bfaf3a0b-5031-4e47-b170-c742ccf66d46",
                      },
                    }
                  )
                  .then((response) => {
                    if (!response.data.resultCode) {
                      props.follow(props.u.id);
                    }
                  });
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              onClick={() => {
                axios
                  .post(
                    "https://social-network.samuraijs.com/api/1.0/follow/" +
                      props.u.id,
                    {},
                    {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "bfaf3a0b-5031-4e47-b170-c742ccf66d46",
                      },
                    }
                  )
                  .then((response) => {
                    if (!response.data.resultCode) {
                      props.follow(props.u.id);
                    }
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

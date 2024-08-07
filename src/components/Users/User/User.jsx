import React from "react";
import classes from "./User.module.css";
import { Link } from "react-router-dom";
import IconFollow from "../../../assets/svg/IconFollow";
import IconUnfollow from "../../../assets/svg/IconUnfollow";
import { statusSlicer } from "../../../utils/object-helper";

let User = ({
  user: { id, name, status, followed, photos },
  followingInProgress,
  follow,
  unfollow,
}) => {
  let newStatus = statusSlicer(status, 27);

  return (
    <div className={classes.userContainer}>
      <div className={classes.avatar}>
        <Link to={"/profile/" + id}>
          <img
            src={photos.large ? photos.large : "http://dummyimage.com/205"}
            alt=""
          />
        </Link>
      </div>
      <div className={classes.content}>
        <div className={classes.name}>
          <Link to={"/profile/" + id}>{name}</Link>
        </div>
        <div className={classes.status}>{newStatus}</div>
        <div className={classes.btn}>
          {followed ? (
            <button
              disabled={followingInProgress.some((i) => i === id)}
              onClick={() => {
                unfollow(id);
              }}
            >
              <IconUnfollow />
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((i) => i === id)}
              onClick={() => {
                follow(id);
              }}
            >
              <IconFollow />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;

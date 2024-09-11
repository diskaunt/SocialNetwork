import * as React from "react";
import classes from "./User.module.css";
import { Link } from "react-router-dom";
import IconFollow from "../../../assets/svg/IconFollow";
import IconUnfollow from "../../../assets/svg/IconUnfollow";
import { textSlicer } from "../../../utils/object-helper";
import { UsersType } from "../../../types/types";

type PropsType = {
  user: UsersType;
  followingInProgress: Array<number>;
  follow: (id: number) => void;
  unfollow: (id: number) => void;
};

let User = ({
  user: { id, name, status, followed, photos },
  followingInProgress,
  follow,
  unfollow,
}: PropsType) => {
  let newStatus: string | null = textSlicer(status, 19);

  return (
    <div className={classes.userContainer}>
      <div className={classes.avatar}>
        <Link to={"/profile/" + id}>
          <img
            src={photos.large ? photos.large : "http://dummyimage.com/160"}
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

import React from "react";
import classes from "./User.module.css"

let User = (props) => {
	return (
		<div className={classes.user} key={props.u.id}>
          <div className={classes.avatar}>
            <img
              src={
                props.u.photos.small
                  ? props.u.photos.small
                  : "https://i5.imageban.ru/out/2024/04/23/1bb19e775b66a89851ce626a69603c73.png"
              }
              alt=""
            />
          </div>
          <div className={classes.content}>
            <div className={classes.name}>{props.u.name}</div>
            <div className={classes.location}>
              {/* {props.u.location.country || "country"} */}
              {/* {props.u.location.city || "city"} */}
            </div>
            <div className={classes.status}>{props.u.status}</div>
            <div className={classes.btn}>
              <button onClick={() => props.follow(props.u.id)}>
                {props.u.followed ? "Unfollow" : "Follow"}
              </button>
            </div>
          </div>
        </div>
	)
}

export default User
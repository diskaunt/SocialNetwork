import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
	return (
    <div className={classes.profile}>
      <div className={classes.overPageCover}>
        <img
          src="https://www.svoiludi.ru/images/tb/3998/seul-1687959208276_w687h357.jpg"
          alt="Seul"
        />
      </div>
      <div className={classes.profileHeader}>
        <div className={classes.profileHeaderImg}>
          <div className={classes.wrapperImg}>
            <img
              src="https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg"
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
}

export default ProfileInfo;
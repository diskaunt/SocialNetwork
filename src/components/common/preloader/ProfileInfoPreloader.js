import React from "react";
import classes from "./ProfileInfoPreloader.module.css";
const ProfileInfoPreloader = () => {
  return (
    <>
      <div className={classes.profileHeader}>
        <div className={classes.profileHeaderImg}>
          <div className={classes.wrapperImg}>
            <img src={""} alt="" />
          </div>
        </div>
        <div className={classes.profileInfo}>
          <div className={classes.fullName + " " + classes.preload}>
            Ivan Ivanov
          </div>
          <div className={classes.statusField}>
            <div className={classes.statusFildStatic}>
              <span className={classes.preload}>каждого из них вы с легкостью сможете найти в интернете. Мы будем отслеживат Мы будем отслеживат</span>
							<span className={classes.preload}> Мы будем отслеживать только з них.Мы будем отслеживат</span>
            </div>
          </div>
          <div className={classes.infoSection}>
            <div className={classes.infoHeadline}>About me:</div>
            <span className={classes.preload}>каждого из них вы с легкостью сможете найти в интернете. Мы будем отслеживат Мы будем отслеживат</span>
						<span className={classes.preload}> Мы будем отслеживать только з них.Мы будем отслеживат.Мы будем отслеживат Мы будем отслеживат</span>
						<span className={classes.preload}>каждого из них вы с легкостью сможете найти в интернете. Мы будем отслеживат Мы будем отслеживат</span>
						<span className={classes.preload}> Мы будем отслеживать только з них.Мы будем отслеживатМы будем отслеживат</span>
          </div>
          <div className={classes.infoSection}>
            <div className={classes.infoHeadline}>Contact information:</div>
            <span className={classes.preload}>каждого из них вы с легкостью сможете найти </span>
          </div>
          <div className={classes.infoSection}>
            <div className={classes.infoHeadline}>Job information:</div>
            <span className={classes.preload}>каждого из них вы с легкостью сможете найти </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInfoPreloader;

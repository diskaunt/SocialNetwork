import React from 'react';
import classes from './circlePreloader.module.css';

let CirclePreloader = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes['loader-box']}>
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
        </div>
        <h2 className={classes['loader-title']}>Loading...</h2>
      </div>
    </>
  );
};

export default CirclePreloader;

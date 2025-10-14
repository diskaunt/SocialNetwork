import React from 'react';
import classes from './preloader.module.css';
import IconPreloader from '../../../icon/icons/Preloader';

let Preloader = () => {
  return (
    <div className={classes.item}>
      <IconPreloader />
    </div>
  );
};

export default Preloader;

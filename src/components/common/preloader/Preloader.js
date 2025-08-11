import React from 'react';
import classes from './Preloader.module.css';
import IconPreloader from '../../../assets/svg/IconPreloader';

let Preloader = (props) => {
  return (
    <div className={classes.item}>
      <IconPreloader />
    </div>
  );
};

export default Preloader;

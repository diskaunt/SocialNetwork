import React from 'react';
import classes from './MenuButton.module.css';
import IconArrowTop from '../../../assets/svg/IconArrowTop';

type PropsType = {
  avatar: string | null;
  onSwitch: (arg: boolean) => void;
  menuBlockСondition: boolean;
};

const MenuButton = ({ avatar, onSwitch, menuBlockСondition }: PropsType) => {
  return (
    <button onClick={() => onSwitch(!menuBlockСondition)}>
      <div className={classes.avatarWrapper}>
        <img alt='avatar' src={avatar || 'http://dummyimage.com/32'}></img>
      </div>
      <IconArrowTop />
    </button>
  );
};

export default MenuButton;

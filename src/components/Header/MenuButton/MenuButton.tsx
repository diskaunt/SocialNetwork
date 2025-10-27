import React from 'react';
import classes from './menuButton.module.css';
import Icon from '../../icon/Icon';

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
      <Icon name='arrowTop' />
    </button>
  );
};

export default MenuButton;

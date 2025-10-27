import * as React from 'react';
import classes from './navbar.module.css';
import { NavLink } from 'react-router-dom';
import Icon from '../../icon/Icon';

const Navbar = () => {
  return (
    <nav className={classes.SideBar}>
      <ul>
        <li className={classes.item}>
          <NavLink
            to='/profile/me'
            className={({ isActive }) => (isActive ? classes.active : '')}
          >
            <Icon name='profile' />
            <span>Profile</span>
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to='/dialogs/0'
            className={({ isActive }) => (isActive ? classes.active : '')}
          >
            <Icon name='message' />
            <span>Dialogs</span>
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to='/friends'
            className={({ isActive }) => (isActive ? classes.active : '')}
          >
            <Icon name='users' />
            <span>Friends</span>
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to='/news'
            className={({ isActive }) => (isActive ? classes.active : '')}
          >
            <Icon name='news' />
            <span>News</span>
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to='/music'
            className={({ isActive }) => (isActive ? classes.active : '')}
          >
            <Icon name='music' />
            <span>Music</span>
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to='/settings'
            className={({ isActive }) => (isActive ? classes.active : '')}
          >
            <Icon name='setting' />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

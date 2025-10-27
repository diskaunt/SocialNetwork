import React, { memo, useRef, useState } from 'react';
import classes from './post.module.css';
import Icon from '../../../icon/Icon';
import { useMouseOverLeaveDebounce } from '../../../../hooks/hooks';
import { PostType } from '../../../../types/types';

type PropsType = {
  photo: string;
  deletePost: (id: number) => void;
} & PostType;

const Post = ({
  photo,
  name,
  date,
  deletePost,
  id,
  message,
  likesCount,
}: PropsType) => {
  const [isOptionsSelect, setOptionsSelect] = useState(false);
  let optionsRef = useRef(null);
  useMouseOverLeaveDebounce(optionsRef, setOptionsSelect, 200);
  return (
    <>
      <div className={classes.imgWrapper}>
        <img src={photo} alt='avatar' />
      </div>
      <div className={classes.name}>
        <div>{name}</div>
        <div className={classes.date}>{date}</div>
      </div>
      <div
        ref={optionsRef}
        className={
          isOptionsSelect
            ? classes.options + ' ' + classes.optionsActive
            : classes.options
        }
      >
        <Icon name='optionPost' />
        <div className={classes.menuBlockWrapper}>
          <MenuBlock deletePost={deletePost} id={id} />
        </div>
      </div>
      <div className={classes.wallPost}>{message}</div>
      <div className={classes.postBtn}>
        <Icon name='like' />
        <span className={classes.likesCount}>{likesCount}</span>
      </div>
    </>
  );
};

const MenuBlock = ({
  deletePost,
  id,
}: {
  deletePost: (id: number) => void;
  id: number;
}) => {
  return (
    <div className={classes.menuBlock}>
      <div onClick={() => deletePost(id)} className={classes.menuItem}>
        Delete an entry
      </div>
    </div>
  );
};

export default memo(Post);

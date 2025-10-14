import * as React from 'react';
import classes from './menuBlock.module.css';
import Icon from '../../../../icon/Icon';

type PropsType = {
  isOwner: boolean;
  onModalOpen: (type: string) => void;
  savePhoto: (file: File) => void;
};

const MenuBlock = ({ isOwner, onModalOpen, savePhoto }: PropsType) => {
  const onPhotoDeleted = () => {
    // savePhoto(null);
  }; // it is not provided by the server side, null is processed and returns an error
  return (
    <div className={classes.menuBlock}>
      <div
        onClick={(e) => {
          console.log(e.target);
        }}
        className={classes.menuItem}
      >
        <span className={classes.icon}>
          <Icon name={'IconPicture'} />
        </span>
        <span>Open a photo</span>
      </div>
      {isOwner ? (
        <>
          <div
            data-modal='updateThePhoto'
            onClick={(e) =>
              e.currentTarget.dataset.modal &&
              onModalOpen(e.currentTarget.dataset.modal)
            }
            className={classes.menuItem}
          >
            <span className={classes.icon}>
              <Icon name='pencil' />
            </span>
            <span>Update the photo</span>
          </div>
          <div onClick={onPhotoDeleted} className={classes.menuItem}>
            <span className={classes.icon}>
              <Icon name='delete' />
            </span>
            <span>Delete a photo</span>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default MenuBlock;

import * as React from 'react';
import { memo, useRef, useState } from 'react';
import classes from './profileInfo.module.css';
import { useCloseOnBackModalClick } from '../../../hooks/hooks';
import Friends from './friends/Friends';
import Popup from './popups/Popup';
import Info from './info/Info';
import HeaderProfile from './profileHeader/ProfileHeader';
import { ProfileType, UsersType } from '../../../types/types';

type PropsType = {
  profile: ProfileType;
  users: Array<UsersType>;
  status: string;
  isOwner: boolean;
  totalUsersCount: number;
  savePhoto: (file: File) => Promise<any>;
  updateUserStatus: (status: string) => void;
  saveProfile: (info: ProfileType) => Promise<string | null>;
};

const ProfileInfo = React.memo(
  ({
    profile: {
      fullName,
      aboutMe,
      contacts,
      lookingForAJob,
      lookingForAJobDescription,
      photos,
    },
    totalUsersCount,
    users,
    status,
    isOwner,
    savePhoto,
    updateUserStatus,
    saveProfile,
  }: PropsType) => {
    const [typeOfModalRef, setOfModalRef] = useState<string | null>(null);
    const modalRef = useRef<HTMLDialogElement | null>(null);
    const onModalOpen = (type: string) => {
      if (modalRef.current) {
        modalRef.current.showModal();
        setOfModalRef(type);
        document.body.style.overflowY = 'hidden';
      }
    };
    const onModalClose = () => {
      if (modalRef.current) {
        modalRef.current.close();
        document.body.style.overflowY = 'auto';
      }
    };
    const onSaveProfile = (values: ProfileType) => {
      const errorMessage = saveProfile(values);
      if (errorMessage) {
        return errorMessage;
      } else {
        onModalClose();
        return null;
      }
    };
    useCloseOnBackModalClick(modalRef, onModalClose);

    return (
      <>
        <div className={classes.container}>
          <div className={classes.header}>
            <HeaderProfile
              onModalOpen={onModalOpen}
              photos={photos}
              isOwner={isOwner}
              savePhoto={savePhoto}
              fullName={fullName}
              status={status}
              updateUserStatus={updateUserStatus}
            />
          </div>
          <div className={classes.info}>
            <Info
              aboutMe={aboutMe}
              contacts={contacts}
              lookingForAJob={lookingForAJob}
              lookingForAJobDescription={lookingForAJobDescription}
            />
          </div>
          {isOwner ? (
            <div className={classes.friends}>
              <Friends users={users} totalUsersCount={totalUsersCount} />
            </div>
          ) : null}
        </div>
        <dialog ref={modalRef} className={classes.popup}>
          <Popup
            fullName={fullName}
            aboutMe={aboutMe}
            contacts={contacts}
            lookingForAJob={lookingForAJob}
            lookingForAJobDescription={lookingForAJobDescription}
            onSaveProfile={onSaveProfile}
            onModalClose={onModalClose}
            savePhoto={savePhoto}
            typeOfModalRef={typeOfModalRef}
          />
        </dialog>
      </>
    );
  }
);

export default memo(ProfileInfo);

import * as React from "react";
import UpdatePhoto from "./UpdatePhoto/UpdatePhoto";
import UpdateProfileInfo from "./UpdateProfileInfo/UpdateProfileInfo";
import { ContactsType, ProfileType } from "../../../../types/types";

type PropsType = {
	onModalClose: () => void;
	savePhoto: (file: File) => Promise<any>;
  typeOfModalRef: string | null;
  onSaveProfile: (values: ProfileType) => Promise<string | null> | null;
	fullName?: string | null;
	aboutMe?: string | null;
  contacts?: ContactsType;
	lookingForAJob?: boolean;
	lookingForAJobDescription?: string | null;
}

const Popup = ({
  onModalClose,
  savePhoto,
  typeOfModalRef,
  onSaveProfile,
	fullName,
	aboutMe,
  contacts,
	lookingForAJob,
	lookingForAJobDescription,
}: PropsType) => {
  switch (typeOfModalRef) {
    case "updateThePhoto":
      return (
        <>
          <UpdatePhoto onModalClose={onModalClose} savePhoto={savePhoto} />
        </>
      );

    case "editProfile":
      return (
        <>
          <UpdateProfileInfo
            onModalClose={onModalClose}
            onSaveProfile={onSaveProfile}
            fullName={fullName}
            aboutMe={aboutMe}
            contacts={contacts}
            lookingForAJob={lookingForAJob}
            lookingForAJobDescription={lookingForAJobDescription}
          />
        </>
      );
    default:
      return null;
  }
};

export default Popup;

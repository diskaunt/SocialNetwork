import { ContactsType, PhotosType, ProfileType } from "../types/types";
import { instance, APIResponse } from "./api";

export const profileAPI = {
  getProfile(userId: number | null) {
    return instance
      .get<GetProfile>("profile/" + userId)
      .then((response) => response.data);
  },

  getStatus(userId: number | null) {
    return instance
      .get<string>("profile/status/" + userId)
      .then((response) => response.data);
  },

  updateStatus(status: string) {
    return instance
      .put<APIResponse<UpdateStatus>>("profile/status", { status: status })
      .then((response) => response.data);
  },

  updateProfile(info: ProfileType) {
    return instance
      .put<APIResponse>("profile/", info)
      .then((response) => response.data);
  },

  savePhoto(photoFile: File) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance
      .put<APIResponse<SavePhoto>>("profile/photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => response.data);
  },
};

type GetProfile = {
  aboutMe: string | null;
  contacts: ContactsType;
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  fullName: string;
  userId: number;
  photos: PhotosType;
};

type UpdateStatus = {
  data: string;
};

type SavePhoto = {
  photos: PhotosType;
};

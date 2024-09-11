import { Field } from "react-final-form";
import { RootState } from "../redux/redux-store";
import { UsersType } from "../types/types";

export const updateObjectInArray = (
  items: Array<UsersType>,
  objectName: string,
  payload: any
) => {
  let { userId: itemId, newObjectProps } = payload;
  return items.map((item) => {
    if (item[objectName] === itemId) {
      return { ...item, ...newObjectProps };
    } else return item;
  });
};

export const textSlicer = (text: string | null, maxLength: number) => {
  return text && text.length > maxLength
    ? text.slice(0, maxLength).trim() + "..."
    : text;
};

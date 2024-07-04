import { Field } from "react-final-form";

export const updateObjectInArray = (
  items,
  objectName,
  itemId,
  newObjectProps
) => {
  return items.map((item) => {
    if (item[objectName] === itemId) {
      return { ...item, ...newObjectProps };
    } else return item;
  });
};

export const statusSlicer = (userStatus, num) => {
	return userStatus && userStatus.length >= num ? userStatus.slice(0, num).trim() + "..." : userStatus;
}
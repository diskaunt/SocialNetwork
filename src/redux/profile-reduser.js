import { createSlice } from "@reduxjs/toolkit";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
  posts: [
    {
      id: "0",
      name: "name",
      likesCount: "16",
      src: "https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg",
      message:
        "Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi",
    },
    {
      id: "1",
      name: "name",
      likesCount: "32",
      src: "https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg",
      message: "I love Bananas ",
    },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost;
      let date = new Date();
      if (state.newPostText.trim().length) {
        newPost = {
          id: state.posts.length,
          name: "",
          date:
            ["0" + date.getDay(), "0" + (date.getMonth() + 1)]
              .map((component) => component.slice(-2))
              .join(".") +
            "." +
            date.getFullYear(),
          message: state.newPostText,
          likesCount: 0,
        };
        return { ...state, posts: [...state.posts, newPost], newPostText: "" };
      }
      return {...state};

    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };
    default:
      return { ...state };
  }
};

export const addPostActionCreator = (textarea) => ({
  type: ADD_POST,
  textarea,
});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;

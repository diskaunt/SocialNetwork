import React, { useState } from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reduser";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={props.store.getState().profilePage.posts}
    />
  );
};

export default MyPostsContainer;

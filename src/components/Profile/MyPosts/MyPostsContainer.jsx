import React, { useState } from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reduser";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        const onPostChange = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };

        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={store.getState().profilePage.posts}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;

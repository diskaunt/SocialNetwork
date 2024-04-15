import React, { useState } from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post
      key={post.id}
      name={post.name || "name"}
      date={post.date || "date"}
      likesCount={post.likesCount}
      src={
        post.src ||
        "https://avatars.mds.yandex.net/i?id=91892a34e5229181f6a458b4befb7c883c863201-11944133-images-thumbs&n=13"
      }
      message={post.message}
    />
  ));

  let newPostElement = React.createRef();

  const onAddPost = () => {
    let text = newPostElement.current;
    props.addPost();
    text.innerText = "";
  };

  const onPostChange = () => {
    let text = newPostElement.current.innerText;
    props.updateNewPostText(text);
  };

  return (
    <div className={classes.Myposts}>
      <div className={classes.newPost}>
        <h3 className={classes.header}>My posts</h3>
        <div className={classes.textareaWrapper}>
          <div
            className={classes.textarea}
            ref={newPostElement}
            onKeyUp={onPostChange}
            contenteditable="true"
            role="textbox"
            aria-labelledby="post"
            aria-multiline="true"
            aria-placeholder="What's new for you?"
          ></div>
        </div>
        <div className={classes.btnWrapper}>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

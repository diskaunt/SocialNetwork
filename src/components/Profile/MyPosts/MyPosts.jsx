import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  autoSizeActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reduser";

const MyPosts = (props) => {
  let postsElements = props.profilePage.posts.map((post) => (
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

  const autoSize = () => {
    const textarea = newPostElement.current;
    props.dispatch(autoSizeActionCreator(textarea));
  };

  const addPost = () => {
    const textarea = newPostElement.current;
    props.dispatch(addPostActionCreator(textarea));
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={classes.Myposts}>
      <div className={classes.newPost}>
        <h3 className={classes.header}>My posts</h3>
        <div className={classes.textareaWrapper}>
          <textarea
            ref={newPostElement}
            onInput={autoSize}
            onChange={onPostChange}
            placeholder="What's new for you?"
            value={props.profilePage.newPostText}
          />
        </div>
        <div className={classes.btnWrapper}>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

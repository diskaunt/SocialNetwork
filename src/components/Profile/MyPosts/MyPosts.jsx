import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.profilePage.posts.map((post) => (
    <Post
      key={post.id}
      name={post.name || "name"}
      date={post.date || "date"}
      likesCount={post.likesCount}
      src={
        post.src ||
        "https://i5.imageban.ru/out/2024/04/23/1bb19e775b66a89851ce626a69603c73.png"
      }
      message={post.message}
    />
  ));

  let newPostElement = React.createRef();
  let placeholder = React.createRef();

  const onAddPost = () => {
    let text = newPostElement.current;
    props.addPost();
    text.innerText = "";
    placeholder.current.style.display = "block";
  };

  const onPlaceholder = () => {
    let text = newPostElement.current.innerText;
    text
      ? (placeholder.current.style.display = "none")
      : (placeholder.current.style.display = "block");
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
            id="postField"
            className={classes.textarea}
            ref={newPostElement}
            onInput={onPlaceholder}
            onKeyUp={onPostChange}
            contentEditable="true"
            role="textbox"
            aria-multiline="true"
            aria-label="What's new for you?"
          ></div>
          <div ref={placeholder} className={classes.placeholder}>
            <div className={classes.phInput}>
              <label htmlFor="postField" className={classes.phContent}>
                What's new for you?
              </label>
            </div>
          </div>
        </div>
        <div className={classes.btnWrapper}>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div
        className={postsElements.length ? classes.posts : "display: none"}
      >
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;

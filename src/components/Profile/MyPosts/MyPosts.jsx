import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

	let postsElements = props.posts.map(post => <Post key={post.id} name={post.name} likesCount={post.likesCount} src={post.src} message={post.message} />)

	return (
    <div className={classes.Myposts}>
      <h3 className={classes.header}>My posts</h3>
      <div className={classes.newPost}>
        <div>
          <textarea
            onInput={(e) => {
              autosize(e.target);
            }}
            placeholder="What's new for you?"
          />
        </div>
        <div className={classes.btnWrapper}>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
}

function autosize(textarea){
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}

export default MyPosts
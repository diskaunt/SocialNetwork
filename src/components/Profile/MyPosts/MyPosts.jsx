import React, { memo } from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, Form } from "react-final-form";
import {
  composeValidators,
  maxLength,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import IconNoPosts from "../../../assets/svg/IconNoPosts";


const MyPosts = ({posts, deletePost, profile, addPost}) => {
  let postsElements = [...posts].reverse().map((post) => (
    <div key={post.id} className={classes.post}>
      <Post
        id={post.id}
        name={post.name || "name"}
        date={post.date || "date"}
        likesCount={post.likesCount}
        src={
          post.src ||
          "https://i4.imageban.ru/out/2024/05/22/5fcfc3ee519160aab17e3a871818a423.jpeg"
        }
        message={post.message}
        deletePost={deletePost}
      />
    </div>
  ));

  const onAddPost = async (value) => {
    await addPost(value.newPostText, profile.fullName);
    value.newPostText = "";
  };

  return (
    <div className={classes.myPostsContainer}>
      <div className={classes.newPost}>
        <h3 className={classes.header}>My posts</h3>
        <AddNewPostForm onSubmit={onAddPost} />
      </div>
      <div className={classes.posts}>
        {posts.length ? (
          postsElements
        ) : (
          <div className={classes.noPosts}>
            <IconNoPosts />
            <div>There is not a single entry on the wall yet</div>
          </div>
        )}
      </div>
    </div>
  );
};

const AddNewPostForm = ({onSubmit}) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, value }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="newPostText"
            component={Textarea}
            placeholder="What's new for you?"
            type="text"
            validate={composeValidators(required, maxLength(100))}
          />
          <div className={classes.btnWrapper}>
            <button type="submit" disabled={form.error || pristine}>
              Add post
            </button>
          </div>
        </form>
      )}
    />
  );
};

export default memo(MyPosts);

import React, { useEffect, useRef } from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, Form } from "react-final-form";
import {
  composeValidators,
  maxLength,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post
      key={post.id}
      name={post.name || "name"}
      date={post.date || "date"}
      likesCount={post.likesCount}
      src={
        post.src ||
        "https://i4.imageban.ru/out/2024/05/22/5fcfc3ee519160aab17e3a871818a423.jpeg"
      }
      message={post.message}
    />
  ));
  const scrollTo = useRef(undefined);

  const onSubmit = async (value) => {
    await props.addPost(value.newPostText);
    scrollTo.current.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <div className={classes.Myposts}>
      <div className={classes.newPost}>
        <h3 className={classes.header}>My posts</h3>
        <AddNewPostForm onSubmit={onSubmit} />
      </div>
      <div className={postsElements.length ? classes.posts : "display: none"}>
        {postsElements}
			<div className={classes.scrollTo} ref={scrollTo}></div>
      </div>
    </div>
  );
};

const AddNewPostForm = (props) => {
  return (
    <Form
      onSubmit={props.onSubmit}
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

export default MyPosts;

import React from "react";
import { memo } from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import IconNoPosts from "../../../assets/svg/IconNoPosts";
import AddNewPostForm from "./AddNewPostForm";
import { PostType, ProfileType } from "../../../types/types";

type PropsType = {
  posts: Array<PostType>;
  profile: ProfileType | null;
  deletePost: (value: number) => void;
  addPost: (payload: {newPostText: string, fullName: string}) => void;
};

const MyPosts = ({ posts, deletePost, profile, addPost }: PropsType) => {
  let postsElements = [...posts].reverse().map((post) => (
    <div key={post.id} className={classes.post}>
      <Post
        id={post.id}
        name={post.name || "name"}
        date={post.date || "date"}
        likesCount={post.likesCount}
        message={post.message}
        photo={(profile?.photos && profile.photos.small) || "http://dummyimage.com/50"}
        deletePost={deletePost}
      />
    </div>
  ));

  const onAddPost = async (value: { newPostText: string }) => {
    profile?.fullName &&
      (await addPost({
        newPostText: value.newPostText,
        fullName: profile.fullName,
      }));
    value.newPostText = "";
  };

  return (
    <div className={classes.container}>
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

export default memo(MyPosts);

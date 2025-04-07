import React from "react";
import PostItem from "./post-item";
import classes from "./post-grid.module.css";

const PostGrid = (props) => {
  const posts = props.posts;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </ul>
  );
};

export default PostGrid;

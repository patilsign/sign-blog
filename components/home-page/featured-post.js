import React from "react";
import classes from "./featured-post.module.css";
import PostGrid from "../posts/post-grid";

const FeaturedPosts = (props) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
};

export default FeaturedPosts;

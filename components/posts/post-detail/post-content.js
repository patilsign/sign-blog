import React from "react";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";

export const PostContent = (props) => {
  const { excerpt, image, slug, title, date } = props.posts;

  const formattedDate = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className={classes.content}>
      <PostHeader image={image} title={title} slug={slug} />
      <div>
        <time>{formattedDate}</time>
        <p>{excerpt}</p>
      </div>
    </article>
  );
};

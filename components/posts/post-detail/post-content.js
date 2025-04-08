import React from "react";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";

export const PostContent = (props) => {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const formattedDate = new Date(post.date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className={classes.content}>
      <PostHeader
        title={post.title}
        imagePath={imagePath}
        date={formattedDate}
      />
      <div>
        <time>{formattedDate}</time>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
};

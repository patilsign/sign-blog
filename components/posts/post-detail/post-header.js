import Image from "next/image";
import React from "react";
import classes from "./post-header.module.css";

const PostHeader = (props) => {
  console.log(props, "post header");
  const { title, image, slug } = props;
  console.log(title, image, slug, "post header");
  const imagePath = `/images/posts/${slug}/${image}`;
  console.log("Post Header", imagePath);
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={imagePath} alt="blog details" width={200} height={150} />
    </header>
  );
};

export default PostHeader;

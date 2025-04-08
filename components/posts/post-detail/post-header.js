import Image from "next/image";
import React from "react";
import classes from "./post-header.module.css";

const PostHeader = (props) => {
  const { title, imagePath, date } = props;
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <time>{date}</time>
      <Image src={imagePath} alt="NextJs Blog Post" width={200} height={150} />
    </header>
  );
};

export default PostHeader;

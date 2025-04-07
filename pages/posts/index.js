import React from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/utils";

const AllPostsPage = () => {
  const _posts = getAllPosts();
  return <AllPosts posts={_posts} />;
};

export default AllPostsPage;

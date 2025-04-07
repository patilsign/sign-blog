import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-post";
import Hero from "../components/home-page/hero";
import { getAllPosts } from "../lib/utils";

export default function Home() {
  const _posts = getAllPosts();
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={_posts} />
    </Fragment>
  );
}

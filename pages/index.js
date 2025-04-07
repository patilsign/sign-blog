import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-post";
import Hero from "../components/home-page/hero";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  );
}

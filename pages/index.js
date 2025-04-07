import { Fragment } from "react";
import Banner from "../components/home-page/banner";
import FeaturedPosts from "../components/home-page/featured-post";

export default function Home() {
  return (
    <Fragment>
      <Banner />
      <FeaturedPosts />
    </Fragment>
  );
}

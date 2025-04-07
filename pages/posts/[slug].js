import React from "react";
import { PostContent } from "../../components/posts/post-detail/post-content";
import { getAllPosts, getPostBySlug } from "../../lib/utils";
import { useRouter } from "next/router";

const PostDetailPage = () => {
  const router = useRouter();
  const slugId = router.query.slug;
  const posts = getPostBySlug(slugId)[0];
  return (
    <section>
      <PostContent posts={posts} />
    </section>
  );
};

export default PostDetailPage;

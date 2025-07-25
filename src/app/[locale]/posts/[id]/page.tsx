import { getPosts, getSinglePost } from "@/lib/api";
import PostDetailsClient from "./PostDetails.client";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

const PostDetails = async ({ params }: Props) => {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["post", id],
    queryFn: () => getSinglePost(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostDetailsClient />
    </HydrationBoundary>
  );
};

export default PostDetails;

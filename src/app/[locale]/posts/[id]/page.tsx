import { getPosts, getSinglePost } from "@/lib/api";
import PostDetailsClient from "./PostDetails.client";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Metadata } from "next";

const BASE_URL =
  "https://mini-blog-test-task-ko6d9tx0a-tomas-zingis-projects.vercel.app";

export const metadata: Metadata = {
  title: "Mini Blog - Post",
  description:
    "Explore a specific post on Mini Blog, a simple and efficient application designed for managing personal notes and posts.",
  openGraph: {
    title: "Mini Blog - Post",
    description:
      "Explore a specific post on Mini Blog, a simple and efficient application designed for managing personal notes and posts.",
    url: BASE_URL,
    siteName: "Mini Blog",
    images: [
      {
        url: `${BASE_URL}/SeoImage.png`,
        width: 1200,
        height: 630,
        alt: "Mini Blog App image",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

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

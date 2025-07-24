"use client";

import Loading from "@/app/loading";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import { getSinglePost } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import css from "./PostDetailsClient.module.css";

const PostDetailsClient = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: post,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["post", id],
    queryFn: () => getSinglePost(id),
    refetchOnMount: false,
  });

  if (isLoading) return <Loading />;

  if (error)
    return (
      <ErrorMessage
        message={"Unable to fetch post"}
        onRetry={() => refetch()}
      />
    );

  if (!post) return <ErrorMessage message={"Post not found"} />;

  return (
    <div className="container">
      <div className={css.wrapper}>
        <h1 className={css.title}>Post Details</h1>
        <h2 className={css.subtitle}>{post.title}</h2>
        <p className={css.body}>{post.body}</p>
      </div>
    </div>
  );
};

export default PostDetailsClient;

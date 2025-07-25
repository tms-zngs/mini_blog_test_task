"use client";

import Loading from "@/src/app/[locale]/loading";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import { getSinglePost } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import css from "./PostDetailsClient.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUiStore } from "@/lib/store/LoadingStore";

const PostDetailsClient = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const setLoading = useUiStore((state) => state.setLoading);
  const setError = useUiStore((state) => state.setError);
  const errorMessage = useUiStore((state) => state.errorMessage);

  const {
    data: post,
    isLoading,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["post", id],
    queryFn: () => getSinglePost(id),
    refetchOnMount: false,
  });

  useEffect(() => {
    if (error) {
      setError("Unable to fetch post");
      setLoading(false);
    } else if (!isLoading && !isFetching) {
      setError(null);
      setLoading(false);
    }
  }, [error, isLoading, isFetching, setError, setLoading]);

  useEffect(() => {
    setLoading(isLoading || isFetching);
  }, [isLoading, isFetching, setLoading]);

  if (errorMessage)
    return (
      <ErrorMessage
        message={errorMessage}
        onRetry={() => refetch().then(() => undefined)}
      />
    );

  if (isLoading) return <Loading />;

  if (!post) return <ErrorMessage message="Post not found" />;

  return (
    <div className="container">
      <div className={css.wrapper}>
        <div className={css.headings}>
          <h1 className={css.title}>Post Details</h1>
          <button onClick={() => router.back()} className={css.backBtn}>
            Go Back
          </button>
        </div>
        <h2 className={css.subtitle}>{post.title}</h2>
        <p className={css.body}>{post.body}</p>
      </div>
    </div>
  );
};

export default PostDetailsClient;

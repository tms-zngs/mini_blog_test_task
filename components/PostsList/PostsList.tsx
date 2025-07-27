import { Post } from "@/types/post";
import PostItem from "../PostItem/PostItem";
import css from "./PostsList.module.css";
import { getLocale } from "next-intl/server";

type Props = {
  posts: Post[];
  openPostText: string;
};

const PostsList = async ({ posts, openPostText }: Props) => {
  const currentLocale = await getLocale();
  return (
    <ul className={css.list}>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          item={post}
          openPostText={openPostText}
          locale={currentLocale}
        />
      ))}
    </ul>
  );
};

export default PostsList;

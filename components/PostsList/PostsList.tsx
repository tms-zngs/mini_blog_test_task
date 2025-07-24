import { Post } from "@/types/post";
import PostItem from "../PostItem/PostItem";
import css from "./PostsList.module.css";

type Props = {
  posts: Post[];
};

const PostsList = ({ posts }: Props) => {
  return (
    <ul className={css.list}>
      {posts.map((post) => (
        <PostItem key={post.id} item={post} />
      ))}
    </ul>
  );
};

export default PostsList;

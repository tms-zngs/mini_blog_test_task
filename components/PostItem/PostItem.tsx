import { Post } from "@/types/post";
import Link from "next/link";
import css from "./PostItem.module.css";

type Props = {
  item: Post;
};

const PostItem = ({ item }: Props) => {
  return (
    <li className={css.item}>
      <h3 className={css.title} title={item.title}>
        {item.title}
      </h3>
      <Link href={`/posts/${item.id}`}>
        <button className={css.button} type="button">
          Open Post
        </button>
      </Link>
    </li>
  );
};

export default PostItem;

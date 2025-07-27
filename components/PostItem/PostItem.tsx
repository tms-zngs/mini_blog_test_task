import { Post } from "@/types/post";
import Link from "next/link";
import css from "./PostItem.module.css";

type Props = {
  item: Post;
  openPostText: string;
  locale: string;
};

const PostItem = ({ item, openPostText, locale }: Props) => {
  return (
    <li className={css.item}>
      <h3 className={css.title} title={item.title}>
        {item.title}
      </h3>
      <div className={css.btnMobileWrap}>
        <Link href={`/${locale}/posts/${item.id}`}>
          <button className={css.button} type="button">
            {openPostText}
          </button>
        </Link>
      </div>
    </li>
  );
};

export default PostItem;

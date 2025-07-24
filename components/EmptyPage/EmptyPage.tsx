import Link from "next/link";
import css from "./EmptyPage.module.css";

const EmptyPage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>404 - Page Not Found</h1>
      <p className={css.message}>
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>
      <div className={css.button}>
        <Link href="/">Go Home</Link>
      </div>
    </div>
  );
};

export default EmptyPage;

import Link from "next/link";
import css from "./Header.module.css";

type Props = {
  locale: "en" | "uk";
};

const Header = ({ locale }: Props) => {
  const otherLocale = locale === "en" ? "uk" : "en";

  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.headerContent}>
          <h2 className={css.title}>Mini Blog</h2>
          <nav>
            <ul className={css.navigation}>
              <li>
                <Link href={`/${locale}`}>Home</Link>
              </li>
              <li>
                <Link href={`/${locale}/about`}>About</Link>
              </li>
              <li className="locale">
                <Link href={`/${otherLocale}`}>{otherLocale}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

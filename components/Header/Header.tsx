"use client";

import Link from "next/link";
import css from "./Header.module.css";
import { useRouter, usePathname } from "next/navigation";

const locales = ["en", "uk"];

type Props = {
  currentLocale: string;
};

const Header = ({ currentLocale }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");

    router.push(newPath);
  };

  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.headerContent}>
          <h2 className={css.title}>Mini Blog</h2>
          <nav>
            <ul className={css.navigation}>
              <li>
                <Link href={`/${currentLocale}`}>Home</Link>
              </li>
              <li>
                <Link href={`/${currentLocale}/about`}>About</Link>
              </li>
              <li className="locale">
                {locales.map((locale) =>
                  locale !== currentLocale ? (
                    <button key={locale} onClick={() => switchLocale(locale)}>
                      {locale.toUpperCase()}
                    </button>
                  ) : null
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

"use client";

import Link from "next/link";
import css from "./Header.module.css";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const locales = ["en", "uk"];

type Props = {
  currentLocale: string;
};

const Header = ({ currentLocale }: Props) => {
  const t = useTranslations("Header");
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");

    router.replace(newPath);
  };

  const otherLocale =
    locales.find((locale) => locale !== currentLocale) ?? currentLocale;

  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.headerContent}>
          <nav className={css.nav}>
            <ul className={css.navigation}>
              <li>
                <Link href={`/${currentLocale}`} className={css.titleLink}>
                  Mini Blog
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}/about`}>{t("about")}</Link>
              </li>
            </ul>
          </nav>

          <div>
            <button
              className={css.localeButton}
              onClick={() => switchLocale(otherLocale)}
            >
              {otherLocale === "en" ? "Eng" : "Укр"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

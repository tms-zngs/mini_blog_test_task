"use client";

import Link from "next/link";
import { useRouter } from "next/router";

const locales = ["en", "uk"];

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, asPath } = router;

  return (
    <div>
      {locales.map((loc) => (
        <Link
          key={loc}
          href={asPath}
          locale={loc}
          style={{
            marginLeft: "1rem",
            fontWeight: loc === locale ? "bold" : "normal",
            textDecoration: loc === locale ? "underline" : "none",
            cursor: "pointer",
          }}
        >
          {loc.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}

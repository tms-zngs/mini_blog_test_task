import { routing } from "@/src/i18n/routing";
import { getTranslations } from "next-intl/server";
import css from "./About.module.css";
import { Metadata } from "next";

export const dynamic = "force-static";

const BASE_URL =
  "https://mini-blog-test-task-ko6d9tx0a-tomas-zingis-projects.vercel.app";

export const metadata: Metadata = {
  title: "Mini Blog - About Us",
  description:
    "Learn more about Mini Blog, a simple and efficient application designed for managing personal notes and posts. Discover our mission and values.",
  openGraph: {
    title: "Mini Blog - About Us",
    description:
      "Learn more about Mini Blog, a simple and efficient application designed for managing personal notes and posts. Discover our mission and values.",
    url: `${BASE_URL}/en/about`,
    siteName: "Mini Blog",
    images: [
      {
        url: `${BASE_URL}/SeoImage.png`,
        width: 1200,
        height: 630,
        alt: "Mini Blog App image - About Us",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};
export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const AboutPage = async () => {
  const t = await getTranslations("AboutPage");

  return (
    <div className="container">
      <div className={css.card}>
        <h1 className={css.title}>{t("title")}</h1>
        <p className={css.text}>{t("paragraph1")}</p>
        <p className={css.text}>{t("paragraph2")}</p>
        <p className={css.text}>{t("paragraph3")}</p>
      </div>
    </div>
  );
};

export default AboutPage;

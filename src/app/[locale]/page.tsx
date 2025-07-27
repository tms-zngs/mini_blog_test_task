import PostsList from "@/components/PostsList/PostsList";
import { getPosts } from "@/lib/api";
import { routing } from "@/src/i18n/routing";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

const BASE_URL =
  "https://mini-blog-test-task-ko6d9tx0a-tomas-zingis-projects.vercel.app";

export const metadata: Metadata = {
  title: "Mini Blog - Home",
  description:
    "Mini Blog is a simple and efficient application designed for managing personal notes and posts. Welcome to the homepage!",
  openGraph: {
    title: "Mini Blog - Homepage",
    description:
      "Mini Blog is a simple and efficient application designed for managing personal notes and posts. Welcome to the homepage!",
    url: BASE_URL,
    siteName: "Mini Blog",
    images: [
      {
        url: `${BASE_URL}/SeoImage.png`,
        width: 1200,
        height: 630,
        alt: "Mini Blog App image",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const Home = async () => {
  const posts = await getPosts();
  const t = await getTranslations("HomePage");
  return (
    <section className="container">
      <h1
        style={{
          marginBottom: "1rem",
          fontWeight: "600",
          fontSize: "2rem",
          color: "#3a3a3a",
        }}
      >
        {t("title")}
      </h1>
      {posts?.length > 0 ? (
        <PostsList posts={posts} openPostText={t("openPost")} />
      ) : (
        <p>{t("noPostsFound")}</p>
      )}
    </section>
  );
};

export default Home;

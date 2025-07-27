import PostsList from "@/components/PostsList/PostsList";
import { getPosts } from "@/lib/api";
import { routing } from "@/src/i18n/routing";
import { getTranslations } from "next-intl/server";

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

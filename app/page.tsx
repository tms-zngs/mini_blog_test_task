import PostsList from "@/components/PostsList/PostsList";
import { getPosts } from "@/lib/api";

const Home = async () => {
  const posts = await getPosts();

  return (
    <section style={{ padding: "1rem 1rem", maxWidth: 800, margin: "0 auto" }}>
      <h1 style={{ marginBottom: "1rem", fontWeight: "700", fontSize: "2rem" }}>
        Posts List
      </h1>
      {posts?.length > 0 ? <PostsList posts={posts} /> : <p>No posts found.</p>}
    </section>
  );
};

export default Home;

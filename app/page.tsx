import PostsList from "@/components/PostsList/PostsList";
import { getPosts } from "@/lib/api";

const Home = async () => {
  const posts = await getPosts();

  return (
    <section className="container">
      <h1
        style={{
          marginBottom: "1rem",
          fontWeight: "700",
          fontSize: "2rem",
          color: "#3a3a3a",
        }}
      >
        Posts List
      </h1>
      {posts?.length > 0 ? <PostsList posts={posts} /> : <p>No posts found.</p>}
    </section>
  );
};

export default Home;

import { useEffect, useState } from "react";

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        ); // mock REST API
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();
        setPosts(data.slice(0, 10)); // just first 10 posts
      } catch (err) {
        console.error(err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <section className="page page-posts">
      <h2 className="h4 mb-2">API Posts</h2>
      <p className="text-secondary mb-3">
        These posts are fetched from a public JSONPlaceholder API.
      </p>

      {loading && <p>Loading posts...</p>}

      {error && (
        <div className="alert alert-danger py-2" role="alert">
          {error}
        </div>
      )}

      {!loading && !error && (
        <div className="list-group">
          {posts.map((post) => (
            <article
              key={post.id}
              className="list-group-item bg-transparent border-secondary mb-2"
            >
              <h3 className="h6 mb-1">
                #{post.id} {post.title}
              </h3>
              <p className="mb-0 text-secondary">{post.body}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default PostsPage;

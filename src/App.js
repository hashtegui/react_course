import { Component } from "react";
import "./App.css";
import { PostCard } from "./components/PostCard";
import { loadPosts } from "./utils/load-posts";

class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos });
  }

  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <div className="posts">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              cover={post.cover}
              id={post.id}
              body={post.body}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default App;

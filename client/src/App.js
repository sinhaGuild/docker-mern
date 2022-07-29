import React, { useEffect, useState } from "react";
import "./App.css";
import "./darkly.css";

function App() {
  const [posts, setPosts] = useState([]);
  const postsEndpoint = "/api/posts";

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await fetch(postsEndpoint);
    const dataResponse = await response.json();
    const {
      data: { posts: _data },
    } = dataResponse;
    setPosts(_data);
  };

  return (
    <div className="container">
      <h1 className="mb-2 mt-2 display-1">All Posts in DataBase</h1>
      <div className="row-cols-3">
        {posts.map((post) => {
          return (
            <>
              <div className="card mt-2 mb-2 border-primary">
                <div className="card-header">
                  <h4>{post.title}</h4>
                </div>
                <div className="card-body">
                  <div className="card-text">
                    <p>{post.body}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;

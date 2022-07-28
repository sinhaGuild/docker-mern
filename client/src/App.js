import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./darkly.css";

function App() {
  const [posts, setPosts] = useState([]);
  const uri = "http://localhost:3050/api/posts";

  useEffect(() => {
    fetch(uri)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(
          `Data Fetch sucessful. Data: ${JSON.stringify(data, null, 2)}`
        );
        setPosts(data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>All Posts</h1>
      </header>
      <div className="posts-container">
        {posts.length > 0 &&
          posts.map((post) => {
            return (
              <>
                <pre>{JSON.stringify(post, null, 2)}</pre>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default App;

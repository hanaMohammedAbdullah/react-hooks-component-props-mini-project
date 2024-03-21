import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import ArticleList from "./ArticleList";
import About from "./About";

// console.log(blogData);

function App() {
  return (
    <div className='App'>
      <Header name={blogData.name} />
      <About
        image={blogData.image}
        name={blogData.name}
        about={blogData.about}
      />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;

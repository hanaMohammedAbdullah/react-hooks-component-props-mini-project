import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((data) => (
        <Article
          key={data.id}
          date={data.date}
          title={data.title}
          preview={data.preview}
          mint={data.minutes}
        />
      ))}
    </main>
  );
}

export default ArticleList;

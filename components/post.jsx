import React from "react";

export default function Post({ id, title, content, authorName }) {
  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>By {authorName}</p>
    </main>
  );
}

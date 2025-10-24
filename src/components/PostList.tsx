import React from "react";

import { gql, useQuery } from "@apollo/client";

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      content {
        document
      }
      author {
        name
      }
    }
  }
`;// Function to render the document JSON from Keystone
function renderDocument(document: any[] | null | undefined) {
  if (!document || !Array.isArray(document)) return null;
  return document.map((block, i) => {
    if (block.type === "paragraph") {
      return <p key={i}>{block.children.map((c: any) => c.text).join("")}</p>;
    }
    // Add other block types like headings, lists if needed
    return null;
  });
}



export default function PostsList() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.posts.map((post: any) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            margin: "1rem 0",
            padding: "1rem",
          }}
        >
          <h2>{post.title}</h2>
          <p>By: {post.author?.name || "Unknown"}</p>
          <div>{renderDocument(post.content?.document)}</div>

        </div>
      ))}
    </div>
  );
}

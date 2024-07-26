"use client";

import { fetchMarkdownFiles } from "@/helpers/githubHelpers";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
  const [posts, setPosts] = useState<GitHubFile[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const files = await fetchMarkdownFiles();
        setPosts(files);
      } catch (error) {
        console.error("Error fetching markdown files:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <div className="container p-4">
      <h1>Something about me</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.path}>
              <Link href={`/blog/${post.urlPath}`}>{post.name}</Link>
              <p>{post.download_url}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Page;

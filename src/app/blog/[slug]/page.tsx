"use client";

import { fetchMarkdownContent } from "@/helpers/githubHelpers";
import { convertSlugToPath } from "@/helpers/slugToPath";
import { convertMarkdownToHtml } from "@/lib/markdownUtils";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const [content, setContent] = useState("");
  const { slug } = params;
  const urlPath = convertSlugToPath(slug);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchMarkdownContent(`${urlPath}`);
      const markedDownContent = await convertMarkdownToHtml(data);
      setContent(markedDownContent);
    }
    fetchData();
  }, [urlPath]);

  console.log("contents", content);
  return (
    <div className="container">
      <h1>My Post: is {params.slug}</h1>
      <article
        className="lg:prose-l prose m-auto my-1 sm:my-10"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

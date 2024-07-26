import { fileNameToSlug } from "./fileNameToSlug";

export async function fetchMarkdownFiles(): Promise<GitHubFile[]> {
  const repoOwner = "abrarfahim19";
  const repoName = "mdfile-to-blog-generator-source";
  const response = await fetch(
    `https://api.github.com/repos/${repoOwner}/${repoName}/contents`,
  );
  const files: GitHubFile[] = await response.json();
  return files
    .filter((file) => file.name.endsWith(".md"))
    .map((file) => ({
      ...file,
      // urlPath: file.name.replace(/ /g, "_").replace(/\.md$/, ""),
      urlPath: fileNameToSlug(file.name),
    }));
}

export async function fetchMarkdownContent(path: string): Promise<string> {
  const response = await fetch(
    `https://raw.githubusercontent.com/abrarfahim19/mdfile-to-blog-generator-source/main/${path}`,
  );
  const content = await response.text();
  return content;
}

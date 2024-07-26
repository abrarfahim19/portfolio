export function convertSlugToPath(slug: string): string {
  return `${slug.replace(/_/g, "%20")}.md`;
}

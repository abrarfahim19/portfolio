export const fileNameToSlug = (name: string) => {
  return name.replace(/ /g, "_").replace(/\.md$/, "");
};

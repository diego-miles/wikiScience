// Converts a title string to a URL slug
export const toSlug = (title: string): string => {
  return title.toLowerCase().replace(/\s+/g, '_');
};

// Generates a link based on the domain, title, and any additional path
export const generateLink = (domain: string | undefined, title: string | undefined, additionalPath = ''): string => {
  const safeTitle = title ?? '';
  return `/recommendations/${toSlug(safeTitle)}${additionalPath}`;
};

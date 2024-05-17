// utils/slugGenerator.ts

/**
 * Generates a URL-friendly slug by replacing whitespace with hyphens and converting to lowercase.
 * @param title - The input string to convert to a URL slug.
 * @returns The generated URL slug.
 */
export const generateSlug = (title: string): string => {
  return title.replace(/\s+/g, '-').toLowerCase();
};

/**
 * Formats a title for use in Amazon image URLs by removing invalid characters,
 * replacing ampersands with their encoded equivalent, and replacing spaces with plus signs.
 * @param title - The input string to format for an Amazon image URL.
 * @returns The formatted string suitable for use in an Amazon image URL.
 */
export const generateAmazonImageURL = (title: string): string => {
  return title
    .replace(/[^a-zA-Z0-9 ,'&-]/g, "")
    .replace(/&/g, "%26")
    .replace(/ /g, "+");
};

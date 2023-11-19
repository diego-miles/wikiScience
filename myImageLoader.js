export default function myImageLoader({ src, width, quality }) {
  return `https://storage.cloud.google.com/bestbooks/covers/${src}?w=${width}&q=${quality || 60}`;
}

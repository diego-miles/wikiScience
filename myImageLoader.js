export default function myImageLoader({ src, width, quality }) {
  return `http://acs.amazonaws.com/groups/global/AllUsers/bestbooks/covers/${src}?w=${width}&q=${quality || 50}`;
}

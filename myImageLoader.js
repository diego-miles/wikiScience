export default function myImageLoader({ src, width, quality }) {
  return `
https://bestbooks.s3.us-east-2.amazonaws.com/${src}?w=${width}&q=${quality || 50}`;
}


// https://bestbooks.s3.us-east-2.amazonaws.com/A+Classical+Introduction+to+Modern+Number+Theory.png
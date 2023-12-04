/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: 'custom',
    loaderFile: './myImageLoader.js',
  },
  experimental: {
    nextScriptWorkers: true,
  },
};

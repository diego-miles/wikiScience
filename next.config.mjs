/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './myImageLoader.js',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    nextScriptWorkers: true,
    crossOrigin: 'anonymous',
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Aquí agregamos la excepción CORS para pagead2.googlesyndication.com
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://pagead2.googlesyndication.com',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://pagead2.googlesyndication.com/pagead/sodar?id=sodar2&v=225&li=gda_r20240605&jk=172801276755907&rc=',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '.doubleclick.net',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6831545317289734',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://alwingulla.com/88/tag.min.js',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://veepteero.com/88/72210',
          },
          // Puedes agregar más cabeceras de seguridad aquí según sea necesario
        ],
      },
    ];
  },
};

export default nextConfig;

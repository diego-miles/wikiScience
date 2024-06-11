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
          // Puedes agregar más cabeceras de seguridad aquí según sea necesario
        ],
      },
    ];
  },
};

export default nextConfig;
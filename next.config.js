/** @type {import('next').NextConfig} */



const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './myImageLoader.js',
  },


  experimental: {
    nextScriptWorkers: true,
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
                    // Puedes agregar más cabeceras de seguridad aquí según sea necesario
                ],
            },
        ];
    },
  // Agregamos la configuración de Tailwind CSS
  css: {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: ['tailwindcss'],
      },
    },
  },
};

module.exports = nextConfig;
/** @type {import('next').NextConfig} */
module.exports = {
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
};

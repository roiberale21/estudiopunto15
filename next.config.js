/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: "frame-ancestors 'self' https://www.mercadopago.com.co",
        },
      ],
    },
  ],
  
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/.jpg',
      },
    ],
  },
}

module.exports = nextConfig
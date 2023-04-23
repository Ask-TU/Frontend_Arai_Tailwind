/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // async headers() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'https://localhost:8080/:path*',
  //     }
  //   ]
  // }
}

module.exports = nextConfig

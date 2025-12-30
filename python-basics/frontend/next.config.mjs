/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
    async rewrites() {
    return [
      {
        source: "/api/recommend",
        destination: "http://localhost:5000/recommend",
      },
    ];
  }
};

export default nextConfig;

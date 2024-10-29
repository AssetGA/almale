/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "chef.ru",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;

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
};

export default nextConfig;

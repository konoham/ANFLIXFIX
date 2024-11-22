/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "i.pinimg.com",
      },
      
      {
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;

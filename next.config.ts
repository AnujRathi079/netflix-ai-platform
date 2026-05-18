import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {

    remotePatterns: [
      {
        protocol: "https",

        hostname:
          "image.tmdb.org",
      },
    ],

    qualities: [75, 80],
  },
};

export default nextConfig;
/** @type {import('next').NextConfig} */

const nextConfig = {

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

module.exports = nextConfig;
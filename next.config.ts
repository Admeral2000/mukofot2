// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//     reactStrictMode: false,
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;




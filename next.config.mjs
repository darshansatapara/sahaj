// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: false, // Forces Next.js to use CommonJS instead of ESM
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false }; // Fix issues with some dependencies
    return config;
  },
};

export default nextConfig;

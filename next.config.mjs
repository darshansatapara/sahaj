/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  transpilePackages: ['@rc-component/util', 'rc-util'],
  experimental: {
    esmExternals: 'loose'
  }
};

export default nextConfig;

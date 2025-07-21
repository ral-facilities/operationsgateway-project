import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/operationsgateway-project',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

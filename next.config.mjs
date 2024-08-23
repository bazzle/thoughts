import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    output: isDev ? 'standalone' : 'export',
    basePath: isDev ? '' : '/thoughts',
    // Additional configurations based on the environment can go here
  };
};

export default nextConfig;

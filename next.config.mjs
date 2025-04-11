import createMDX from '@next/mdx';
import { withContentlayer } from 'next-contentlayer2'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
        eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
                ignoreDuringBuilds: false,
        },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withContentlayer(withMDX(nextConfig))

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};
module.exports = nextConfig;

// const withMDX = require('@next/mdx')()

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     // Configure `pageExtensions`` to include MDX files
//     pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
//     // Optionally, add any other Next.js config below
//     // By default only the .mdx extension is supported.
//     extension: /\.mdx?$/,
//     options: {/* providerImportSource: …, otherOptions… */ }
// }

// module.exports = withMDX(nextConfig)
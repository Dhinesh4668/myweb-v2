/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable trailing slashes for GitHub Pages
    trailingSlash: true,
    // Base path for GitHub Pages
    basePath: '/your-repo-name',
    // Configuration for static export
    exportPathMap: async function (defaultPathMap) {
        return {
            '/': { page: '/' },
            // Add additional paths here
        };
    },
};

export default nextConfig;

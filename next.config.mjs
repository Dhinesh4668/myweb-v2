/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    basePath: '/your-repo-name',
    exportPathMap: async function (defaultPathMap) {
        return {
            '/': { page: '/' },
            // Add additional paths here
        };
    },
};

export default nextConfig;

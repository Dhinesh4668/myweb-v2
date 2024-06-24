/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    basePath: '/myweb-v2',
    exportPathMap: async function (defaultPathMap) {
        return {
            '/': { page: '/' },
            // Add additional paths here
        };
    },
};

export default nextConfig;

// next.config.js
module.exports = {
    // Use the 'exportPathMap' if needed
    exportPathMap: async function (defaultPathMap) {
        return {
            '/': { page: '/' },
            // Add other routes if necessary
        }
    },
    trailingSlash: true, // Add trailing slash to directories
}

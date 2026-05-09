/** @type {import('next').NextConfig} */
const nextConfig = {
    // Proxy API call to external
    async rewrites() {
        const baseUrl = (process.env.BASE_URL ?? '').trim();

        if (!baseUrl) {
            // Keep build predictable; rewrite will be empty if BASE_URL is not set.
            return [];
        }

        return [
            {
                source: '/edl_ict/daily_v2K2Eu4SCHt8dpmrjcaA/d4MgpBhnUPGeK/:path*', // frontend path network
                destination: `${baseUrl}/attendance-svc/api/:path*`, // external API
            },
        ];
    },
};

module.exports = nextConfig;

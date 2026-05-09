/** @type {import('next').NextConfig} */
const nextConfig = {
    // --Proxy API call to external
    async rewrites() {
        return [
            {
                source: '/edl_ict/daily_v2K2Eu4SCHt8dpmrjcaA/d4MgpBhnUPGeK/:path*', // frontend path network
                destination: `${process.env.BASE_URL}/attendance-svc/api/:path*`, // external API
            },
        ];
    },
    // 
}

module.exports = nextConfig

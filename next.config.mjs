/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.pixele.gg',
                pathname: '**'
            }
        ]
    }
};

export default nextConfig;
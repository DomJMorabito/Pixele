/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.pixele.gg',
                pathname: '**'
            }
        ]
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: [
                            "default-src 'self'",
                            "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
                            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
                            "font-src 'self' https://fonts.gstatic.com https://assets.pixele.gg",
                            "img-src 'self' https://assets.pixele.gg data: blob:",
                            "connect-src 'self' https://assets.pixele.gg https://api.pixele.gg",
                        ].join('; ')
                    }
                ]
            }
        ]
    }
};

export default nextConfig;
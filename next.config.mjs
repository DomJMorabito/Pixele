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
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'pixele.gg'
                    },
                    {
                        type: 'protocol',
                        value: 'http'
                    }
                ],
                permanent: true,
                destination: 'https://pixele.gg/:path*',
            },
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'www.pixele.gg'
                    }
                ],
                permanent: true,
                destination: 'https://pixele.gg/:path*',
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
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000; includeSubDomains'
                    }
                ]
            }
        ]
    }
};

export default nextConfig;
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
                        value: 'www.pixele.gg',
                    },
                ],
                destination: 'https://pixele.gg/:path*',
                permanent: true
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
                            "base-uri 'self'",
                            "frame-ancestors 'none'",
                            "object-src 'none'",
                            "form-action 'self'"
                        ].join('; ')
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000; includeSubDomains'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin'
                    },
                    {
                        key: 'Permissions-Policy',
                        value: [
                            'camera=()',
                            'microphone=()',
                            'geolocation=()',
                            'interest-cohort=()'
                        ].join(', ')
                    }
                ]
            }
        ]
    }
};

export default nextConfig;
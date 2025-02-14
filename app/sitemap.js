export default function siteMap() {
    const baseUrl = 'https://pixele.gg';

    const routes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1
        }
    ]

    const gameRoutes = [
        'overwatch',
        'ssb',
        'pokemon',
        'valorant',
        'r6',
        'minecraft',
        'clashroyale'
    ].map(game => ({
        url: `${baseUrl}/${game}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8
    }));

    const authRoutes = [
        'register',
        'verify',
        'reset-password',
        'new-password',
        'login'
    ].map(route => ({
        url: `${baseUrl}/${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.3
    }));

    return [...routes, ...gameRoutes, ...authRoutes];
}
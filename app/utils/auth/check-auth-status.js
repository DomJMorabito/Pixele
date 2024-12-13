/**
 * Checks the authentication status by parsing cookies and extracting user information.
 * Returns user info and authentication status.
 *
 * @returns {Object} Authentication result object
 * @property {boolean} isAuthenticated - Whether the user is authenticated
 * @property {Object} userInfo - User information from cookie
 * @property {string} userInfo.email - User's email
 * @property {string} userInfo.username - User's username
 */
export const checkAuthStatus = () => {
    const defaultUserInfo = { email: '', username: '' };

    const cookies = document.cookie.split(';').reduce((acc, cookie) => {
        const [key, value] = cookie.trim().split('=');
        acc[key.trim()] = value;
        return acc;
    }, {});

    if (!cookies['pixele_session'] || !cookies['pixele_user']) {
        return {
            isAuthenticated: false,
            userInfo: defaultUserInfo
        };
    }

    try {
        // Parse and decode user cookie
        const userInfo = JSON.parse(decodeURIComponent(cookies['pixele_user']));

        return {
            isAuthenticated: true,
            userInfo: {
                email: userInfo.email,
                username: userInfo.username
            }
        };
    } catch (error) {
        console.error('Error parsing user cookie:', error);
        return {
            isAuthenticated: false,
            userInfo: defaultUserInfo
        };
    }
};
// Utils Imports:

import { parseCookies } from '@/app/utils/auth/parse-cookies';

/**
 * Checks the authentication status by parsing pixele_user cookie and extracting user information.
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
    const cookies = parseCookies();

    if (!cookies['pixele_user']) {
        return {
            isAuthenticated: false,
            userInfo: defaultUserInfo
        };
    }

    try {
        const userInfo = JSON.parse(decodeURIComponent(cookies['pixele_user']));
        return {
            isAuthenticated: true,
            userInfo: {
                email: userInfo.email,
                username: userInfo.username
            }
        };
    } catch (error) {
        console.error('Error in cookie parsing chain:', error);
        return {
            isAuthenticated: false,
            userInfo: defaultUserInfo
        };
    }
};
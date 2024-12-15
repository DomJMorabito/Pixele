/**
 * Parses document.cookie string into an object of key-value pairs
 *
 * @returns {Object} Object containing all cookies as key-value pairs
 */
export const parseCookies = () => {
    return document.cookie.split(';').reduce((acc, cookie) => {
        const [key, value] = cookie.trim().split('=');
        acc[key.trim()] = value;
        return acc;
    }, {});
};
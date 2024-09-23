/**
 * Debounces another function.
 *
 * @param {Function} func - The function to debounce.
 * @param {number} delay - The delay in milliseconds to wait before calling the fuction.
 * @returns {Function} - A debounced version of the original function
 */
export function debounce(func, delay) {
    let timer;
    return (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, delay);
    };
}
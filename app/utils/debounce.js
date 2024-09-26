/**
 * Debounces another function.
 *
 * @param {Function} func - The function to debounce.
 * @param {number} delay - The delay in milliseconds to wait before calling the fuction.
 * @returns {Function} - A debounced version of the original function
 */
export function debounce(func, delay) {
    let timer;

    const debouncedFunction = (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, delay);
    };

    debouncedFunction.cancel = () => {
        if (timer) clearTimeout(timer);
    };

    return debouncedFunction;
}

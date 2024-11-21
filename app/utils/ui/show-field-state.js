/**
 * Temporarily adds a state class to a form field to indicate validation status.
 *
 * @param {HTMLElement} field - The DOM element to show the state on
 * @param {Object} [options] - Optional configuration object
 * @param {number} [options.duration=500] - Duration in milliseconds to show the state
 * @param {'error' | 'success'} [options.state='error'] - The state to show ('error' or 'success')
 * @param {boolean} [options.persist=false] - Whether to persist the state (don't remove class after duration)
 * @returns {void}
 */
export const showFieldState = (field, options = {}) => {
    const {
        duration = 500,
        state = 'error',
        persist = false
    } = typeof options === 'number' ? { duration: options } : options;

    field.classList.add(state);

    if (!persist) {
        setTimeout(() => {
            field.classList.remove(state);
        }, duration);
    }
};
/**
 * Manages field states in React components.
 *
 * @param {string} fieldId - The ID of the field to update
 * @param {Function} setFieldStates - setState function for field states
 * @param {Object} [options] - Optional configuration object
 * @param {number} [options.duration=500] - Duration in milliseconds to show the state
 * @param {'error' | 'success'} [options.state='error'] - The state to show ('error' or 'success')
 * @param {boolean} [options.persist=false] - Whether to persist the state
 * @returns {void}
 */
export const showFieldState = (fieldId, setFieldStates, options = {}) => {
    const {
        duration = 500,
        state = 'error',
        persist = false
    } = typeof options === 'number' ? { duration: options } : options;

    setFieldStates(prev => ({
        ...prev,
        [fieldId]: state
    }));

    if (!persist) {
        setTimeout(() => {
            setFieldStates(prev => ({
                ...prev,
                [fieldId]: ''
            }));
        }, duration);
    }
};
/**
 * Temporarily adds an error class to a form field to indicate validation failure.
 *
 * @param {HTMLElement} field - The DOM element to show the error state on
 * @param {number} [duration=500] - Duration in milliseconds to show the error state
 * @returns {void}
 */
export const showFieldError = (field, duration = 500) => {
    field.classList.add('error');
    setTimeout(() => {
        field.classList.remove('error');
    }, duration)
};
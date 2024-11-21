let isShowing = false;
let isHiding = false;
let timeoutId;

/**
 * Displays an alert message for a short duration.
 *
 * @param {string} message - The message to display in the alert indicator.
 * @param {string} [type='bad'] - The type of message ('good' or 'bad') to determine the style of the indicator.
 * @param {HTMLElement} alertIndicator - The HTML element where the alert message should be displayed.
 */
export const showIndicator =(message, type = 'bad', alertIndicator) => {
    if (isShowing || isHiding) {
        clearTimeout(timeoutId);
        alertIndicator.classList.remove('show', 'hide');
        void alertIndicator.offsetWidth;
        isHiding = false;
    }

    alertIndicator.textContent = message;
    alertIndicator.classList.remove('good', 'bad');
    alertIndicator.classList.add(type);
    alertIndicator.classList.add('show');
    isShowing = true;

    timeoutId = setTimeout(() => {
        isShowing = false;
        isHiding = true;
        alertIndicator.classList.remove('show');
        alertIndicator.classList.add('hide');
        setTimeout(() => {
            alertIndicator.classList.remove('hide');
            alertIndicator.classList.remove(type);
            alertIndicator.textContent = '';
            isHiding = false;
        }, 500);
    }, 3000);
};
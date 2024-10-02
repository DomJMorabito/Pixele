/**
 * Displays an alert message for a short duration.
 *
 * @param {string} message - The message to display in the alert indicator.
 * @param {string} [type='bad'] - The type of message ('good' or 'bad') to determine the style of the indicator.
 * @param {HTMLElement} alertIndicator - The HTML element where the alert message should be displayed.
 */
export const showIndicator =(message, type = 'bad', alertIndicator) => {
    alertIndicator.textContent = message;
    alertIndicator.classList.remove("good", "bad");
    alertIndicator.classList.add(type);
    alertIndicator.style.display = "block";
    alertIndicator.classList.remove("hide");
    alertIndicator.classList.add("show");

    setTimeout(() => {
        alertIndicator.classList.remove("show");
        alertIndicator.classList.add("hide");
        setTimeout(() => {
            alertIndicator.style.display = "none";
            alertIndicator.classList.remove("hide");
            alertIndicator.classList.remove(type);
            alertIndicator.textContent = '';
        }, 500);
    }, 1500);
};
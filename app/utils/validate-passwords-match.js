/**
 * Validates that the password and confirm password inputs match.
 *
 * @param {string} password - The password string to validate.
 * @param {string} confirmPassword - The confirm password string to compare against.
 * @param {HTMLElement} confirmButton - The submit button to enable/disable based on validation.
 * @param {boolean} requirementsMet - Whether the password meets all requirements.
 * @returns {boolean} - Whether the passwords match.
 */
export const validatePasswordsMatch = (password, confirmPassword, confirmButton, requirementsMet) => {
    if (!password || !confirmPassword) {
        confirmButton.disabled = true;
        return false;
    }

    const passwordsMatch = password === confirmPassword;
    confirmButton.disabled = !(passwordsMatch && requirementsMet);
    return passwordsMatch;
}
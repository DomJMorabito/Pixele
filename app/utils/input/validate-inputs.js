/**
 * Validates that both identifier & password are present.
 *
 * @param {HTMLElement} usernameEmailInput - The input element for the username or email.
 * @param {HTMLElement} passwordInput - The input element for the password.
 * @returns {boolean} - Whether both values are present.
 */
export const validateInputs = (usernameEmailInput, passwordInput) => {
    const identifier = usernameEmailInput.value.trim();
    const password = passwordInput.value.trim();
    return identifier.length > 0 && password.length > 0;
}
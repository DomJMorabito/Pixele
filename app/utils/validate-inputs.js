/**
 * Validates the username/email and password inputs to enable or disable the submit button.
 *
 * @param {HTMLElement} usernameEmailInput - The input element for the username or email.
 * @param {HTMLElement} passwordInput - The input element for the password.
 * @param {HTMLElement} confirmButton - The submit button that should be enabled or disabled based on input validation.
 */
export const validateInputs = (usernameEmailInput, passwordInput, confirmButton) => {
    const identifier = usernameEmailInput.value.trim();
    const password = passwordInput.value.trim();
    confirmButton.disabled = !identifier || !password;
}
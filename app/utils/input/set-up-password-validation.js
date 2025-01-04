// Utils Imports:

import { validatePassword } from '@/app/utils/input/validate-password';
import { validatePasswordsMatch } from '@/app/utils/input/validate-passwords-match'

/**
 * Sets up password validation event listeners and cleanup for password input fields.
 *
 * @param {Function} setIsFormValid - State setter function to update form validity.
 * @returns {Function} Cleanup function to remove event listeners.
 */
export const setupPasswordValidation = (setIsFormValid) => {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const passwordLengthRequirement = document.getElementById('password-length');
    const passwordNumberRequirement = document.getElementById('password-numbers');
    const passwordSpecialRequirement = document.getElementById('password-special');

    const handlePasswordInputs = () => {
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        const passwordIsValid = validatePassword(
            password,
            passwordLengthRequirement,
            passwordNumberRequirement,
            passwordSpecialRequirement
        );
        const submitButton = document.querySelector('button[type="submit"]');
        setIsFormValid(validatePasswordsMatch(password, confirmPassword, submitButton, passwordIsValid));
    };

    passwordInput.addEventListener('input', handlePasswordInputs);
    confirmPasswordInput.addEventListener('input', handlePasswordInputs);

    return () => {
        passwordInput.removeEventListener('input', handlePasswordInputs);
        confirmPasswordInput.removeEventListener('input', handlePasswordInputs);
    };
};
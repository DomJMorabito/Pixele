/**
 * Validates the password input against specified requirements.
 *
 * @param {string} password - The password string to validate.
 * @param {HTMLElement} lengthRequirement - The element displaying the length requirement.
 * @param {HTMLElement} numberRequirement - The element displaying the number requirement.
 * @param {HTMLElement} specialRequirement - The element displaying the special character requirement.
 * @param {HTMLElement} confirmButton - The submit button to enable/disable based on validation.
 */
export const validatePassword = (password, lengthRequirement, numberRequirement, specialRequirement, confirmButton) => {
    let lengthMet = false;
    let numbersMet = false;
    let specialMet = false;

    if (password === '') { // Handle case where password input box is empty or the user has not typed anything in yet.
        lengthRequirement.classList.remove('requirement-met', 'requirement-not-met');
        numberRequirement.classList.remove('requirement-met', 'requirement-not-met');
        specialRequirement.classList.remove('requirement-met', 'requirement-not-met');
        confirmButton.disabled = true;
        return;
    }

    if (password.length >= 8) { // Check if password is 8 characters or longer.
        lengthRequirement.classList.add('requirement-met');
        lengthRequirement.classList.remove('requirement-not-met');
        lengthMet = true;
    } else {
        lengthRequirement.classList.add('requirement-not-met');
        lengthRequirement.classList.remove('requirement-met');
    }

    if (/\d/.test(password)) { // Check to see if password contains a number.
        numberRequirement.classList.add('requirement-met');
        numberRequirement.classList.remove('requirement-not-met');
        numbersMet = true;
    } else {
        numberRequirement.classList.add('requirement-not-met');
        numberRequirement.classList.remove('requirement-met');
    }

    if (/[^A-Za-z0-9]/.test(password)) { // Check to see if password contains a special character (!, ?, @, etc.).
        specialRequirement.classList.add('requirement-met');
        specialRequirement.classList.remove('requirement-not-met');
        specialMet = true;
    } else {
        specialRequirement.classList.add('requirement-not-met');
        specialRequirement.classList.remove('requirement-met');
    }

    confirmButton.disabled = !(lengthMet && numbersMet && specialMet);
}
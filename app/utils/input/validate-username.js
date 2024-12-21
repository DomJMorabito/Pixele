/**
 * Validates the username input against specified requirements.
 *
 * @param {string} username - The username string to validate.
 * @param {HTMLElement} lengthRequirement - The element displaying the length requirement.
 * @param {HTMLElement} specialRequirement - The element displaying the special character requirement.
 * @returns {boolean} - Returns true if all requirements are met, false otherwise.
 */
export const validateUsername = (username, lengthRequirement, specialRequirement) => {
    let lengthMet = false;
    let specialMet = false;

    if (username === '') {
        lengthRequirement.classList.remove('requirement-met', 'requirement-not-met');
        specialRequirement.classList.remove('requirement-met', 'requirement-not-met');
        return false;
    }

    if (username.length >= 5 && username.length <= 18) {
        lengthRequirement.classList.add('requirement-met');
        lengthRequirement.classList.remove('requirement-not-met');
        lengthMet = true;
    } else {
        lengthRequirement.classList.add('requirement-not-met');
        lengthRequirement.classList.remove('requirement-met');
    }

    if (/^[a-zA-Z0-9]+$/.test(username)) {
        specialRequirement.classList.add('requirement-met');
        specialRequirement.classList.remove('requirement-not-met');
        specialMet = true;
    } else {
        specialRequirement.classList.add('requirement-not-met');
        specialRequirement.classList.remove('requirement-met');
    }

    return lengthMet && specialMet;
}
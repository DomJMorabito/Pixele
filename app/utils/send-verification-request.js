/**
 * Confirms the sign-up verification code for the user with AWS Cognito.
 *
 * @param {string} username - The username of the user.
 * @param {string} verificationCode - The verification code entered by the user.
 * @returns {Promise<Object>} - A promise that resolves with the result of the confirmation request.
 * @throws {Error} - Throws an error if the confirmation request fails.
 */
export const sendVerificationRequest = async (username, verificationCode) => {
    const requestBody = {
        username,
        verificationCode,
    };

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/verify`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Unknown Error");
    }
    return data;
}
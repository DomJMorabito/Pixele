/**
 * Sends a registration request to the server with the provided username, email, and password.
 *
 * @param {string} username - The username entered by the user.
 * @param {string} email - The email entered by the user.
 * @param {string} password - The password entered by the user.
 * @returns {Promise<Object>} - A promise that resolves with the server response data if the request is successful.
 * @throws {Error} - Throws an error if the response is not OK, with a message from the server or a default error message.
 */
export const sendRegisterRequest = async (username, email, password) => {
    const requestBody = {
        username,
        email,
        password,
    };

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/register`, {
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
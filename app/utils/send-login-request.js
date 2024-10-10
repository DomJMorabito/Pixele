/**
 * Sends a login request to the server with the provided identifier and password.
 *
 * @param {string} identifier - The username or email entered by the user.
 * @param {string} password - The password entered by the user.
 * @returns {Promise<Object>} - A promise that resolves with the server response data if the request is successful.
 * @throws {Error} - Throws an error if the response is not OK, with a message from the server or a default error message.
 */
export const sendLoginRequest = async (identifier, password) => {
    const requestBody = {
        identifier,
        password
    };

    const response = await fetch("https://api.pixele.gg/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(requestBody),
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Unknown Error");
    }
    return data;
}
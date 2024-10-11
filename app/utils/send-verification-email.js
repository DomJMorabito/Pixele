// Node.js Imports:

const AWS = require('aws-sdk');

// Set up AWS SES:

AWS.config.update({ region: 'us-east-1' });
const ses = new AWS.SES({ apiVersion: '2010-12-01' });

/**
 * Sends a verification email to the user.
 *
 * @param {string} email - The recipient's email address
 * @param {string} username - The recipient's username
 * @param {string} token - The verification token
 */
export const sendVerificationEmail = async (email, username, token) => {
    const verificationUrl = `https://pixele.gg/verify-email?token=${token}`;
    const params = {
        Destination: {
            ToAddresses: [email],
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: `<p>Hi ${username},</p>
                        <p>Thank you for registering. Please verify your email by clicking the link below:</p>
                        <p><a href="${verificationUrl}">Verify Email</a></p>
                        <p>If you didn't create an account, you can ignore this email.</p>`,
                },
                Text: {
                    Charset: "UTF-8",
                    Data: `Hi ${username},\n\nThank you for registering. Please verify your email by clicking the link below:\n${verificationUrl}\n\nIf you didn't create an account, you can ignore this email.`,
                },
            },
            Subject: {
                Charset: 'UTF-8',
                Data: 'Verify your email address',
            },
        },
        Source: 'no-reply@pixele.gg',
    };

    try {
        const data = await ses.sendEmail(params).promise();
        console.log(data);
    } catch (error) {
        console.log('Error sending email', error);
    }
};
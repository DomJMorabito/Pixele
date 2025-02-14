import { LogoutError, LogoutErrorCode } from "@/app/error/logout/LogoutError";

/**
 * Creates a LogoutError from an API response
 * @param {number} status - HTTP status code
 * @param {Object} data - Response data
 * @returns {LogoutError}
 */
export const handleLogoutError = (status, data) => {
    switch (data.code) {
        case 'NO_SESSION':
            return new LogoutError(
                'Unable to find current session.',
                LogoutErrorCode.NO_SESSION
            )
        case 'LOGOUT_FAILED':
            return new LogoutError(
                'Unable to log out. Please try again later.',
                LogoutErrorCode.LOGOUT_FAILED
            )
        case 'SERVER_ERROR':
            return new LogoutError(
                'Unable to log out. Please try again later.',
                LogoutErrorCode.SERVER_ERROR
            )
        default:
            return new LogoutError(
                data.message || 'An unknown error occurred.',
                LogoutErrorCode.UNKNOWN_ERROR
            )
    }
}
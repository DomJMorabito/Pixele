'use client';

// Next.js Imports:

import { useRouter } from 'next/navigation';

// React Imports:

import { useCallback, useEffect, useState } from 'react';

// Node.js Imports:

import { Filter } from 'bad-words';

// Component Imports:

import Button from '@/app/components/misc/button/Button';
import Form from '@/app/components/misc/form/Form';
import Input from '@/app/components/misc/input/Input';
import PasswordInput from '@/app/components/misc/password-input/PasswordInput';
import InputRequirements from "@/app/components/misc/input-requirements/InputRequirements";

// Context Imports:

import { useAlert } from '@/app/contexts/AlertProvider';

// Utils Imports:

import { validateEmail } from '@/app/utils/input/validate-email';
import { validateUsernameLength } from '@/app/utils/input/validate-username-length';
import { validateUsernameSpecialCharacters } from '@/app/utils/input/validate-username-special-characters';
import { sendRegisterRequest } from '@/app/utils/api/register/send-register-request';
import { showFieldState } from '@/app/utils/ui/show-field-state';
import { RegistrationErrorCode } from '@/app/utils/errors/register/RegistrationError';
import { checkUsernameAvailability } from '@/app/utils/api/register/check-username-availability';
import { validateUsername } from '@/app/utils/input/validate-username';
import { validatePassword } from "@/app/utils/input/validate-password";
import { validatePasswordLength } from "@/app/utils/input/validate-password-length";
import { validatePasswordNumbers } from "@/app/utils/input/validate-password-numbers";
import { validatePasswordSpecialCharacters } from "@/app/utils/input/validate-password-special-characters";
import { maskEmail } from "@/app/utils/ui/mask-email";

// CSS Imports:

import '@/app/components/register/RegistrationForm.css'

export default function RegistrationForm() {
    const { showAlert } = useAlert();
    const router = useRouter();

    // Form field states:
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    // Field visual states:
    const [fieldState, setFieldState] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    // Validation states:
    const [validation, setValidation] = useState({
        isEmailValid: false,
        isUsernameValid: false,
        isUsernameTaken: false,
        usernameHasSpecialChars: false,
        usernameIsValidLength: false,
        isCheckingUsername: false,
        isPasswordValid: false,
        passwordsMatch: false,
        passwordHasSpecialChar: false,
        passwordIsValidLength: false,
        passwordHasNumber: false
    });

    // API status state:
    const [usernameApiStatus, setUsernameApiStatus] = useState({
        isAvailable: false,
        hasChecked: false
    });

    // UI states:
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Debounce username check:
    useEffect(() => {
        const checkUsername = async () => {
            if (!validation.isUsernameValid || !formData.username) {
                setValidation(prev => ({
                    ...prev,
                    isUsernameTaken: false,
                    isCheckingUsername: false,
                }));
                setUsernameApiStatus({
                    isAvailable: false,
                    hasChecked: false
                })
                return;
            }

            setValidation(prev => ({ ...prev, isCheckingUsername: true }));
            setUsernameApiStatus(prev => ({
                ...prev,
                hasChecked: false
            }));

            try {
                const isAvailable = await checkUsernameAvailability(formData.username);
                setValidation(prev => ({ ...prev, isUsernameTaken: !isAvailable }));
                setUsernameApiStatus({
                    isAvailable,
                    hasChecked: true
                })
            } catch (error) {
                console.error('Error checking username availability:', error);
                setUsernameApiStatus({
                    isAvailable: false,
                    hasChecked: false
                })
            } finally {
                setValidation(prev => ({ ...prev, isCheckingUsername: false }))
            }
        };

        const timeoutId = setTimeout(checkUsername, 500);
        return () => clearTimeout(timeoutId);
    }, [formData.username, validation.isUsernameValid]);

    // Form validation:
    const validateForm = useCallback(() => {
        const usernameIsValid = validateUsername(
            formData.username,
            validation.usernameIsValidLength,
            !validation.usernameHasSpecialChars
        );

        const passwordsMatch = formData.password &&
                            formData.confirmPassword &&
                            formData.password === formData.confirmPassword;

        const passwordIsValidLength = validatePasswordLength(formData.password);
        const passwordHasNumber = validatePasswordNumbers(formData.password);
        const passwordHasSpecialChar = validatePasswordSpecialCharacters(formData.password);
        const isPasswordValid = validatePassword(
            passwordHasNumber,
            passwordHasSpecialChar,
            passwordIsValidLength
        );

        setValidation(prev => ({
            ...prev,
            isEmailValid: validateEmail(formData.email),
            isUsernameValid: usernameIsValid,
            passwordsMatch,
            usernameIsValidLength: validateUsernameLength(formData.username),
            usernameHasSpecialChars: !validateUsernameSpecialCharacters(formData.username),
            isPasswordValid,
            passwordHasSpecialChar,
            passwordIsValidLength,
            passwordHasNumber
        }));
    }, [formData, validation.usernameIsValidLength, validation.usernameHasSpecialChars]);

    useEffect(() => {
        validateForm();
    }, [validateForm]);

    // Handle input changes:
    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [id]: value.trim(),
        }));
    };

    // Handle form submission:
    const handleFormSubmission = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const filter = new Filter();

        try {
            const emptyFields = Object.entries(formData)
                .filter(([_, value]) => !value)
                .map(([fieldId]) => fieldId);

            if (emptyFields.length > 0) {
                console.error('Missing required fields:', emptyFields);
                showAlert('Please fill out all fields.', 'bad');
                emptyFields.forEach(fieldId => {
                    showFieldState(fieldId, setFieldState);
                });
                return;
            }
            if (!validation.isEmailValid) {
                console.error('Email is invalid.');
                showAlert('Please enter a valid email.', 'bad');
                showFieldState('email', setFieldState);
                return;
            }

            if (!validation.isUsernameValid) {
                console.error('Username is invalid.');
                if (!validation.usernameIsValidLength) {
                    showAlert('Username must be 5-18 characters.', 'bad');
                } else {
                    showAlert('Username cannot contain any special characters.', 'bad');
                }
                showFieldState('username', setFieldState);
                return;
            }

            if (!validation.isPasswordValid) {
                console.error('Password is invalid.');
                if (!validation.passwordIsValidLength) {
                    showAlert('Password must be between 8-15 characters.', 'bad');
                } else if (!validation.passwordHasNumber) {
                    showAlert('Password must contain a number.', 'bad');
                } else if (!validation.passwordHasSpecialChar) {
                    showAlert('Password must contain a special character.', 'bad');
                }
                showFieldState('password', setFieldState);
                return;
            }

            if (!validation.passwordsMatch) {
                console.error('Passwords do not match.');
                showAlert('Passwords do not match.', 'bad');
                showFieldState('password', setFieldState);
                showFieldState('confirmPassword', setFieldState);
                return;
            }

            if (filter.isProfane(formData.username)) {
                console.error('Username contains profanity.');
                showAlert('Really.', 'bad');
                showFieldState('username', setFieldState);
                return;
            }

            await sendRegisterRequest(formData.username, formData.email, formData.password);
            setIsSuccess(true);
            console.log('Successfully sent Registration request!');

            ['email', 'username', 'password', 'confirmPassword'].forEach(fieldId => {
                showFieldState(fieldId, setFieldState, {
                    state: 'success',
                    duration: 2000,
                    persist: true
                });
            });

            setTimeout(() => {
                const maskedEmail = maskEmail(formData.email);
                router.push(`/verify?email=${encodeURIComponent(maskedEmail)}&username=${encodeURIComponent(formData.username)}`);
            }, 2000);
        } catch (error) {
            switch (error.code) {
                case RegistrationErrorCode.MISSING_FIELDS:
                    console.error(error);
                    showAlert('Please fill out all fields.', 'bad');
                    error.details.missingFields.forEach(fieldId => {
                        showFieldState(fieldId, setFieldState);
                    });
                    break
                case RegistrationErrorCode.DUPLICATE_CREDENTIALS:
                    console.error(error);
                    showAlert('Both Email and Username are already in use.', 'bad');
                    showFieldState('email', setFieldState);
                    showFieldState('username', setFieldState);
                    break
                case RegistrationErrorCode.EMAIL_EXISTS:
                    console.error(error);
                    showAlert('Email already in use', 'bad');
                    showFieldState('email', setFieldState);
                    break
                case RegistrationErrorCode.USERNAME_EXISTS:
                    console.error(error);
                    showAlert('Username already taken', 'bad');
                    showFieldState('username', setFieldState);
                    break
                case RegistrationErrorCode.INVALID_EMAIL:
                    console.error(error);
                    showAlert('Please enter a valid email.', 'bad');
                    showFieldState('email', setFieldState);
                    break
                case RegistrationErrorCode.INVALID_USERNAME:
                    if (error.details?.requirements?.minLength) {
                        console.error(error);
                        showAlert('Username must be 5-18 characters.', 'bad');
                    } else if (error.details?.requirements?.allowedCharacters) {
                        console.error(error);
                        showAlert('Username cannot contain any special characters.', 'bad');
                    }
                    showFieldState('username', setFieldState);
                    break
                case RegistrationErrorCode.INVALID_INPUT:
                    console.error(error);
                    if (error.details?.field) {
                        const fields = Array.isArray(error.details.field)
                            ? error.details.field
                            : [error.details.field];
                        fields.forEach(fieldId => {
                            showFieldState(fieldId, setFieldState);
                        })
                    }
                    showAlert('Invalid input provided.', 'bad');
                    break
                case RegistrationErrorCode.DATABASE_ERROR:
                    console.error(error);
                    showAlert('Could not complete registration. Please try again later.', 'bad');
                    ['email', 'username', 'password', 'confirmPassword'].forEach(fieldId => {
                        showFieldState(fieldId, setFieldState);
                    });
                    break
                case RegistrationErrorCode.INAPPROPRIATE_CONTENT:
                    console.error(error);
                    showAlert('Seriously?', 'bad');
                    showFieldState('username', setFieldState);
                    break
                case RegistrationErrorCode.INVALID_PASSWORD:
                    console.error(error);
                    showAlert('Password does not meet the requirements.', 'bad');
                    showFieldState('password', setFieldState);
                    showFieldState('confirmPassword', setFieldState);
                    break
                case RegistrationErrorCode.RATE_LIMIT_EXCEEDED:
                    console.error(error);
                    showAlert('Too many attempts. Please try again later.', 'bad');
                    ['email', 'username', 'password', 'confirmPassword'].forEach(fieldId => {
                        showFieldState(fieldId, setFieldState);
                    });
                    break
                case RegistrationErrorCode.SERVER_ERROR:
                    console.error(error);
                    showAlert('Internal server error. Please try again later.', 'bad');
                    ['email', 'username', 'password', 'confirmPassword'].forEach(fieldId => {
                        showFieldState(fieldId, setFieldState);
                    });
                    break
                default:
                    console.error(error);
                    showAlert('An unknown error has occurred, please try again later.', 'bad');
                    ['email', 'username', 'password', 'confirmPassword'].forEach(fieldId => {
                        showFieldState(fieldId, setFieldState);
                    });
            }
        } finally {
            setIsLoading(false);
        }
    };

    const isFormValid = validation.isEmailValid &&
                                validation.isUsernameValid &&
                                validation.isPasswordValid &&
                                validation.passwordsMatch &&
                                !validation.isUsernameTaken &&
                                !isLoading;

    return (
        <Form
            title="Join the Fight!"
            onSubmit={handleFormSubmission}
            className="registration-form"
        >
            <Input
                id='email'
                value={formData.email}
                onChange={handleInputChange}
                placeholder='Email'
                label='Email'
                disabled={isLoading}
                state={fieldState.email}
            />
            <Input
                id='username'
                value={formData.username}
                onChange={handleInputChange}
                placeholder='Username'
                label={<>
                    Username
                    {validation.usernameIsValidLength &&
                        !validation.usernameHasSpecialChars && (
                            <span className={`username-status ${validation.isCheckingUsername ? 'checking' : usernameApiStatus.hasChecked ? (usernameApiStatus.isAvailable ? 'available' : 'taken') : ''}`}>
                                {validation.isCheckingUsername ? ' (checking...)' : usernameApiStatus.hasChecked ? (usernameApiStatus.isAvailable ? ' (available)' : ' (taken)') : ''}
                            </span>
                        )}
                </>}
                disabled={isLoading}
                state={fieldState.username}
            />
            <InputRequirements
                id="username-requirements"
                requirements={[
                    {id: 'username-length', text: '5-18 Letters', met: validation.usernameIsValidLength},
                    {id: 'username-special', text: 'No Special Characters', met: !validation.usernameHasSpecialChars}
                ]}
            />
            <PasswordInput
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder='Password'
                label='Password'
                disabled={isLoading}
                state={fieldState.password}
            />
            <InputRequirements
                id="password-requirements"
                requirements={[
                    {id: 'password-length', text: '8 Letters', met: validation.passwordIsValidLength},
                    {id: 'password-numbers', text: '1 Number', met: validation.passwordHasNumber},
                    {id: 'password-special', text: '1 Special Character', met: validation.passwordHasSpecialChar}
                ]}
            />
            <PasswordInput
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder='Confirm Password'
                label='Confirm Password'
                disabled={isLoading}
                state={fieldState.confirmPassword}
            />
            <Button
                type="submit"
                loading={isLoading}
                success={isSuccess}
                disabled={!isFormValid}
            >
                Submit
            </Button>
            <p id="login-redirect">
                Already have an account?{' '}
                <span onClick={() => router.push('/login')} id="login-link">
                     Log in!
                </span>
            </p>
        </Form>
    )
}
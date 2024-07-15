import type { Validation } from '@/models/Validation.model';

export const validateInput = (input: string, validator: 'username' | 'email' | 'password'): Validation => {
    switch (validator) {
        case 'username':
            return usernameValidator(input);
        case 'email':
            return emailValidator(input);
        case 'password':
            return passwordValidator(input);
        default:
            throw new Error(
                `Validator ${validator} could not be found. Please make sure you are using a validator among the following: username, email, password.`,
            );
    }
};

export const usernameValidator = (input: string): Validation => {
    const re = /^[A-Za-z\d'_\-*]{3,50}$/;

    return {
        isValid: re.test(input),
        errorMessage:
            'You must enter a valid username. It should contain between 3 and 50 characters. Allowed characters are letters, numbers, dash, underscore, apostrophes and asterisks.',
    };
};

export const emailValidator = (input: string): Validation => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return {
        isValid: re.test(input),
        errorMessage: 'You must enter a valid email address.',
    };
};

export const passwordValidator = (input: string): Validation => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[^\s]{8,255}$/;
    return {
        isValid: re.test(input),
        errorMessage:
            'You must enter a valid password. It should be a strong password of minimum 8 characters and maximum 255 characters, including uppercase, lowercase, number, and special character.',
    };
};

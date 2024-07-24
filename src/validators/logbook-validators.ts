import type { Validation } from '@/interfaces/Validation.interface';

export const titleValidator = (input: string): Validation => {
    const re = /^[A-Za-z\d'_\-* ]{3,50}$/;
    return {
        isValid: re.test(input),
        errorMessage:
            'You must enter a title for your Logbook. It should be between 3 and 50 characters long. It can only include letters, numbers, spaces, dashes,apostrophes, underscores, asterisks and spaces',
    };
};

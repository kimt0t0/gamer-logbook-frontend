import type { Validation } from '@/interfaces/Validation.interface';
import { useGamesStore } from '@/stores/games.store';

export const titleValidator = (input: string): Validation => {
    const re = /^[A-Za-z\d'_\-* ]{3,50}$/;
    return {
        isValid: re.test(input),
        errorMessage:
            'You must enter a title for your Logbook. It should be between 3 and 50 characters long. It can only include letters, numbers, spaces, dashes,apostrophes, underscores, asterisks and spaces',
    };
};

export const logbookGameValidator = (gameTitle?: string): Validation => {
    if (!gameTitle || gameTitle.length <= 0) {
        return {
            isValid: true,
        };
    } else {
        const existingGameIndex = useGamesStore().games?.findIndex((game) => game.title == gameTitle);
        if (existingGameIndex != -1) {
            return {
                isValid: true,
            };
        } else {
            return {
                isValid: false,
                errorMessage: `Selected game: ${gameTitle} could not be found in database. Please make sure it exists in the application. If not you can add it by clicking the button below.`,
            };
        }
    }
};

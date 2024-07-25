import type { GameData } from '@/models/GameData.model';
import axiosInstance from '@/services/api';
import type { UUID } from 'crypto';

export const getGamesUtil = async (): Promise<GameData[] | undefined> => {
    try {
        const games = await axiosInstance.get('/games');
        return games.data;
    } catch (e) {
        console.error(`Oups, could not read games due to error: ${e}`);
    }
};

export const getGameByIdUtil = async (gameId: UUID): Promise<GameData | undefined> => {
    try {
        const game = await axiosInstance.get(`/games/${gameId}`);
        return game.data;
    } catch (e) {
        console.error(`Oups, could not read game with id ${gameId} due to error: ${e}`);
    }
};

export const getGameByTitleUtil = async (gameTitle: string): Promise<GameData | undefined> => {
    try {
        const game = await axiosInstance.get(`/games/title/${gameTitle}`);
        return game.data;
    } catch (e) {
        console.error(`Oups, could not read game with title ${gameTitle} due to error: ${e}`);
    }
};

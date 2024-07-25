import type { GameData } from '@/models/GameData.model';
import { getGameByIdUtil, getGameByTitleUtil, getGamesUtil } from '@/utils/games.utils';
import type { UUID } from 'crypto';

export const useGames = () => {
    const getGames = async (): Promise<GameData[] | void> => {
        try {
            const games = await getGamesUtil();
            return games;
        } catch (e) {
            console.error('Oups, games could not be loaded !');
        }
    };

    const getGameById = async (gameId: UUID): Promise<GameData | void> => {
        try {
            const game = await getGameByIdUtil(gameId);
            return game;
        } catch (e) {
            console.error(`Oups, game with id ${gameId} could not be loaded !`);
        }
    };

    const getGameByTitle = async (gameTitle: string): Promise<GameData | void> => {
        try {
            const game = await getGameByTitleUtil(gameTitle);
            return game;
        } catch (e) {
            console.error(`Oups, game with title ${gameTitle} could not be loaded !`);
        }
    };

    return {
        getGames,
        getGameById,
        getGameByTitle,
    };
};

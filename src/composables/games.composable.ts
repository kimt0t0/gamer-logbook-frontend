import type { GameData } from '@/models/GameData.model';
import { getGamesUtil } from '@/utils/games.utils';

export const useGames = () => {
    const getGames = async (): Promise<GameData[] | void> => {
        try {
            const games = await getGamesUtil();
            return games;
        } catch (e) {
            console.error('Oups, games could not be loaded !');
        }
    };

    return {
        getGames,
    };
};

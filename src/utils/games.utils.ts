import type { GameData } from '@/models/GameData.model';
import axiosInstance from '@/services/api';

export const getGamesUtil = async (): Promise<GameData[] | undefined> => {
    try {
        const games = await axiosInstance.get('/games');
        return games.data;
    } catch (e) {
        console.error(`Oups, could not read games due to error: ${e}`);
    }
};

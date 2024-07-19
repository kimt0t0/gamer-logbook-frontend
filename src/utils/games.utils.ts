import type { GameData } from '@/models/GameData.model';
import axiosInstance from '@/services/api';

export const getGamesUtil = (): Promise<GameData[]> => {
    return axiosInstance.get('/games');
};

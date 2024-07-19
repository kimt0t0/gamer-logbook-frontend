import { useGames } from '@/composables/games.composable';
import type { GameData } from '@/models/GameData.model';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGamesStore = defineStore('games', () => {
    const games = ref<GameData[] | void>();

    const getGames = async (): Promise<void> => {
        games.value = await useGames().getGames();
    };

    return {
        getGames,
        games,
    };
});

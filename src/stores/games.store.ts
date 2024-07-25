import { useGames } from '@/composables/games.composable';
import type { GameData } from '@/models/GameData.model';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGamesStore = defineStore('games', () => {
    // Games data
    const games = ref<GameData[] | void>();

    const getGames = async (): Promise<void> => {
        games.value = await useGames().getGames();
    };

    // Modal handling
    const isShowModal = ref<boolean>(true);

    const toggleShowModal = (): void => {
        isShowModal.value = !isShowModal.value;
    };

    return {
        getGames,
        games,
        isShowModal,
        toggleShowModal,
    };
});

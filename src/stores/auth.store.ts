import { defineStore } from 'pinia';
import { computed } from 'vue';

export const useAuthStore = defineStore('auth', () => {
    // Authentification state
    const computedUserAuth = computed(() => localStorage.getItem('authenticatedUser'));
    const setAuth = (access_token: string): void => {
        localStorage.clear();
        localStorage.setItem('authenticatedUser', access_token);
    };

    const resetAuth = (): void => {
        localStorage.clear();
    };

    // Exports
    return {
        computedUserAuth,
        setAuth,
        resetAuth,
    };
});

import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
    // Authentification state
    const userAuth = ref<string | null>();

    const computedUserAuth = computed(() => (userAuth.value = localStorage.getItem('authenticatedUser')));

    const setAuth = (access_token: string): void => {
        localStorage.setItem('authenticatedUser', access_token);
        userAuth.value = localStorage.getItem('authenticatedUser');
    };

    const resetAuth = (): void => {
        localStorage.clear();
        userAuth.value = localStorage.getItem('authenticatedUser');
    };

    // Exports
    return {
        userAuth,
        setAuth,
        resetAuth,
    };
});

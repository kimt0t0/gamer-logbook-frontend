import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useAuthentificationStore = defineStore('authentification', () => {
    // Authentification state
    // const userAuth = ref<{
    //     token: UserToken
    // }>();
    const userAuth = ref<string | null>();

    const computedUserAuth = computed(() => (userAuth.value = localStorage.getItem('authenticatedUser')));

    const setAuth = (): void => {
        localStorage.setItem('authenticatedUser', 'isConnected');
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

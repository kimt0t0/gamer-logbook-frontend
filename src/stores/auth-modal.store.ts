import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthModalStore = defineStore('auth-modal', () => {
    // Open / Close modal
    const isOpened = ref<boolean>(false);

    const toggleModal = (): void => {
        isOpened.value = !isOpened.value;
    };

    const openModal = (): void => {
        isOpened.value = true;
    };

    const closeModal = (): void => {
        isOpened.value = false;
    };

    // Signup / Login toggle
    const hasAccount = ref<boolean>(true);

    const toggleHasAccount = (): void => {
        hasAccount.value = !hasAccount.value;
    };

    // Exports
    return {
        // Open / Close modal
        isOpened,
        toggleModal,
        openModal,
        closeModal,
        // Signup / Login toggle
        hasAccount,
        toggleHasAccount,
    };
});

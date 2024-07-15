<script setup lang="ts">
import { useAuthModalStore } from '@/stores/auth-modal';
import { useAuthentificationStore } from '@/stores/authentification';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isMobileNavActive = ref<boolean>(false);

const openMobileNav = (): void => {
    isMobileNavActive.value = true;
};
const closeMobileNav = (): void => {
    isMobileNavActive.value = false;
};
const toggleMobileNav = (): void => {
    isMobileNavActive.value = !isMobileNavActive.value;
};
</script>

<template>
    <header>
        <h1>
            <img src="@icons/gl-icon.svg" alt="Official icon of Gamer Logbook" class="h1-icon" />Gamer
            <span class="colored-linear-primary">Logbook</span>
        </h1>
        <!-- DESKTOP NAV -->
        <nav class="desktop-nav">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/dashboard" v-if="useAuthentificationStore().userAuth != null">Dashboard</RouterLink>
            <RouterLink to="/design-test">Design Test</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
        <!-- MOBILE NAV -->
        <div class="horizontal-display __mobile-nav">
            <div class="mobile-nav-container">
                <Button>
                    <menu-icon @click="toggleMobileNav"></menu-icon>
                </Button>
                <nav class="mobile-nav" v-if="isMobileNavActive">
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/dashboard" v-if="useAuthentificationStore().userAuth != null">Dashboard</RouterLink>
                    <RouterLink to="/design-test">Design Test</RouterLink>
                    <RouterLink to="/about">About</RouterLink>
                </nav>
            </div>
            <!-- USER AUTH / LEAVE -->
            <Button @click="useAuthModalStore().toggleModal" v-if="useAuthentificationStore().userAuth == null">
                <account-icon></account-icon>
            </Button>
            <Button @click="useAuthentificationStore().resetAuth" v-else>
                <account-off-icon></account-off-icon>
            </Button>
        </div>
    </header>
</template>

<style lang="scss">
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: $dark;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $space-s $space-m $space-l;
    border-bottom: 1px solid color($white, 20);
    @media (max-width: 500px) {
        position: relative;
        flex-direction: column;
        justify-content: flex-start;
        gap: $space-l;
    }
}

.desktop-nav {
    display: flex;
    justify-content: space-around;
    gap: $space-xl;
    @media (max-width: $bp-l) {
        display: none;
    }

    a.router-link-exact-active {
        color: $primary;
        border-bottom: 4px solid $primary;
    }
}

.mobile-nav-container {
    position: relative;
    display: none;
    @media (max-width: $bp-l) {
        display: block;
        position: relative;
    }
    .mobile-nav {
        position: absolute;
        right: 0;
        margin-top: $space-s;
        display: flex;
        flex-direction: column;
        background-color: $dark;
        > a {
            width: 160px;
            border: 1px solid $primary;
            padding: $space-s;
            &:hover {
                color: $primary;
            }
            &.router-link-exact-active {
                background-color: $primary;
                color: $dark;
            }
        }
    }
}
</style>

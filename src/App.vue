<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <header>
        <h1>Gamer Logbook</h1>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
    </header>

    <Transition name="fade">
        <RouterView />
    </Transition>
</template>

<style lang="scss">
@import '@/assets/styles/theme.scss';

header {
    line-height: 1.5;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 4px 16px;
    border-bottom: 6px double #000;
}

nav {
    display: flex;
    justify-content: space-around;
    gap: 16px;

    a {
        color: blue;

        &:hover {
            text-decoration: none;
        }

        &.router-link-exact-active {
            color: green;
        }
    }
}
</style>

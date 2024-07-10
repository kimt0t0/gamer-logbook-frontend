<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <h1>Gamer <span class="title-gradient-primary">Logbook</span></h1>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/design-test">Design Test</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
        <Button>Signup</Button>
    </header>
</template>

<style lang="scss">
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $space-s $space-m $space-l;
    border-bottom: 1px solid color($white, 20);
}

nav {
    display: flex;
    justify-content: space-around;
    gap: $space-xl;

    a.router-link-exact-active {
        color: $primary;
        border-bottom: 4px solid $primary;
    }
}
</style>

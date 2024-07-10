<script setup lang="ts">
import { RouterView } from 'vue-router';
import Footer from './components/layout/Footer.vue';
import Header from './components/layout/Header.vue';
</script>

<template>
    <Header />

    <main>
        <Transition name="fade">
            <RouterView />
        </Transition>
    </main>
    <Footer />
</template>

<style lang="scss">
@import '@/assets/styles/theme.scss';
</style>

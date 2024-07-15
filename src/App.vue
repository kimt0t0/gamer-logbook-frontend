<script setup lang="ts">
import { RouterView } from 'vue-router';
import AuthModal from './components/auth/AuthModal.vue';
import Footer from './components/layout/Footer.vue';
import Header from './components/layout/Header.vue';
</script>

<template>
    <Header />

    <main>
        <AuthModal></AuthModal>
        <Suspense>
            <Transition name="fade">
                <RouterView />
            </Transition>
        </Suspense>
    </main>
    <Footer />
</template>

<style lang="scss">
@import '@/assets/styles/theme.scss';
</style>

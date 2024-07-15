<script setup lang="ts">
import { useAuthentificationStore } from '@/stores/authentification';
</script>

<template>
    <section class="vertical-display">
        <!-- Non authentified user -->
        <PageGuard v-if="!useAuthentificationStore().userAuth" />
        <!-- Page contents -->
        <h2>User Settings</h2>
    </section>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth.store';
</script>

<template>
    <section class="vertical-display">
        <!-- Non authentified user -->
        <PageGuard v-if="!useAuthStore().userAuth" />
        <!-- Page contents -->
        <h2>User Settings</h2>
    </section>
</template>

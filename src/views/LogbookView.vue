<script setup lang="ts">
import LogbookEditor from '@/components/logbook/LogbookEditor.vue';
import { useAuthStore } from '@/stores/auth.store';
</script>
<template>
    <!-- Non authentified user -->
    <PageGuard v-if="!useAuthStore().userAuth" />
    <!-- Page contents -->
    <section class="vertical-display logbook-section" v-else>
        <div class="view-headgroup">
            <h2 class="colored-primary">Logbook's Title</h2>
            <p class="subtitle">Your logbook for <span class="colored-primary">Game's Name</span></p>
        </div>
        <LogbookEditor />
    </section>
</template>

<style lang="scss" scoped>
.logbook-section {
    gap: $space-xl;
}
</style>

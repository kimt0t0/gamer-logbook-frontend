<script setup lang="ts">
import AddGame from '@/components/logbook/AddGame.vue';
import LogbookEditor from '@/components/logbook/LogbookEditor.vue';
import { useAuthStore } from '@/stores/auth.store';
import { useGamesStore } from '@/stores/games.store';
import { onBeforeMount, onUpdated } from 'vue';

onBeforeMount(() => {
    useGamesStore().getGames();
});

onUpdated(() => {
    useGamesStore().getGames();
});
</script>
<template>
    <!-- Non authentified user -->
    <PageGuard v-if="!useAuthStore().computedUserAuth" />
    <!-- Page contents -->
    <section class="vertical-display logbook-section" v-else>
        <div class="view-headgroup">
            <h2 class="colored-primary">Logbook's Title</h2>
            <p class="subtitle">Your logbook for <span class="colored-primary">Game's Name</span></p>
        </div>
        <LogbookEditor />
        <AddGame />
    </section>
</template>

<style lang="scss" scoped>
.logbook-section {
    gap: $space-xl;
    position: relative;
}
</style>

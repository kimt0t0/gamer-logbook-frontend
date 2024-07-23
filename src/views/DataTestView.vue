<script setup lang="ts">
import type { GameData } from '@/models/GameData.model';
import { useGamesStore } from '@/stores/games.store';
import { onBeforeMount, ref } from 'vue';

const games = ref<GameData[] | void>();

onBeforeMount(async () => {
    games.value = await useGamesStore().getGames();
});
</script>

<template>
    <section class="vertical-display" v-if="useGamesStore().games">
        <h2>Games</h2>
        <div class="items-displayer">
            <div class="game-card" v-for="(game, index) in useGamesStore().games" :key="index">
                <h3>{{ game.title }}</h3>
                <p>Added by: {{ game.owner }}</p>
                <!-- <img :src="game.imageUrl" title="game-illus" /> -->
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.items-displayer {
    display: flex;
    flex-wrap: wrap;
    gap: $space-l;
    &.__larger-gap {
        gap: $space-xxl;
    }
}
</style>

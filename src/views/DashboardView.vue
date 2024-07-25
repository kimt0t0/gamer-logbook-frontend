<script setup lang="ts">
import { useAuthStore } from '@/stores/auth.store';

var logbooks: Array<{
    title: string;
    id: string;
    isFavorite?: boolean;
    imagePath?: string;
    color?: string;
}> = [
    {
        title: 'GRIS',
        id: '1',
        isFavorite: true,
        imagePath: 'https://www.4gamer.net/games/444/G044434/screenshot_3.jpg',
    },
    {
        title: 'Borderlands 2',
        id: '2',
    },
    {
        title: 'Zelda, Breath of the Wild',
        id: '3',
    },
    {
        title: 'Wayfarers',
        id: '4',
    },
].sort((a, b) => Number(b.isFavorite) - Number(a.isFavorite) && a.title.localeCompare(b.title));

const onDeleteLogbook = (): void => {
    alert('Logbook deleted !');
};

const onLogbookFavorite = (): void => {
    alert('Logbook tagged as favorite !');
};
</script>
<template>
    <!-- Non authentified user -->
    <PageGuard v-if="!useAuthStore().computedUserAuth" />
    <!-- View content -->
    <section class="vertical-display dashboard-section" v-else>
        <div class="view-headgroup">
            <h2>Welcome <span class="colored-secondary">Username !</span></h2>
            <p class="subtitle">
                Here you can access <span class="colored-secondary">your logbooks,</span> open them, create new ones or delete them.
            </p>
        </div>
        <RouterLink class="small-link" to="/user-settings">Edit your account information</RouterLink>
        <ul class="logbooks-list">
            <li class="logbook-item">
                <CardLink path="/logbook" color="new">
                    <plus-circle-icon class="new-logbook-icon" size="48"></plus-circle-icon>
                </CardLink>
            </li>
            <li class="logbook-item" v-for="(logbook, index) in logbooks" :key="index">
                <CardLink :title="logbook.title" :color="logbook.isFavorite ? 'secondary' : ''" path="/logbook" :imagePath="logbook.imagePath">
                    <div class="actions-container">
                        <Button class="favorite-button" @click="onLogbookFavorite">
                            <star-icon v-if="logbook.isFavorite"></star-icon>
                            <star-plus-icon v-else></star-plus-icon>
                        </Button>
                        <Button class="delete-button" color="danger" @click="onDeleteLogbook">
                            <delete-empty-icon></delete-empty-icon>
                        </Button>
                    </div>
                </CardLink>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
.dashboard-section {
    display: flex;
    flex-direction: column;
    gap: $space-xxl;
    @media (max-width: $bp-m) {
        gap: $space-xl;
    }
}

.logbooks-list {
    box-sizing: border-box;
    padding-top: $space-xxl;
    display: flex;
    flex-wrap: wrap;
    gap: $space-m;
    @media (max-width: $bp-m) {
        padding-top: $space-l;
    }
}

.actions-container {
    position: absolute;
    z-index: 3;
    bottom: $space-s;
    right: $space-s;
    display: flex;
    gap: $space-s;
}
</style>

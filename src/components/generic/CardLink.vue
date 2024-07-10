<script setup lang="ts">
const props = defineProps<{
    title?: string;
    icon?: string;
    color?: string;
    path: string;
    imagePath: string;
}>();
</script>

<template>
    <RouterLink :class="'cardlink' + ' cardlink-colored-' + color" :to="path">
        <div class="cardlink-contents" :style="{ backgroundImage: `url(${props.imagePath})` }">
            <h3 class="cardlink-title">{{ title }}</h3>
        </div>
    </RouterLink>
</template>

<style lang="scss" scoped>
.cardlink {
    padding-bottom: $space-s;
    border-bottom: 8px solid transparent;
    > .cardlink-contents {
        border: 2px solid $white;
        border-radius: $radius-xs;
        box-sizing: border-box;
        width: 20vw;
        height: 20vw;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: cover;
        background-position: center;
        position: relative;
        &::after {
            content: '';
            position: absolute;
            z-index: 1;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: $dark;
            opacity: 0.3;
            transition: all 600ms ease-in-out;
        }
        > .cardlink-title {
            z-index: 2;
            color: $white;
        }
    }

    &:hover {
        border-bottom-color: $primary;
        > .cardlink-contents {
            color: $primary;
            &::after {
                display: none;
            }
        }
    }

    &.cardlink-colored-new {
        > .cardlink-contents {
            justify-content: center;
            align-items: center;
            color: $primary;
            border-color: $primary;
        }
        &:hover {
            border-bottom-color: color($primary, 60);
            > .cardlink-contents {
                color: color($primary, 60);
                border-color: color($primary, 60);
            }
        }
    }
}
</style>

<script setup lang="ts">
const props = defineProps<{
    title?: string;
    color?: string;
    path: string;
    imagePath: string;
}>();
</script>

<template>
    <RouterLink :class="'cardlink' + ' cardlink-colored-' + color" :to="path">
        <div class="cardlink-contents" :style="{ backgroundImage: `url(${props.imagePath})` }">
            <h3 class="cardlink-title">{{ title }}</h3>
            <slot></slot>
        </div>
    </RouterLink>
</template>

<style lang="scss" scoped>
.cardlink {
    display: flex;
    width: fit-content;
    padding-bottom: $space-s;
    border-bottom: 8px solid transparent;
    > .cardlink-contents {
        border: 2px solid $white;
        border-radius: $radius-xs;
        box-sizing: border-box;
        min-width: 20vw;
        width: 20vw;
        max-width: 20vw;
        min-height: 20vw;
        height: 20vw;
        max-height: 20vw;
        padding: $space-s;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: cover;
        background-position: center;
        position: relative;
        @media (max-width: $bp-l) {
            min-width: 25vw;
            width: auto;
            max-width: 28vw;
            min-height: 25vw;
            height: auto;
            max-height: 28vw;
        }
        @media (max-width: $bp-s) {
            min-width: 35vw;
            width: 35vw;
            max-width: 35vw;
            min-height: 35vw;
            height: 35vw;
            max-height: 35vw;
        }
        @media (max-width: $bp-xs) {
            min-width: initial;
            max-width: initial;
            min-height: initial;
            max-height: initial;
            width: 90vw;
            height: 90vw;
        }
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
        > .cardlink-contents,
        .cardlink-contents > .cardlink-title {
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
            color: color($primary, 50);
            border-color: color($primary, 50);
            &::after {
                display: none;
            }
            > .new-logbook-icon {
                color: $primary;
            }
        }
        &:hover {
            border-bottom-color: color($primary, 50);
        }
    }

    &.__cardlink-colored-secondary {
        > .cardlink-contents {
            color: color($secondary, 50);
            border-color: color($secondary, 50);
        }
    }
}
</style>

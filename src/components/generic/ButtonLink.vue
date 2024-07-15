<script setup lang="ts">
defineProps<{
    type?: 'button' | 'submit';
    color?: string;
    size?: string;
}>();
</script>

<template>
    <button :type="type ? type : 'button'" :class="'btn-colored-' + color + ' btn-size-' + size">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
button {
    font-size: $font-m;
    font-weight: 600;
    background-color: transparent;
    color: color($white, 35);
    font-weight: 600;
    text-align: left;
    text-decoration: none;
    padding: $space-xs $space-m $space-xs 0;
    width: fit-content;
    height: fit-content;
    border: none;
    border-bottom: 4px solid transparent;
    cursor: pointer;
    @include classicTransition;
    &:hover {
        color: $white;
        border-bottom-color: $white;
    }

    &.btn-size-small {
        font-size: $font-xs;
        font-weight: 400;
        border-bottom: 2px solid transparent;
        @media (max-width: $bp-xxs) {
            font-size: $font-xxs;
        }
        &:hover {
            border-bottom-color: $white;
        }
    }

    &.btn-colored-primary {
        &:hover {
            color: $primary;
            border-bottom-color: $primary;
        }
    }
}
</style>

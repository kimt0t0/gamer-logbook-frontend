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
    display: flex;
    justify-content: center;
    align-items: center;
    gap: $space-s;
    font-size: $font-m;
    font-weight: 600;
    color: $primary;
    border: 2px solid $primary;
    border-radius: $radius-xxs;
    background-color: transparent;
    padding: $space-s;
    cursor: pointer;
    @include classicTransition;
    &:hover {
        background-color: $primary;
        color: $dark;
    }

    &.btn-colored-full {
        background-color: $primary;
        color: $dark;
        &:hover {
            background-color: color($primary, 50);
            border-color: color($primary, 50);
        }
    }

    &.btn-colored-secondary {
        color: $secondary;
        border-color: $secondary;
        &:hover {
            color: $dark;
            background-color: $secondary;
        }
    }

    &.btn-colored-secondary-full {
        background-color: $secondary;
        border-color: $secondary;
        color: $dark;
        &:hover {
            background-color: color($secondary, 54);
            border-color: color($secondary, 54);
        }
    }

    &.btn-colored-danger {
        color: $danger;
        border-color: $danger;
        &:hover {
            color: $dark;
            background-color: $danger;
        }
    }

    &.btn-colored-danger-full {
        background-color: $danger;
        border-color: $danger;
        color: $dark;
        &:hover {
            background-color: color($danger, 54);
            border-color: color($danger, 54);
        }
    }

    &:disabled {
        border-radius: $radius-xs;
        color: color($dark, 400);
        font-weight: 500;
        background-color: color($dark, 800);
        border-color: color($dark, 400);
    }
}
</style>

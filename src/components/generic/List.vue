<script setup lang="ts">
defineProps<{
    textItems: Array<string>;
    icon?: string;
    color?: string;
    animated?: boolean;
}>();
</script>

<template>
    <ul class="list">
        <li :class="'list-item list-item-colored-' + color + (animated ? ' list-item-animated' : '')" v-for="(text, index) in textItems" :key="index">
            <controller-classic-icon v-if="!icon" class="list-item-icon"></controller-classic-icon>
            <check-bold-icon v-else-if="icon == 'check'" class="list-item-icon"></check-bold-icon>
            {{ text }}
        </li>
    </ul>
</template>

<style lang="scss" scoped>
ul {
    box-sizing: border-box;
    max-width: 300px;
    padding: $space-s 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: $space-m;
    > li {
        display: inline-flex;
        white-space: normal;
        > .list-item-icon {
            margin-right: $space-m;
        }
    }
}

/* Colors */
.list-item-colored-primary {
    > .list-item-icon {
        color: color($primary, 60);
    }
}

.list-item-colored-secondary {
    > .list-item-icon {
        color: color($secondary, 40);
    }
}

/* Animation */
.list-item-animated {
    > .list-item-icon {
        cursor: pointer;
        transform-origin: center;
        transition: all 300ms ease-out;
        height: fit-content;
        &:hover {
            transform: rotate(-360deg);
        }
    }
}
</style>

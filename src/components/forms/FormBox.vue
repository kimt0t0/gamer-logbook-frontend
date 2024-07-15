<script setup lang="ts">
defineProps<{
    title?: string;
    titleColor?: string;
    onSubmitAction: ((payload: Event) => void) | undefined;
}>();
</script>
<template>
    <form @submit.prevent="onSubmitAction">
        <h3 v-if="title" :class="'colored-' + titleColor">{{ title }}</h3>
        <slot></slot>
    </form>
</template>

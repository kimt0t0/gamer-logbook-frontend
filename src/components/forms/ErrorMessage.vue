<script setup lang="ts">
import type { Validation } from '@/interfaces/Validation.interface';
defineProps<{
    validation: Validation;
}>();
</script>
<template>
    <p class="error-message" v-if="!validation.isValid">
        {{ validation.errorMessage }}
    </p>
</template>

<style lang="scss" scoped>
.error-message {
    color: color($danger, 50);
    font-size: $font-xxs;
    font-weight: 600;
    text-align: justify;
    white-space: normal;
    max-width: 500px;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{
    name: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    size?: number;
    inputValidator?: string;
    darkText?: true;
}>();

const inputValue = ref('');

const onInput = (event: Event) => {
    inputValue.value = (event.target as HTMLInputElement).value;
    // validateInput(inputvalue.value, inputValidator);
};
</script>

<template>
    <div :class="'input-container' + (inputValue ? ' has-value' : '')">
        <input
            v-if="required"
            type="text"
            :class="'text-input' + (darkText ? ' colored-dark' : '')"
            :id="name"
            :name="name"
            :minlength="minLength"
            :maxlength="maxLength"
            :size="size"
            v-model="inputValue"
            required
        />
        <input
            v-else
            type="text"
            class="text-input"
            :id="name"
            :name="name"
            :minlength="minLength"
            :maxlength="maxLength"
            :size="size"
            v-model="inputValue"
        />
        <label class="input-label" :for="name">{{ name }}</label>
    </div>
</template>

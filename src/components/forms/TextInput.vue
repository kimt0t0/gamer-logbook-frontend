<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{
    name: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    size?: number;
    inputValidator?: 'username' | 'email';
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
            type="text"
            :class="'text-input' + (darkText ? ' colored-dark' : '')"
            :id="name"
            :name="name"
            :minlength="minLength"
            :maxlength="maxLength"
            :size="size"
            v-model="inputValue"
            :required="required"
        />
        <label class="input-label" :for="name">{{ name }}</label>
    </div>
</template>

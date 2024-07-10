<script setup lang="ts">
import { ref } from 'vue';

const isHidden = ref<boolean>(true);
const toggleIsHidden = (): void => {
    isHidden.value = !isHidden.value;
};
const paswordValue = ref('');

const onInput = (event: Event) => {
    paswordValue.value = (event.target as HTMLInputElement).value;
    // validateInput(paswordValue.value, 'password');
};
</script>

<template>
    <div :class="'input-container' + (paswordValue ? ' has-value' : '')">
        <input
            :type="isHidden ? 'password' : 'text'"
            class="text-input password-input"
            id="password"
            name="password"
            minlength="8"
            maxlength="255"
            v-model="paswordValue"
            required
        />
        <button type="button" class="password-toggle-button" @click="toggleIsHidden()">
            <eye-icon class="password-button-icon" v-if="isHidden"></eye-icon>
            <eye-off-icon class="password-button-icon" v-else></eye-off-icon>
        </button>
        <label class="input-label" for="password">password</label>
    </div>
</template>

<style lang="scss" scoped>
.password-toggle-button {
    font-size: $font-m;
    font-weight: 600;
    color: color($white, 40);
    border: 2px solid color($white, 40);
    border-radius: $radius-xxs;
    background-color: transparent;
    padding: $space-s;
    cursor: pointer;
    @include classicTransition;
    &:hover {
        background-color: color($white, 40);
        border-color: color($white, 40);
        color: $dark;
    }
}
</style>

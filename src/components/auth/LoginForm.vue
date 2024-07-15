<script setup lang="ts">
import type { CredentialsLogin } from '@/models/CredentialsLogin.model';
import { passwordValidator, usernameValidator } from '@/validators/auth-validators';
import { computed, reactive, ref } from 'vue';

/* Show / hide password */
const isPasswordHidden = ref<boolean>(true);

const toggleIsPasswordHidden = (): void => {
    isPasswordHidden.value = !isPasswordHidden.value;
};

/* Form data */
const credentials = reactive<CredentialsLogin>({
    username: '',
    password: '',
});

/* Form validation */
const formIsValid = computed(() => {
    return usernameValidator(credentials.username).isValid && passwordValidator(credentials.password).isValid;
});

/* Form submit */
function onSubmitLogin(): void {
    if (!formIsValid) {
        throw new Error(
            `Attempted to submit invalid form. Form validation results are as follow: ${usernameValidator(credentials.username)}, ${passwordValidator(credentials.password)}`,
        );
    }
    alert(`Submit form with username: ${credentials.username} and password: ${credentials.password}`);
}
</script>

<template>
    <FormBox :onSubmitAction="onSubmitLogin">
        <!-- Username -->
        <div :class="'input-container' + (credentials.username.length > 0 ? ' has-value' : '')">
            <input
                type="text"
                class="text-input"
                id="username"
                name="username"
                minlength="3"
                maxlength="50"
                v-model="credentials.username"
                required
            />
            <label class="input-label" for="username">username</label>
        </div>
        <!-- Password -->
        <div :class="'input-container password-container' + (credentials.password.length > 0 ? ' has-value' : '')">
            <input
                :type="isPasswordHidden ? 'password' : 'text'"
                class="text-input password-input"
                id="password"
                name="password"
                minlength="8"
                maxlength="255"
                v-model="credentials.password"
                required
            />
            <label class="input-label" for="password">password</label>
            <button type="button" class="password-toggle-button" @click="toggleIsPasswordHidden()">
                <eye-icon class="password-button-icon" v-if="isPasswordHidden"></eye-icon>
                <eye-off-icon class="password-button-icon" v-else></eye-off-icon>
            </button>
        </div>
        <!-- Submit -->
        <div class="center-content">
            <Button type="submit" class="auth-submit-button" :disabled="!formIsValid">Envoyer</Button>
        </div>
    </FormBox>
</template>

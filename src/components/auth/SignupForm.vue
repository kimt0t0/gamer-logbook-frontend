<script setup lang="ts">
import type { CredentialsSignup } from '@/models/CredentialsSignup.model';
import { useAuthModalStore } from '@/stores/auth-modal';
import { emailValidator, passwordValidator, usernameValidator } from '@/validators/auth-validators';
import { computed, reactive, ref } from 'vue';

/* Show / hide password */
const isPasswordHidden = ref<boolean>(true);

const toggleIsPasswordHidden = (): void => {
    isPasswordHidden.value = !isPasswordHidden.value;
};

/* Form data */
const credentials = reactive<CredentialsSignup>({
    username: '',
    email: '',
    password: '',
});

/* Form validation */
const formIsValid = computed((): boolean => {
    return (
        usernameValidator(credentials.username).isValid &&
        emailValidator(credentials.email).isValid &&
        passwordValidator(credentials.password).isValid
    );
});

/* Form submit */
function onSubmitSignup(): void {
    if (!formIsValid) {
        throw new Error(
            `Attempted to submit invalid form. Form validation results are as follow: ${usernameValidator(credentials.username)}, ${emailValidator(credentials.email)}, ${passwordValidator(credentials.password)}`,
        );
    }
    alert(`Submit signup with username: ${credentials.username}, email: ${credentials.email} and password: ${credentials.password}`);
    useAuthModalStore().closeModal();
}
</script>

<template>
    <FormBox title="Signup" :onSubmitAction="onSubmitSignup">
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
        <!-- Email -->
        <div :class="'input-container' + (credentials.email.length > 0 ? ' has-value' : '')">
            <input type="text" class="text-input" id="email" name="email" minlength="7" maxlength="150" v-model="credentials.email" required />
            <label class="input-label" for="email">email</label>
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
        <div class="center-content">
            <Button type="submit" class="auth-submit-button" :disabled="!formIsValid">Envoyer</Button>
        </div>
    </FormBox>
</template>

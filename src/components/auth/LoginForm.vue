<script setup lang="ts">
import type { CredentialsLogin } from '@/models/CredentialsLogin.model';
import { useAuthModalStore } from '@/stores/auth-modal';
import { useAuthentificationStore } from '@/stores/authentification';
import { emailValidator, passwordValidator } from '@/validators/auth-validators';
import { computed, reactive, ref } from 'vue';

/* Show / hide password */
const isPasswordHidden = ref<boolean>(true);

const toggleIsPasswordHidden = (): void => {
    isPasswordHidden.value = !isPasswordHidden.value;
};

/* Form data */
const credentials = reactive<CredentialsLogin>({
    email: '',
    password: '',
});

/* Form validation */
const formIsValid = computed((): boolean => {
    return emailValidator(credentials.email).isValid && passwordValidator(credentials.password).isValid;
});

/* Form submit */
function onSubmitLogin(): void {
    // Check form
    if (!formIsValid) {
        throw new Error(
            `Attempted to submit invalid form. Form validation results are as follow: ${emailValidator(credentials.email)}, ${passwordValidator(credentials.password)}`,
        );
    }
    // Set authentification token
    useAuthentificationStore().setAuth();
    useAuthModalStore().closeModal();
}
</script>

<template>
    <FormBox :onSubmitAction="onSubmitLogin">
        <!-- Username -->
        <div class="input-group">
            <div :class="'input-container' + (credentials.email.length > 0 ? ' has-value' : '')">
                <input type="text" class="text-input" id="email" name="email" minlength="3" maxlength="50" v-model="credentials.email" required />
                <label class="input-label" for="email">email</label>
            </div>
            <ErrorMessage v-if="credentials.email.length > 0" :validation="emailValidator(credentials.email)" />
        </div>
        <!-- Password -->
        <div class="input-group">
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
            <ErrorMessage v-if="credentials.password.length > 0" :validation="passwordValidator(credentials.password)" />
        </div>
        <!-- Submit -->
        <div class="center-content">
            <Button type="submit" class="auth-submit-button" :disabled="!formIsValid">Envoyer</Button>
        </div>
    </FormBox>
</template>

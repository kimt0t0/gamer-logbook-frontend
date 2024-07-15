<script setup lang="ts">
import { useAuthModalStore } from '@/stores/auth-modal';
import LoginForm from './LoginForm.vue';
import SignupForm from './SignupForm.vue';
</script>

<template>
    <div class="auth-modal-container" v-if="useAuthModalStore().isOpened">
        <div class="auth-modal">
            <div class="auth-modal-headgroup">
                <div class="view-headgroup">
                    <h2>{{ useAuthModalStore().hasAccount ? 'Login' : 'Signup' }}</h2>
                    <ButtonLink size="small" color="primary" @click="useAuthModalStore().toggleHasAccount">
                        {{ useAuthModalStore().hasAccount ? "I don't have an account (yet !)" : 'I already have an account' }}
                    </ButtonLink>
                </div>
                <Button @click="useAuthModalStore().closeModal">
                    <close-thick-icon></close-thick-icon>
                </Button>
            </div>
            <LoginForm v-if="useAuthModalStore().hasAccount" />
            <SignupForm v-else />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.auth-modal-container {
    position: fixed;
    z-index: 2;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
}

.auth-modal {
    box-sizing: border-box;
    padding: $space-m;
    min-width: 800px;
    max-width: 1200px;
    min-height: 400px;
    border: 1px solid color($primary, 50);
    border-radius: $radius-xs;
    background-color: color($dark, 50);

    @media (max-width: 850px) {
        min-width: initial;
        /* width: 100%; */
    }
}

.auth-modal-headgroup {
    display: flex;
    justify-content: space-between;
    > .view-headgroup {
        margin-bottom: $space-l;
    }
}
</style>

<script setup lang="ts">
import { useAuth } from '@/composables/auth.composable';
import type { UserExtendedData } from '@/interfaces/UserExtendedData.interface';
import { useAuthStore } from '@/stores/auth.store';
import { onBeforeMount, ref } from 'vue';

const user = ref<UserExtendedData | void>();
onBeforeMount(async () => {
    user.value = await useAuth().getUserAuth();
});
</script>

<template>
    <section class="vertical-display">
        <!-- Non authentified user -->
        <PageGuard v-if="!useAuthStore().computedUserAuth" />
        <!-- Page contents -->
        <section class="vertical-display">
            <div class="home-title-container">
                <h2>
                    Welcome to your account settings <span class="colored-secondary">{{ user?.username }}!</span>
                </h2>
                <p class="subtitle">
                    Here you can <span class="colored-secondary">edit your details</span>. Please make sure you enter your email and password for any
                    important change.
                </p>
            </div>
        </section>
    </section>
</template>

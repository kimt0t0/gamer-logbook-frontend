<script setup lang="ts">
function onSubmitSignup(): void {
    alert('Submit signup !');
}
</script>

<template>
    <FormBox title="Signup" :onSubmitAction="onSubmitSignup">
        <TextInput name="username" required="true" minLength="3" maxLength="50" inputValidator="username" />
        <TextInput name="email" required="true" minLength="7" maxLength="180" inputValidator="email" />
        <Password />
        <div class="center-content">
            <Button type="submit" class="auth-submit-button">Envoyer</Button>
        </div>
    </FormBox>
</template>

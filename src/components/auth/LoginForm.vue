<script setup lang="ts">
function onSubmitLogin(): void {
    alert('Submit login !');
}
</script>

<template>
    <FormBox :onSubmitAction="onSubmitLogin">
        <TextInput name="username" required="true" minLength="3" maxLength="50" inputValidator="username" />
        <Password />
        <div class="center-content">
            <Button type="submit" class="auth-submit-button">Envoyer</Button>
        </div>
    </FormBox>
</template>

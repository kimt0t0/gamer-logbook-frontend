<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill';
import BlotFormatter from 'quill-blot-formatter';
import 'quill/dist/quill.bubble.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';

const quillModules = {
    name: 'blotFormatter',
    module: BlotFormatter,
    options: {
        /* options */
    },
};
</script>

<template>
    <form class="logbook-form">
        <TextInput name="title" required="true" minLength="3" maxLength="30" inputValidator="titleValidator" :darkText="true" />
        <div class="quill-container">
            <QuillEditor :modules="quillModules" toolbar="full" />
        </div>
        <div class="actions-container">
            <Button type="submit"><content-save-icon></content-save-icon>Save </Button>
        </div>
    </form>
</template>

<style lang="scss" scoped>
.logbook-form {
    background-color: color($primary, 90);
    color: $dark;
}

.quill-container {
    box-sizing: border-box;
    height: 340px;
    max-height: 340px;
    padding-bottom: $space-xxl;
    overflow-y: scroll;
    scrollbar-width: thin;
    border-radius: $radius-xxs;
}

.actions-container {
    width: fit-content;
    padding: $space-m $space-xxl $space-s 0;
    border-top: 4px solid color($primary, 50);
}

button {
    &:hover > span {
        transform: rotate(360deg);
    }
    > span {
        padding-top: $space-xs;
        @include classicTransition;
    }
}
</style>

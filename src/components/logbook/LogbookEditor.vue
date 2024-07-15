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
    max-width: 1000px;
    background-color: color($primary, 95); // or try color($primary, 45)
    color: $dark;
    border: 2px solid color($primary, 50);
}

.quill-container {
    box-sizing: border-box;
    height: 340px;
    max-height: 340px;
    padding-bottom: $space-xl;
    overflow-y: scroll;
    scrollbar-width: thin;
    border-radius: $radius-xxs;
    @media (max-width: $bp-l) {
        padding-bottom: $space-m;
    }
    @media (max-width: $bp-s) {
        padding-bottom: 0;
        border-bottom: 4px solid color($primary, 50);
    }
}

.actions-container {
    width: fit-content;
    padding: $space-m $space-xxl $space-s 0;
    border-top: 4px solid color($primary, 50);

    @media (max-width: $bp-s) {
        width: initial;
        padding: 0;
        display: flex;
        justify-content: center;
        border-top: none;
    }
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

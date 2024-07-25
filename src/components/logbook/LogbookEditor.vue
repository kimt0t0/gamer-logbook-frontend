<script setup lang="ts">
import type { Validation } from '@/interfaces/Validation.interface';
import type { LogbookData } from '@/models/LogbookData.model';
import { useGamesStore } from '@/stores/games.store';
import { logbookGameValidator, titleValidator } from '@/validators/logbook-validators';
import { QuillEditor } from '@vueup/vue-quill';
import BlotFormatter from 'quill-blot-formatter';
import 'quill/dist/quill.bubble.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import { computed, reactive } from 'vue';

/* Quill Settings */
const quillModules = {
    name: 'blotFormatter',
    module: BlotFormatter,
    options: {
        /* options */
    },
};

/* Form Data */
const logbookData = reactive<LogbookData>({
    title: 'My Logbook',
    contents: 'Lorem Ipsum',
    gameId: undefined,
    gameTitle: undefined,
});

const titleValidation = computed((): Validation => titleValidator(logbookData.title));
const gameValidation = computed((): Validation => logbookGameValidator(logbookData.gameTitle));
/* Form validator */
const formIsValid = computed((): boolean => {
    return titleValidation.value.isValid && gameValidation.value.isValid;
});

/* Form submit */
const onSubmitLogbook = (): void => {
    // Check form
    if (!formIsValid) {
        throw new Error(
            `Attempted to submit invalid form. Form validation results as follow: ${titleValidator(logbookData.title)}, ${logbookGameValidator(logbookData.gameTitle)}`,
        );
    }
};
</script>

<template>
    <form class="logbook-form" @submit.prevent="onSubmitLogbook">
        <p>form valid: {{ formIsValid }}</p>
        <!-- Title -->
        <div class="input-group">
            <div :class="'input-container' + (logbookData.title.length > 0 ? ' has-value' : '')">
                <input
                    type="text"
                    class="text-input colored-dark"
                    id="title"
                    name="title"
                    minlength="3"
                    maxlength="50"
                    v-model="logbookData.title"
                    required
                />
                <label class="input-label" for="title">title</label>
            </div>
            <ErrorMessage v-if="logbookData.title.length > 0" :validation="titleValidator(logbookData.title)" />
        </div>
        <!-- Game -->
        <div class="">
            <select class="input-group input-container text-input __select-menu" v-model="logbookData.gameTitle">
                <option :value="undefined">Select a game (optional)</option>
                <option v-for="(game, index) in useGamesStore().games" :key="index" :value="game.title">{{ game.title }}</option>
                <option :value="'Fake'">Fake</option>
            </select>
        </div>
        <ErrorMessage v-if="titleValidator(logbookData.title).isValid && !formIsValid" :validation="logbookGameValidator(logbookData.gameTitle)" />
        <Button>
            <plus-circle-icon></plus-circle-icon>
            New Game
        </Button>
        <!-- Contents Editor -->
        <div class="quill-container">
            <QuillEditor :modules="quillModules" toolbar="full" :v-model="logbookData.contents" />
        </div>
        <div class="actions-container">
            <Button type="submit" :disabled="!formIsValid"><content-save-icon></content-save-icon>Save </Button>
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

.__select-menu {
    background-color: color($primary, 95);
    padding: $space-s $space-m;
    font-family: Arial, Helvetica, Verdana, sans-serif;
    font-size: $font-m;
    font-weight: 600;
    cursor: pointer;
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
    > span {
        padding-top: $space-xs;
        @include classicTransition;
    }
    &:hover > span {
        transform: rotate(180deg);
    }
}
</style>

<script setup lang="ts">
import FormBox from '@/components/forms/FormBox.vue';

const listItems: Array<string> = ['toto', 'titi', 'tutu', 'this is a much longer line just to check what happens if we write a bit more'];

function onSubmitForm(): void {
    alert('Form submitted :)');
}
</script>

<template>
    <section class="vertical-display">
        <h2>Buttons</h2>
        <div class="items-displayer">
            <Button>Test</Button>
            <Button color="full">Test</Button>
            <Button color="secondary">Test</Button>
            <Button color="secondary-full">Test</Button>
            <Button disabled="true">Test</Button>
        </div>
    </section>
    <section class="vertical-display">
        <h2 class="colored-primary">CardLinks</h2>
        <div class="items-displayer">
            <CardLink color="new" title="+"></CardLink>
            <CardLink title="Borderlands 2"></CardLink>
            <CardLink title="GRIS" imagePath="https://www.4gamer.net/games/444/G044434/screenshot_3.jpg"></CardLink>
        </div>
    </section>
    <section class="vertical-display">
        <h2 class="colored-secondary">Lists</h2>
        <div class="items-displayer __larger-gap">
            <List :textItems="listItems"></List>
            <List :textItems="listItems" :animated="true"></List>
            <List :textItems="listItems" color="primary"></List>
            <List :textItems="listItems" color="primary" icon="check"></List>
            <List :textItems="listItems" color="secondary"></List>
        </div>
    </section>
    <section class="vertical-display">
        <h2>Forms</h2>
        <div class="items-displayer __larger-gap">
            <FormBox title="Random form" :onSubmitAction="() => onSubmitForm()">
                <TextInput name="username" :required="true" :minLength="1" :maxLength="30" />
                <Textarea name="message" />
                <Password />
                <Button type="submit" color="secondary">
                    <content-save-icon class="button-icon"></content-save-icon>
                    Save
                </Button>
            </FormBox>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.items-displayer {
    display: flex;
    flex-wrap: wrap;
    gap: $space-l;
    &.__larger-gap {
        gap: $space-xxl;
    }
}
</style>

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
        <h2>CardLinks</h2>
        <div class="items-displayer">
            <CardLink color="new" title="+"></CardLink>
            <CardLink title="Borderlands 2"></CardLink>
            <CardLink title="GRIS" imagePath="https://www.4gamer.net/games/444/G044434/screenshot_3.jpg"></CardLink>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.items-displayer {
    display: flex;
    flex-wrap: wrap;
    gap: $space-l;
}
</style>

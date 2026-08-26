<template>
    <main>
        <h1 class="hero-title" v-reveal style="transition-delay: 0.15s">
            <span class="font-script script">404</span>
            <span class="font-display rounded">404</span>
        </h1>
        <RouterLink class="link-button" v-button-hover to="/">Strona główna</RouterLink>
    </main>
</template>
<style lang="scss" scoped>
.hero-title {
    display: flex;
    align-items: baseline;
    justify-content: center;
    line-height: 1;
    margin: $s-1 0 $s-1;
    font-size: calc($fs-3xl * 4);
    color: $c-accent;
    flex-wrap: wrap;

    @include respond-max(mobile) {
        font-size: calc($fs-3xl * 2) !important;
    }

    @include respond-max(tablet) {
        font-size: calc($fs-3xl * 3.5);
    }

    @include respond(sm) {
        font-size: calc($fs-3xl * 4);
        flex-wrap: nowrap;
    }

    .rounded {
        letter-spacing: 0.05em;
        font-size: 2.5em;
        z-index: -1;
        position: absolute;
        top: 45%;
        opacity: 0.12;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .script {
        font-family: "Corinthia", cursive !important;
        font-size: 3em;
        rotate: -5deg;
    }
}

main {
    flex-direction: column;
    @include flex-center;
}

.link-button {
    @include main-shadow($color: $c-accent);
    border: $border-w solid $c-border;
    border-radius: $radius-pill;
    background: $c-bg;
    color: $c-fg;
    font-weight: 500;
    font-size: $fs-base;
    padding: $s-4 $s-6;
    margin-top: 5rem;
}
</style>
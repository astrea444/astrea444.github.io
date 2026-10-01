<script setup>
import { reactive, onMounted } from 'vue'
import { useI18n } from '@/composables/useI18n.js'

const { t, localizedVisuals } = useI18n()

const ICON_EXPAND = 'M15 3h6v6M21 3l-7 7M9 21H3v-6M3 21l7-7'
const ICON_COLLAPSE = 'M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7'

const openIds = reactive(new Set())
const galleryOpenIds = reactive(new Set())
const galleryLoaded = reactive(new Set())

const isOpen = (id) => openIds.has(id)
const isGalleryOpen = (id) => galleryOpenIds.has(id)

const logomarkSrc = (set) => set.logomark || `/assets/visuals/${set.id}/logomark.webp`

function open(id) {
    openIds.add(id)
}

function toggle(id) {
    if (isOpen(id)) openIds.delete(id)
    else open(id)
}

function toggleGallery(id) {
    if (isGalleryOpen(id)) {
        galleryOpenIds.delete(id)
    } else {
        galleryLoaded.add(id)
        galleryOpenIds.add(id)
    }
}

onMounted(() => {
    const id = window.location.hash.slice(1)
    if (localizedVisuals.value.some(set => set.id === id)) open(id)
})
</script>

<template>
    <main class="visuals">
        <header v-reveal class="intro">
            <div class="text">
                <h1>{{ t('visuals.title') }}</h1>
                <p>{{ t('visuals.description') }}</p>
            </div>
            <div class="decor"><img src="/assets/visuals/decor.webp" /></div>
        </header>
        <section v-reveal>
            <div class="list accordion">
                <section v-for="set in localizedVisuals" :id="set.id" :key="set.id" class="acc-item"
                    :class="{ open: isOpen(set.id) }">
                    <h2 class="heading">
                        <button class="acc-head" type="button" :aria-expanded="isOpen(set.id)"
                            :aria-controls="`panel-${set.id}`" @click="toggle(set.id)">
                            <span class="title">
                                {{ set.title }}
                                <span v-if="set.isNew" class="chip chip-new">{{ t('visuals.new') }}</span>
                            </span>
                            <span class="tags">
                                <span v-for="tag in set.tags" :key="tag" class="chip">{{ tag }}</span>
                            </span>
                            <span class="acc-icon" aria-hidden="true"></span>
                        </button>
                    </h2>

                    <div :id="`panel-${set.id}`" class="acc-panel" :inert="!isOpen(set.id) ? '' : null">
                        <div class="acc-inner">
                            <div class="acc-content">
                                <div class="top">
                                    <div v-if="set.meta.length" class="meta">
                                        <p v-for="item in set.meta" :key="item.label">
                                            <span class="label">{{ item.label }}: </span>
                                            <a v-if="/^https?:\/\//.test(item.value)" :href="item.value" target="_blank"
                                                rel="noopener">{{ item.value }}</a>
                                            <span v-else>{{ item.value }}</span>
                                        </p>
                                    </div>

                                    <button v-if="set.images.length" class="logomark" type="button"
                                        :style="{ background: set.color }" :aria-expanded="isGalleryOpen(set.id)"
                                        :aria-controls="`gallery-${set.id}`" :aria-label="set.title"
                                        @click="toggleGallery(set.id)">
                                        <img :src="logomarkSrc(set)" alt="" draggable="false" />
                                        <span class="badge" aria-hidden="true">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path :d="isGalleryOpen(set.id) ? ICON_COLLAPSE : ICON_EXPAND" />
                                            </svg>
                                        </span>
                                    </button>

                                    <div v-if="set.description" class="description">
                                        <p v-for="text in set.description" :key="text">{{ text }}</p>
                                    </div>
                                </div>

                                <div v-if="set.images.length" :id="`gallery-${set.id}`" class="gallery"
                                    :class="{ open: isGalleryOpen(set.id) }"
                                    :inert="!isGalleryOpen(set.id) ? '' : null">
                                    <div class="gallery-inner">
                                        <div v-if="galleryLoaded.has(set.id)" class="mosaic">
                                            <figure v-for="img in set.images" :key="img.src" class="cell"
                                                :style="{ aspectRatio: `${img.w} / ${img.h}` }">
                                                <img :src="img.src" :alt="img.alt || set.title" loading="lazy"
                                                    draggable="false" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <p class="soon">{{ t('visuals.soon') }}</p>
        </section>
    </main>
</template>

<style lang="scss" scoped>
.visuals {
    padding-top: clamp(3rem, 8vw, 5rem);
    padding-bottom: clamp(3rem, 8vw, 6rem);
    min-height: 65vh;

    .intro {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: clamp(2rem, 6vw, $s-12);
        padding-right: 0;
        width: 100%;
        position: relative;
        overflow-x: clip;
        gap: 4rem;

        @include respond(sm) {
            height: 20rem;
            padding-right: $s-12;
        }

        .text {
            min-width: 0;
            width: 100%;

            h1 {
                margin: 0 0 $s-4;
                @include section-bar;
            }

            p {
                margin: 0;
                max-width: 62ch;
                font-size: $fs-base;
                line-height: 1.5;
                color: $c-ink-soft;
            }
        }

        .decor {
            height: 100%;
            width: auto;
            aspect-ratio: 20 / 17;
            margin: -#{$s-6} 0 0;

            img {
                width: 100%;
                height: auto;
                object-fit: contain;

                &.reveal-on-scroll {
                    transition:
                        transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1),
                        opacity 0.5s ease-out;
                    opacity: 0;
                    transform: translate(200px, -90px);
                }

                &.reveal-on-scroll.in-view {
                    opacity: 1;
                    transform: translate(0, 0);
                }
            }

            @include respond-max(sm) {
                display: none;
            }
        }
    }

    .list {
        @include accordion($fs-xl, 800, $s-6 $s-3);
    }

    .acc-item {
        scroll-margin-top: 6rem;

        .heading {
            margin: 0;
            font: inherit;
        }

        .acc-head {
            display: grid;
            grid-template-columns: 1fr auto 14px;
            align-items: center;

            @include respond-max(tablet) {
                grid-template-columns: 1fr 14px;
                row-gap: $s-3;
                padding: $s-5 $s-2;
            }
        }

        .title {
            min-width: 0;
            font-size: clamp(1.5rem, 5.5vw, #{$fs-xl});
            font-weight: 800;
            letter-spacing: -0.03em;
            line-height: 1.1;
            overflow-wrap: anywhere;

            @include respond-max(tablet) {
                grid-column: 1;
                grid-row: 1;
            }
        }

        .tags {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;
            gap: 0.4rem;

            @include respond-max(tablet) {
                grid-column: 1 / -1;
                grid-row: 2;
                justify-content: flex-start;
            }
        }

        .acc-icon {
            @include respond-max(tablet) {
                grid-column: 2;
                grid-row: 1;
            }
        }

        .chip {
            display: inline-block;
            font-size: $fs-base;
            font-weight: 500;
            line-height: 1.6;
            padding: 0 0.6rem;
            border: 1px solid currentColor;
            border-radius: 999px;
            vertical-align: middle;

            @include respond-max(tablet) {
                font-size: $fs-sm;
            }
        }

        .chip-new {
            margin-left: 0.5rem;
            background: $c-accent;
            border-color: $c-accent;
            color: #fff;
        }

        .acc-content {
            container-type: inline-size;
            display: flex;
            flex-direction: column;
            padding: 0 $s-2 $s-8;

            @include respond(tablet) {
                padding: 0 $s-3 $s-8;
            }
        }

        .top {
            display: grid;
            grid-template-columns: minmax(0, 1fr) auto;
            grid-template-rows: auto 1fr;
            grid-template-areas:
                "meta logo"
                "desc logo";
            gap: $s-6 $s-8;
            align-items: start;

            @include respond-max(tablet) {
                grid-template-rows: auto auto;
                grid-template-areas:
                    "meta logo"
                    "desc desc";
                gap: $s-5 $s-4;
            }
        }

        .meta {
            display: flex;
            flex-direction: column;
            justify-content: center;
            grid-area: meta;
            min-width: 0;
            height: 100%;
            padding-right: $s-3;

            p {
                margin: 0;
                font-size: $fs-sm;
                line-height: 1.85;
                color: $c-ink-soft;
                overflow-wrap: anywhere;
            }

            .label {
                font-weight: 500;
            }

            a {
                color: $c-accent;
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        .description {
            grid-area: desc;
            max-width: 70ch;

            p {
                margin: 0 0 $s-4;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }

        .logomark {
            --bx: -50%;
            --by: 35%;
            grid-area: logo;
            justify-self: end;
            position: relative;
            width: clamp(11rem, 26cqw, 17rem);
            aspect-ratio: 1;
            padding: 0;
            border: 1px solid rgba(0, 0, 0, 0.08);
            border-radius: $s-6;
            cursor: pointer;

            @include respond-max(tablet) {
                --bx: -30%;
                --by: 30%;
                width: 6rem;
                border-radius: $s-3;
            }

            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: inherit;
            }

            .badge {
                position: absolute;
                left: 0;
                bottom: 0;
                transform: translate(var(--bx), var(--by));
                display: grid;
                place-items: center;
                width: 3rem;
                height: 3rem;
                border: 1px solid currentColor;
                border-radius: 50%;
                background: #fff;
                color: #000;
                transition: transform 0.25s ease;

                svg {
                    width: auto;
                    height: 60%;
                    aspect-ratio: 1 / 1;
                }

                @include respond-max(tablet) {
                    width: 2.5rem;
                    height: 2.5rem;
                }
            }

            &:hover .badge,
            &:focus-visible .badge {
                transform: translate(var(--bx), var(--by)) scale(1.1);
            }

            &:focus-visible {
                outline: 2px solid $c-accent;
                outline-offset: 4px;
            }
        }

        .gallery {
            display: grid;
            grid-template-rows: 0fr;
            visibility: hidden;
            transition: grid-template-rows 0.75s, visibility 0.5s;

            &.open {
                grid-template-rows: 1fr;
                visibility: visible;
            }
        }

        .gallery-inner {
            min-height: 0;
            overflow: hidden;
        }

        .mosaic {
            margin-top: $s-8;
            columns: 3;
            column-gap: $s-4;

            @include respond-max(tablet) {
                margin-top: $s-6;
                columns: 2;
                column-gap: $s-3;
            }
        }

        .cell {
            margin: 0 0 $s-4;
            break-inside: avoid;
            border-radius: $s-4;
            overflow: hidden;

            @include respond-max(tablet) {
                margin-bottom: $s-3;
                border-radius: $s-3;
            }

            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    .soon {
        margin: clamp(4rem, 12vw, 10rem) auto 0;
        font-size: $fs-base;
        width: fit-content;
        max-width: 100%;
        text-align: center;
        color: $c-ink-soft;
    }

    .acc-panel {
        transition: grid-template-rows 0.75s, visibility 0.5s !important;
    }
}
</style>
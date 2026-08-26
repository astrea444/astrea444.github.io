<template>
    <article v-if="project" class="project">
        <h1 class="project-title" v-reveal>{{ project.title }}</h1>
        <InfoSection :meta="project.meta" :title="project.title" :description="project.description"
            :image="project.image" :image-alt="project.imageAlt" />

        <VisualSection :title="s?.visualIdentity?.title" :description="s?.visualIdentity?.description"
            :colors="s?.visualIdentity?.colors" :typography="s?.visualIdentity?.typography"
            :after-text="s?.visualIdentity?.afterText" :images="s?.visualIdentity?.images"
            :components="s?.visualIdentity.components" />

        <ParagraphSection v-if="s?.process" :title="s.process.title" :blocks="s.process.blocks" />

        <ParagraphSection v-if="s?.uiShowcase" :title="s.uiShowcase.title" :blocks="s.uiShowcase.blocks"
            class="gallery-new" />
        <section v-if="s?.uiShowcase?.images?.length" class="screenshot-row">
            <img v-for="(img, i) in s.uiShowcase.images" :key="img.src ?? img ?? i" :src="img.src ?? img"
                :alt="img.alt ?? ''" loading="lazy" />
        </section>
        <!-- <section v-if="s?.pantry?.images?.length" class="screenshot-row">
            <img v-for="(img, i) in s.pantry.images" :key="img.src ?? img ?? i" :src="img.src ?? img"
                :alt="img.alt ?? ''" loading="lazy" />
        </section>
        <section v-if="s?.recipes?.images?.length" class="screenshot-row">
            <img v-for="(img, i) in s.recipes.images" :key="img.src ?? img ?? i" :src="img.src ?? img"
                :alt="img.alt ?? ''" loading="lazy" />
        </section> -->

        <ParagraphSection v-if="s?.pantry" :title="s.pantry.title" :blocks="s.pantry.blocks" />

        <ParagraphSection v-if="s?.recipes" :title="s.recipes.title" :blocks="s.recipes.blocks" />

        <ParagraphSection v-if="s?.development" :title="s.development.title" :blocks="s.development.blocks" />
        <!-- <NextProject :current-id="4" /> -->
    </article>
</template>

<script setup>
import { computed } from 'vue'
import { projects } from '@/data/projects.js'
import InfoSection from '@/projects/sections/InfoSection.vue'
import VisualSection from '@/projects/sections/VisualSection.vue'
import NextProject from '@/components/NextProject.vue'
import ParagraphSection from '@/projects/sections/ParagraphSection.vue'
import { useLightbox } from '@/composables/useLightbox'

// const { open } = useLightbox()

const project = computed(() => projects.find(p => p.id === 4))
const s = computed(() => project.value?.sections)
</script>

<style lang="scss" scoped>
.project {
    .screenshot-row {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        max-width: 100%;
        width: 100%;
        gap: 1rem;
        padding-top: 5rem;

        img {
            display: block;
            flex: 1 1 0;
            min-width: 0;
            width: 100%;
            border-radius: 2rem;
            object-fit: cover;
            aspect-ratio: unset
        }
    }
}

.gallery-new {
    :deep(.gallery) {
        display: flex !important;
        flex-direction: row !important;
    }

    :deep(img) {
        border-radius: 1rem !important;
        // border: 1px solid #ddd !important;
        aspect-ratio: unset !important;
    }
}
</style>
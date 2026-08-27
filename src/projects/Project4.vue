<template>
    <article v-if="project" class="project">
        <h1 class="project-title" v-reveal>{{ project.title }}</h1>
        <InfoSection :meta="project.meta" :title="project.title" :description="project.description"
            :image="project.image" :image-alt="project.imageAlt" />

        <VisualSection :title="s?.visualIdentity?.title" :description="s?.visualIdentity?.description"
            :colors="s?.visualIdentity?.colors" :after-text="s?.visualIdentity?.afterText"
            :images="s?.visualIdentity?.images" :components="s?.visualIdentity.components" />

        <ParagraphSection v-if="s?.process" :title="s.process.title" :blocks="s.process.blocks" />

        <ParagraphSection v-if="s?.uiShowcase" :title="s.uiShowcase.title" :blocks="s.uiShowcase.blocks"
            class="gallery-new" />

        <ParagraphSection v-if="s?.pantry" :title="s.pantry.title" :blocks="s.pantry.blocks" />

        <ParagraphSection v-if="s?.recipes" :title="s.recipes.title" :blocks="s.recipes.blocks" />

        <ParagraphSection v-if="s?.development" :title="s.development.title" :blocks="s.development.blocks" />
    </article>
</template>

<script setup>
import { computed } from 'vue'
import { projects } from '@/data/projects.js'
import InfoSection from '@/projects/sections/InfoSection.vue'
import VisualSection from '@/projects/sections/VisualSection.vue'
import ParagraphSection from '@/projects/sections/ParagraphSection.vue'


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
        aspect-ratio: unset !important;
    }
}
</style>
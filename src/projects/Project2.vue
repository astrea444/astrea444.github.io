<template>
    <article v-if="project" class="project">
        <h1 class="project-title" v-reveal>{{ project.title }}</h1>
        <InfoSection :meta="project.meta" :title="project.title" :description="project.description"
            :image="project.image" :image-alt="project.imageAlt" />

        <VisualSection :title="s?.visualIdentity?.title" :description="s?.visualIdentity?.description"
            :colors="s?.visualIdentity?.colors" :typography="s?.visualIdentity?.typography"
            :after-text="s?.visualIdentity?.afterText" :images="s?.visualIdentity?.images"
            :components="s?.visualIdentity.components" />

        <ParagraphSection v-if="s?.process" :title="s.process.title" :blocks="[
            {
                type: 'text',
                paragraphs: s.process.paragraphs
            },
            {
                type: 'image',
                src: s.process.image.src,
                alt: s.process.image.alt,
                size: 'large'
            }
        ]" />

        <ParagraphSection v-if="s?.customIcons" :title="s.customIcons.title"
            :blocks="[{ type: 'text', paragraphs: s.customIcons.paragraphs }, { type: 'row', images: s.customIcons.images }]" />

        <ParagraphSection v-if="s?.desktop" :title="s.desktop.title" :blocks="[
            {
                type: 'text',
                paragraphs: s.desktop.paragraphs
            },
            {
                type: 'image',
                src: s.desktop.image.src,
                alt: s.desktop.image.alt,
                size: 'large'
            }
        ]" />
        <div class="desktop_showcase" v-reveal>
            <img src="/assets/project2/home.png" alt="Desktop Showcase" class="clickable"
                @click="open('/assets/project2/home.png', 'Desktop Showcase')" />
        </div>
        <ParagraphSection v-if="s?.mobile" :title="s.mobile.title" :blocks="[
            {
                type: 'text',
                paragraphs: s.mobile.paragraphs
            },
            {
                type: 'image',
                src: s.mobile.image.src,
                alt: s.mobile.image.alt,
                size: 'large'
            }
        ]" />
        <NextProject :current-id="2" />
    </article>

</template>

<script setup>
import { computed } from 'vue'
import { projects } from '@/data/projects.js'
import InfoSection from '@/projects/sections/InfoSection.vue'
import VisualSection from '@/projects/sections/VisualSection.vue'
import ParagraphSection from '@/projects/sections/ParagraphSection.vue'
import NextProject from '@/components/NextProject.vue'
import { useLightbox } from '@/composables/useLightbox'

const { open } = useLightbox()

const project = computed(() => projects.find(p => p.id === 2))
const s = computed(() => project.value?.sections)
</script>

<style lang="scss" scoped>
.project {
    .desktop_showcase {
        padding: 5rem 0;
        width: 90%;

        img {
            width: 100%;
        }
    }
}
</style>
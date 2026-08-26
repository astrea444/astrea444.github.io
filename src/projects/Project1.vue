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

        <ParagraphSection v-if="s?.printMaterials" :title="s.printMaterials.title" :blocks="[
            {
                type: 'bento',
                images: s.printMaterials.images
            }
        ]" />

        <ParagraphSection v-if="s?.website" :title="s.website.title" :blocks="[
            {
                type: 'text',
                paragraphs: s.website.paragraphs
            },
            {
                type: 'image',
                src: s.website.image.src,
                alt: s.website.image.alt,
                size: 'large'
            }
        ]" />


        <div class="showcase" v-reveal>
            <div class="showcase-container">
                <img v-for="(img, i) in showcaseImages" :key="img.src" :src="img.src" :alt="img.alt" class="clickable"
                    @click="open(showcaseImages, i)" />
            </div>
        </div>
        <NextProject :current-id="1" />
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

const { open } = useLightbox()

const project = computed(() => projects.find(p => p.id === 1))
const s = computed(() => project.value?.sections)

const showcaseImages = [
    { src: "/assets/project1/home1.png", alt: "Strona główna" },
    { src: "/assets/project1/home2.png", alt: "Strona główna" },
    { src: "/assets/project1/admin.png", alt: "Panel Administracyjny" },
]
</script>

<style lang="scss" scoped>
.project {
    .showcase {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: $s-12;
        margin: 0 auto;
        padding: 12rem 0 0;
        width: 100%;

        .showcase-container {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
            gap: 0;
            margin: 0 auto;
            width: 100%;
        }

        h2 {
            text-align: center;
            width: 100%;
        }

        img {
            width: clamp(20rem, 25vw, 60rem);
            border-radius: $s-4;
            height: auto;
            object-fit: contain;
            border: $border-w solid #cfd2d8;
            filter: drop-shadow(0 8px 5px rgba(0, 0, 0, 0.1));
            transition: transform 0.4s $ease, box-shadow 0.4s $ease;
            cursor: pointer;

            &:hover {
                transform: translateY(-2px);
            }

            &:nth-child(2) {
                margin: 3rem -3rem 0;
                z-index: 99;
            }
        }
    }
}
</style>
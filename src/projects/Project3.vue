<template>
    <article v-if="project" class="project">
        <h1 class="project-title" v-reveal>{{ project.title }}</h1>

        <InfoSection :meta="project.meta" :title="project.title" :description="project.description"
            :image="project.image" :image-alt="project.imageAlt" />

        <section v-if="s?.techStack" class="techstack-section" v-reveal>
            <h2 class="section-title">{{ s.techStack.title }}</h2>
            <PillGrid :items="s.techStack.stack" />
        </section>

        <VisualSection :title="s?.visualIdentity?.title" :description="s?.visualIdentity?.description"
            :colors="s?.visualIdentity?.colors" :typography="s?.visualIdentity?.typography"
            :after-text="s?.visualIdentity?.afterText" :images="s?.visualIdentity?.images"
            :components="s?.visualIdentity.components" />


        <ParagraphSection v-if="s?.project" :title="s.project.title" :blocks="[
            {
                type: 'text',
                paragraphs: s.project.paragraphs
            },
            {
                type: 'image',
                src: s.project.image.src,
                alt: s.project.image.alt,
                size: 'large'
            }
        ]" />

        <ParagraphSection v-if="s?.interfaceDesign" :title="s.interfaceDesign.title" :blocks="[
            {
                type: 'text',
                paragraphs: s.interfaceDesign.paragraphs
            },
            {
                type: 'gallery',
                groups: s.interfaceDesign.groups
            }
        ]" />
        <section class="flow" v-reveal>
            <h2 class="section-title">Architektura aplikacji</h2>

            <p class="paragraph">
                Przepływ danych został przygotowany w oparciu o warstwową strukturę aplikacji,
                dzięki czemu poszczególne elementy pozostają od siebie niezależne i łatwiejsze
                w dalszym rozwijaniu.
            </p>

            <div class="structure">
                <template v-for="(item, index) in flow" :key="item">
                    <div class="badge">{{ item }}</div>

                    <Icon v-if="index < flow.length - 1" icon="lucide:arrow-right" class="arrow" width="22"
                        height="22" />
                </template>
            </div>
        </section>

        <ParagraphSection v-if="s?.implementation" :title="s.implementation.title" :blocks="[
            {
                type: 'text',
                paragraphs: s.implementation.paragraphs
            },
            {
                type: 'image',
                src: s.implementation.image.src,
                alt: s.implementation.image.alt,
                size: 'large'
            }
        ]" />


        <NextProject :current-id="3" />
    </article>

</template>

<script setup>
import { computed } from 'vue'
import { projects } from '@/data/projects.js'
import { Icon } from '@iconify/vue'
import InfoSection from '@/projects/sections/InfoSection.vue'
import ParagraphSection from '@/projects/sections/ParagraphSection.vue'
import VisualSection from '@/projects/sections/VisualSection.vue'
import PillGrid from '@/components/PillGrid.vue'
import NextProject from '@/components/NextProject.vue'

const project = computed(() => projects.find(p => p.id === 3))
const s = computed(() => project.value?.sections)

const flow = ["MockData", "API Layer", "Store", "Views", "Components"]
</script>

<style scoped lang="scss">
.techstack-section {
    margin: 3rem 0 0;
    padding: 0 !important;
    width: 100%;
}

.flow {
    margin: 8rem 0 3rem;
    padding: 0 !important;
    width: 100%;

    .structure {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;
        margin-top: 1rem;
    }

    .badge {
        @include main-shadow($color: $c-accent);
        display: inline-block;
        background: $c-bg;
        border: $border-w solid $c-border;
        border-radius: $radius-pill;
        padding: $s-3 22px;
        font-weight: 500;
        font-size: $fs-lg;
        letter-spacing: 0.04em;
    }

    .arrow {
        height: $fs-xl;
        width: $fs-xl;
        flex-shrink: 0;
        margin-left: $s-2;
    }
}
</style>
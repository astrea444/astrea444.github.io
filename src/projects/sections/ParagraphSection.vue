<template>
  <section class="paragraph-section" v-reveal>
    <h2 class="section-title" v-if="title">{{ title }}</h2>

    <div class="blocks">
      <template v-for="(block, index) in blocks" :key="index">
        <div v-if="block.type === 'text'" class="text">
          <p class="paragraph" v-for="(paragraph, pIndex) in block.paragraphs" :key="pIndex">
            {{ paragraph }}
          </p>
        </div>

        <img v-else-if="block.type === 'image'" :src="block.src" :alt="block.alt || title"
          :class="[block.size || 'full', 'clickable']" @click="open(block.src, block.alt || title)" />

        <div v-else-if="block.type === 'gallery'" class="gallery">
          <div v-for="(group, gIndex) in getGalleryGroups(block)" :key="gIndex" class="gallery-group"
            :class="{ 'gallery-group--featured': group.featured }">
            <div class="gallery-images">
              <img v-for="(img, iIndex) in group.images" :key="iIndex" :src="img.src" :alt="img.alt || title"
                class="clickable" @click="open(group.images, iIndex)" />
            </div>
            <p class="paragraph caption" v-if="group.caption">{{ group.caption }}</p>
          </div>
        </div>

        <div v-else-if="block.type === 'row'" class="row-gallery">
          <div class="row-item" v-for="(img, iIndex) in block.images" :key="iIndex">
            <img :src="img.src" :alt="img.alt || title" class="clickable" @click="open(block.images, iIndex)" />
          </div>
        </div>

        <div v-else-if="block.type === 'bento'" class="bento-grid">
          <div v-for="(img, imgIdx) in block.images" :key="img.src" :class="['bento-item', `bento-item--${imgIdx}`]">
            <img :src="img.src" :alt="img.alt || title" class="clickable" @click="open(block.images, imgIdx)" />
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
import { useLightbox } from '@/composables/useLightbox'

const { open } = useLightbox()

defineProps({
  title: { type: String, default: '' },
  blocks: { type: Array, default: () => [] }
})

function getGalleryGroups(block) {
  if (block.groups) return block.groups

  const captions = block.captions || []
  const images = [...(block.images || [])]
  const groups = []
  let capIndex = 0

  if (images.length % 2 !== 0) {
    const featured = images.shift()
    groups.push({ images: [featured], featured: true, caption: captions[capIndex++] })
  }

  while (images.length) {
    groups.push({ images: images.splice(0, 2), featured: false, caption: captions[capIndex++] })
  }

  return groups
}
</script>

<style scoped lang="scss">
.paragraph-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .blocks {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: $s-6;
    width: 100%;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: $s-4;
    width: 100%;

    p {
      color: $c-ink-soft;
      line-height: 1.7;
      margin: 0;
    }
  }

  img {
    border-radius: $s-4;
    display: block;
    object-fit: cover;

    &.medium {
      max-width: 42rem;
      margin-top: $s-4;
    }

    &.large {
      max-width: 100%;
      margin-top: $s-4;
    }

    &.full {
      width: 120%;
      max-width: unset !important;
      margin-top: $s-4;
    }
  }

  .gallery {
    display: flex;
    flex-direction: column;
    gap: $s-6;
    width: 100%;
    min-height: 50rem;
    margin-top: 3rem;

    .gallery-group {
      display: flex;
      flex-direction: column;
      gap: $s-3;
      width: 100%;

      @include respond-max(sm) {
        flex-direction: column-reverse;
      }

      .gallery-images {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: $s-3;
        width: 100%;

        @include respond-max(sm) {
          gap: $s-2;
          display: flex;
          flex-direction: column;

        }
      }

      img {
        width: 100%;
        aspect-ratio: 16/9;
        border-radius: $s-2;
        object-fit: cover;
      }

      .caption {
        text-align: center;
        font-size: $fs-xs !important;
        color: $c-ink-soft;
        margin: 0;
      }

      &--featured {
        .gallery-images {
          grid-template-columns: 1fr;
          max-width: 60%;
          margin: 0 auto;

          @include respond-max(tablet) {
            max-width: 100%;
          }
        }
      }
    }
  }

  .row-gallery {
    display: flex;
    gap: $s-8;
    max-width: 90vw;
    width: 100%;
    overflow-x: auto;
    align-items: center;
    justify-content: space-around;
    padding: $s-6 0;
    scrollbar-width: thin;

    .row-item {
      flex: 0 0 auto;
      width: 6rem;
      aspect-ratio: 1;
      border-radius: $s-4;
      overflow: hidden;

      @include respond-max(mobile) {
        width: 9rem;
      }

      @include respond-max(tablet) {
        width: 7rem;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }
  }

  img {
    cursor: pointer;
  }

  .bento-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    max-height: 50rem;
    gap: $s-2;
    width: 100%;

    @include respond-max(mobile) {
      display: flex;
      flex-direction: column;
      max-height: unset;
      height: fit-content;
    }


    @include respond-max(tablet) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
      max-height: unset;

      .bento-item--0 {
        grid-column: span 2;
        aspect-ratio: 16 / 10;
      }

      .bento-item--1 {
        grid-column: span 1;
        aspect-ratio: 1;
      }

      .bento-item--2 {
        grid-column: span 2;
        aspect-ratio: 16 / 10;
      }

      .bento-item--3 {
        grid-column: span 2;
        aspect-ratio: 4 / 3;
      }

      .bento-item--4,
      .bento-item--5 {
        aspect-ratio: 1;
      }
    }

    .bento-item {
      border-radius: $s-4;
      overflow: hidden;

      @include respond-max(tablet) {
        grid-column: auto !important;
        grid-row: auto !important;
        aspect-ratio: 1;
      }

      @include respond-max(mobile) {
        height: fit-content;
        aspect-ratio: unset;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;

        @include respond-max(mobile) {
          height: auto;
          width: 100%;
        }

      }

      &--0 {
        grid-column: 4;
        grid-row: 1;
      }

      &--1 {
        grid-column: 4;
        grid-row: 2 / span 3;
      }

      &--2 {
        grid-column: 1 / span 2;
        grid-row: 1 / span 2;
      }

      &--3 {
        grid-column: 2 / span 2;
        grid-row: 3 / span 2;
      }

      &--4 {
        grid-column: 3;
        grid-row: 1 / span 2;
      }

      &--5 {
        grid-column: 1;
        grid-row: 3 / span 2;
      }
    }
  }
}

.clickable {
  transition: opacity 0.2s $ease;
}
</style>
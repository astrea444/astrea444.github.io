<template>
  <section class="info-section" v-reveal>
    <div v-if="meta.length" class="top">
      <div v-for="item in meta" :key="item.label" class="row">
        <span class="label">{{ item.label }}: </span>
        <a v-if="item.label === 'Repozytorium'" :href="item.value" target="_blank" class="value link">{{ item.value
        }}</a>
        <span v-else class="value">{{ item.value }}</span>
      </div>
    </div>

    <div v-if="descriptionParagraphs.length" class="description">
      <p v-for="(paragraph, i) in descriptionParagraphs" :key="i" class="paragraph">
        {{ paragraph }}
      </p>
    </div>
    <p v-else-if="description" class="description">{{ description }}</p>

    <div v-if="image" class="media">
      <img :src="image" :alt="imageAlt || title" class="image clickable" @click="open(image, imageAlt || title)" />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useLightbox } from '@/composables/useLightbox'

const { open } = useLightbox()

const props = defineProps({
  bar: { type: String, default: '' },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  image: { type: String, default: '' },
  imageAlt: { type: String, default: '' },
  meta: { type: Array, default: () => [] }
})

const descriptionParagraphs = computed(() => {
  if (!props.description) return []
  return props.description
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(Boolean)
})
</script>

<style scoped lang="scss">
.info-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .top {
    margin-bottom: $s-6;
    width: 100%;

    .row {
      font-size: $fs-sm;
      line-height: 1.85;
      color: $c-ink-soft;

      @include respond-max(mobile) {
        font-size: $fs-xs !important;
      }

      @include respond-max(tablet) {
        font-size: $fs-sm;
      }
    }

    .label {
      font-weight: 500;
    }

    .link {
      color: $c-accent;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .description {
    margin: 0 0 $s-8;
  }

  .paragraph {
    margin: 0 0 $s-4;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .media {
    margin-top: $s-12;
    display: flex;
    flex-direction: column;
    align-items: center;


    @include respond-max(mobile) {
      margin-top: $s-4;
    }

    img {
      border-radius: $s-4;
      display: block;
      object-fit: cover;
      width: 102%;
      max-width: unset !important;
      height: auto;
    }
  }
}
</style>
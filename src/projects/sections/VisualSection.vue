<template>
  <section class="visual-identity" v-reveal>
    <h2 class="section-title">{{ title }}</h2>

    <div v-if="paragraphs.length" class="description">
      <p class="paragraph" v-for="(p, i) in paragraphs" :key="i">{{ p }}</p>
    </div>

    <div v-if="colors.length" class="colors">
      <div v-for="c in colors" :key="c.hex" class="pill" :style="{ background: c.hex, color: textColor(c.hex) }">
        {{ c.hex }}
      </div>
    </div>

    <div v-if="components" class="components">
      <img :src="components" alt="Design System" class="clickable" @click="open(components, 'Design System')" />
    </div>

    <div v-if="afterText" class="after-text">
      <p class="paragraph">{{ afterText }}</p>
    </div>

    <div v-if="images.length" class="images">
      <img v-for="(img, idx) in images" :key="img.src" :src="img.src" :alt="img.alt || title" class="clickable"
        @click="open(images, idx)" />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useLightbox } from '@/composables/useLightbox'

const { open } = useLightbox()

const props = defineProps({
  title: { type: String, default: 'Identyfikacja wizualna' },
  description: { type: String, default: '' },
  colors: { type: Array, default: () => [] },
  components: { type: String, default: '' },
  afterText: { type: String, default: '' },
  images: { type: Array, default: () => [] }
})

const paragraphs = computed(() => {
  if (!props.description) return []
  return props.description.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean)
})

function textColor(hex) {
  const c = hex.replace('#', '')
  const r = parseInt(c.substr(0, 2), 16)
  const g = parseInt(c.substr(2, 2), 16)
  const b = parseInt(c.substr(4, 2), 16)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness > 180 ? '#1a1a1a' : '#ffffff'
}
</script>

<style scoped lang="scss">
.visual-identity {
  width: 100%;

  .description {

    p {
      color: $c-ink-soft;
      line-height: 1.5;
      font-size: $fs-base;
      margin: 0 0 $s-4;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .components {
    margin: $s-12 auto;
    width: 100%;

    img {
      width: 100%;
      height: auto;
      filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.1));
    }
  }

  .colors {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: $s-3;
    margin: $s-12 0 $s-8;

    .pill {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: $s-4 $s-6;
      border-radius: 9999px;
      font-size: $fs-base;
      font-weight: 500;
      border: 1px solid $c-border;
      letter-spacing: 0.02em;

      @include respond-max(tablet) {
        font-size: $fs-sm;
        padding: $s-3;
      }
    }
  }

  .after-text {
    margin: 0 0 $s-8;

    p {
      color: $c-ink-soft;
      line-height: 1.5;
      font-size: $fs-base;
      margin: 0;
    }
  }

  .images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: $s-3;

    img {
      width: 100%;
      border-radius: $radius;
      display: block;
      object-fit: cover;
    }
  }
}
</style>
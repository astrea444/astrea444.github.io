<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  project: { type: Object, required: true },
  index: { type: Number, required: true }
})
</script>

<template>
  <RouterLink :to="`/projekty/${project.id}`" class="project-card" :class="{ reversed: index % 2 === 1 }" v-reveal>
    <div class="project-visual">
      <img :src="project.mockup" class="image" :alt="project.title" loading="lazy" draggable="false" />
      <img :src="project.image" class="info-img" alt="" loading="lazy" draggable="false" />
      <div class="tag-row">
        <span v-for="tag in project.tags" :key="tag" class="tag">
          <Icon :icon="`lucide:${tag}`" class="tag-icon" />
        </span>
      </div>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
.project-card {
  display: block;
  transition: transform 0.5s $ease;

  &:focus-visible {
background: none;
    .project-visual {
      border: 2px solid $c-accent;
    }
  }

  &:active {
    transform: scale(0.995);
  }

  @include respond(tablet) {
    padding: $s-4 $s-3 0;

    &.reversed .tag-row {
      justify-content: flex-end;
    }
  }
}

.project-visual {
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: $s-6;
  
  &:hover {
    .image {
      opacity: 1;
    }
  }

  @include respond(tablet) {
    aspect-ratio: 2 / 1;
  }
}

.image,
.info-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: $s-8;
  transition: opacity 0.7s ease;
}

.image {
  z-index: 2;
  border: $border-w solid $c-border;
  object-position: center;
  opacity: 0;
}

.info-img {
  z-index: 1;
  object-position: bottom;
}

.tag-row {
  position: absolute;
  inset: 0;
  z-index: 3;
  display: flex;
  align-items: flex-end;
  gap: $s-2;
  padding: $s-2;
}

.tag {
  @include inset-shadow-soft;
  @include flex-center;
  width: 2.75rem;
  height: 2.75rem;
  background: $c-bg;
  border: $border-w solid $c-border;
  border-radius: $radius-pill;

  @include respond(tablet) {
    width: 3.5rem;
    height: 3.5rem;
  }
}

.tag-icon {
  width: 55%;
  height: 55%;

  :deep(g) {
    stroke-width: 1.5;
  }
}
</style>
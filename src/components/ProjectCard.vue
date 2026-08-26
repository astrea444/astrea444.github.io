<script setup>
defineProps({
  project: { type: Object, required: true },
  index: { type: Number, required: true }
})
</script>

<template>
  <RouterLink :to="`/projekty/${project.id}`" class="project-card" :class="{ reversed: index % 2 === 1 }" v-reveal>
    <div class="project-body">
      <div class="project-visual">
        <img :src="project.mockup" class="image" :alt="project.title" />
      </div>
      <div class="project-text">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <div class="tag-row">
          <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <div class="open-hint">Zobacz szczegóły
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
.project-card {
  display: block;
  width: 100%;
  max-width: 100%;
  margin-bottom: 5.5rem;
  padding: 0;
  border-radius: 0;
  cursor: pointer;
  transition: background-color 0.5s $ease, transform 0.5s $ease;

  @include respond-max(tablet) {
    margin-bottom: 4rem !important;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {

    .open-hint {
      opacity: 1;
      transform: translateX(0);

      svg {
        transform: translateX(3px);
      }
    }
  }

  &:active {
    transform: scale(0.995);
  }

  &.reversed {
    .project-body {
      direction: rtl;

      >* {
        direction: ltr;
      }
    }
  }
}

.bar {
  @include section-bar;
  display: inline-block;
  width: 100%;
}

.project-body {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: $s-12;
  align-items: center;
  padding: $s-4 $s-3 0;

  @include respond-max(tablet) {
    padding: 0;
    gap: 0;
  }
}

.project-visual {
  aspect-ratio: 3 / 2;
  border-radius: 0;
  transition: transform 0.6s $ease, box-shadow 0.6s $ease;
  position: relative;

  .image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    object-fit: cover;
    border-radius: $s-4;
    object-position: center;
  }
}


.project-text {
  height: 100%;
  padding: $s-4 0;

  h3 {
    margin-bottom: $s-3;
    font-size: $fs-xl;
    line-height: 1.35;
    font-weight: 500;
    letter-spacing: 0.01em;

    @include respond-max(tablet) {
      font-size: $fs-2xl;
      margin: $s-8 0 $s-5;
    }
  }

  p {
    margin-bottom: $s-12;
    color: $c-muted-fg;
    font-size: $fs-base;
    line-height: 1.7;
    letter-spacing: 0.01em;

    @include respond(xs) {
      font-size: $fs-base;
      margin-bottom: $s-2;
    }
  }

  .open-hint {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: $s-2;
    color: $c-accent;
    font-size: $fs-sm;
    width: 100%;
    font-weight: 500;
    margin-top: $s-4;
    opacity: 0;
    transform: translateX(-4px);
    transition: opacity 0.4s $ease, transform 0.4s $ease;

    svg {
      width: $fs-base;
      height: $fs-base;
      transition: transform 0.4s $ease;
    }

    @include respond-max(tablet) {
      opacity: 1;
    }
  }
}

@include respond-max(sm) {
  .project-body {
    grid-template-columns: 1fr;
  }

  .project.reversed {
    .project-body {
      direction: ltr;
    }
  }
}
</style>
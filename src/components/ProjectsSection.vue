<script setup>
import ProjectCard from './ProjectCard.vue'
import { useI18n } from '@/composables/useI18n'

const { t, localizedProjects } = useI18n()
</script>

<template>
  <section class="projects" id="projekty">
    <div class="section-lead" v-reveal>
      <h2 class="bar">{{ t('ui.featuredProjects') }}</h2>
      <p>{{ t('ui.projectsIntro') }}</p>
    </div>
    <div class="project-grid">
      <ProjectCard v-for="(project, i) in localizedProjects" :key="project.id" :project="project" :index="i" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.projects {
  margin-top: 4vw;
}

.section-lead {
  margin-bottom: 4.5rem;

  @include respond(sm) {
    margin-bottom: 2.5rem;
  }
}

.bar {
  @include section-bar;
}

.section-lead p {
  max-width: 60ch;
  color: $c-muted-fg;
  font-size: $fs-base;
  line-height: 1.35;
  letter-spacing: 0.03em;
}

.project-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem 0;

  @include respond(tablet) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
  }
}
</style>
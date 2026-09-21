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

    <ProjectCard v-for="(project, i) in localizedProjects" :key="project.id" :project="project" :index="i" />
  </section>
</template>

<style lang="scss" scoped>
.projects {
  margin-top: 4vw;
  width: 100%;

  .section-lead {
    margin-bottom: 2.5rem;
    width: 100%;

    @include respond-max(sm) {
      margin-bottom: 4.5rem;
    }

    .bar {
      @include section-bar;
    }

    p {
      width: 100%;
      margin: 0 auto;
      text-align: left;
      color: $c-muted-fg;
      font-size: $fs-sm;
      line-height: 1.35;
      letter-spacing: 0.03em;

      @include respond(xs) {
        font-size: $fs-base;
      }

      @include respond(sm) {
        width: 99%;
        font-size: $fs-base;
      }
    }
  }
}
</style>
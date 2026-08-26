<script setup>
import HeroSection from '../components/HeroSection.vue'
import InfoGrid from '../components/InfoGrid.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import ContactSection from '../components/ContactSection.vue'
</script>

<template>
  <main id="top" class="home">
    <HeroSection />
    <InfoGrid />
    <ProjectsSection />
    <ContactSection />
  </main>
</template>

<style lang="scss" scoped>
.home {
  margin-inline: auto;

  @include respond(sm) {
    max-width: 960px;
  }

  @include respond(md) {
    max-width: 1140px;
  }

  @include respond(lg) {
    max-width: 1320px;
  }

  @include respond(xl) {
    max-width: 1600px;
  }

  @include respond(xxl) {
    max-width: 2000px;
  }

  @include respond(xxxl) {
    max-width: 2600px;
  }
}
</style>
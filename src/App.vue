<script setup>
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
import ImageLightbox from './components/ImageLightbox.vue'
</script>

<template>
  <TheNavbar />
  <div class="container">
    <RouterView v-slot="{ Component, route }">
      <Transition name="page" mode="out-in" appear>
        <component :is="Component" :key="route.fullPath" />
      </Transition>
    </RouterView>
  </div>
  <TheFooter />
  <ImageLightbox />
</template>

<style lang="scss" scoped>
@use "@/styles/_mixins.scss" as *;

.container {
  max-width: $container-w;
  margin-inline: auto;
  padding-inline: $s-12;

  @include respond-max(mobile) {
    padding-inline: $s-3;
  }

  @include respond-max(tablet) {
    padding-inline: $s-3;
    max-width: 90vw !important;
  }

  @include respond-max(sm) {
    max-width: 85vw !important;
    padding-inline: $s-4;
  }
}
</style>
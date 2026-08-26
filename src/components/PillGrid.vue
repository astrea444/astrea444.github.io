<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="pill-grid">
    <div v-for="item in items" :key="item.label" class="pill">
      <div class="icon-wrap" :style="{
        '--scale': item.scale ?? 1,
        '--bg': item.bg ?? 'transparent'
      }">
        <Icon :icon="item.icon" width="25" height="25" />
      </div>

      {{ item.label }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pill-grid {
  display: flex;
  flex-wrap: wrap;
  gap: $s-4;
}

.pill {
  @include inset-shadow-soft;
  display: flex;
  align-items: center;
  gap: $s-3;
  background: $c-bg;
  border: $border-w solid $c-border;
  border-radius: $radius-pill;
  padding: $s-2;
  padding-right: $s-4;
  min-height: 3.5rem;
  font-size: $fs-lg;
  font-weight: 500;
  letter-spacing: 2%;
  white-space: nowrap;
  width: fit-content;

  .icon-wrap {
    width: 2.7rem;
    height: 2.7rem;
    aspect-ratio: 1/1;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: center;
    border-radius: $radius-pill;
    background: var(--bg);

    :deep(svg) {
      height: 80%;
      width: auto;
      transform: scale(var(--scale));
      transform-origin: center;
    }
  }
}
</style>
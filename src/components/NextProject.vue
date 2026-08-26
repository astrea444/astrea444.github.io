<template>
  <RouterLink v-if="nextProject" class="next-project" :to="`/projekty/${nextProject.id}`" v-reveal>
    <div class="info">
      <span class="next-label">Następny projekt</span>
      <span class="next-title">{{ nextProject.title }}</span>
    </div>
    <Icon icon="lucide:arrow-right" />
  </RouterLink>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '@/data/projects.js'
import { Icon } from '@iconify/vue'

const props = defineProps({
  currentId: {
    type: [Number, String],
    default: null
  }
})

const route = useRoute()

const currentId = computed(() => {
  if (props.currentId != null) return Number(props.currentId)
  const match = route.path.match(/\/projekty\/(\d+)/)
  return match ? Number(match[1]) : 1
})

const nextProject = computed(() => {
  if (!projects || projects.length === 0) return null
  const idx = projects.findIndex(p => p.id === currentId.value)
  if (idx === -1) return projects[0]
  const nextIdx = (idx + 1) % projects.length
  return projects[nextIdx]
})
</script>

<style lang="scss" scoped>
.next-project {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: $s-1;
  border-top: $border-w solid $c-border;
  padding: $s-12 $s-8 $s-8 $s-3;
  width: 100%;
  margin-top: 12rem;
  position: relative;

  .info {
    display: flex;
    flex-direction: column;
  }

  svg {
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &:hover {
    svg {
      transform: translateX($s-4);
    }
  }

  .next-label {
    font-size: 0.78rem;
    color: $c-muted-fg;
    letter-spacing: 0.04em;
  }

  .next-title {
    font-size: 1.15rem;
    font-weight: 500;
  }
}
</style>
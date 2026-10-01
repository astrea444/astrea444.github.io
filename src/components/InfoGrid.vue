<script setup>
import { ref } from 'vue'
import PillGrid from './PillGrid.vue'
import { technologies, tools } from '../data/skills.js'
import { useI18n } from '@/composables/useI18n'

const { t, profile } = useI18n()

const order = ['experience', 'technologies', 'tools']
const open = ref({})

const isOpen = (id) => !!open.value[id]
const toggle = (id) => {
  open.value[id] = !open.value[id]
}
</script>

<template>
  <div class="accordion" v-reveal>
    <div v-for="id in order" :key="id" class="acc-item" :class="{ open: isOpen(id) }">
      <button class="acc-head" type="button" :aria-expanded="isOpen(id)" :aria-controls="`acc-${id}`"
        @click="toggle(id)">
        <span class="acc-title">{{ t(`ui.${id}`) }}</span>
        <span class="acc-icon" aria-hidden="true"></span>
      </button>

      <div :id="`acc-${id}`" class="acc-panel" :inert="!isOpen(id) ? '' : null">
        <div class="acc-inner">
          <div class="acc-content">
            <template v-if="id === 'experience'">
              <div v-for="item in profile.experience" :key="item.role" class="exp-item">
                <div class="exp-head">
                  <span class="role">{{ item.role }}</span>
                  <span class="dates">{{ item.dates }}</span>
                </div>
                <p>{{ item.description }}</p>
              </div>
            </template>

            <PillGrid v-else-if="id === 'technologies'" :items="technologies" />
            <PillGrid v-else :items="tools" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.accordion {
  @include accordion;

  .acc-title {
    font-size: $fs-xl;
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.1;
  }

  .acc-content {
    display: flex;
    flex-direction: column;
    gap: $s-5;
    padding: 0 $s-3 $s-8;

    .exp-item {
      display: flex;
      flex-direction: column;

      .exp-head {
        display: flex;
        align-items: baseline;
        flex-wrap: wrap;
        gap: $s-4;
        margin-bottom: $s-2;

        .role {
          font-weight: 500;
          font-size: $fs-base;
        }

        .dates {
          font-size: calc($fs-base * 0.8);
          color: $c-muted-fg;
          font-weight: 500;
        }
      }

      p {
        font-size: $fs-base;
        line-height: 1.4;
        color: $c-fg;
        opacity: 0.9;
      }
    }
  }
}
</style>
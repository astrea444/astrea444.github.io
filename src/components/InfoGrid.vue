<script setup>
import PillGrid from './PillGrid.vue'
import { experience, education, technologies, tools } from '../data/profile'
</script>

<template>
  <div class="info-grid">
    <div class="two-col wide" v-reveal>
      <div class="section">
        <h2 class="bar">Doświadczenie</h2>
        <div class="section-content">
          <div v-for="item in experience" :key="item.role" class="exp-item">
            <div class="exp-head">
              <span class="role">{{ item.role }}</span>
              <span class="dates">{{ item.dates }}</span>
            </div>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>

      <div class="section">
        <h2 class="bar">Technologie</h2>
        <div class="section-content">
          <PillGrid :items="technologies" />
        </div>
      </div>
    </div>

    <div class="two-col wide reverse" v-reveal>
      <div class="section">
        <h2 class="bar">Narzędzia</h2>
        <div class="section-content">
          <PillGrid :items="tools" />
        </div>
      </div>

      <div class="section">
        <h2 class="bar">Edukacja</h2>
        <div class="section-content">
          <div v-for="item in education" :key="item.title" class="edu-card">
            <div class="edu-dates">{{ item.dates }}</div>
            <div class="edu-sub">
              <strong>{{ item.title }}</strong>
              <template v-if="item.subtitle">{{ item.subtitle }}</template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info-grid {
  display: flex;
  flex-direction: column;
  gap: $s-12;

  @include respond(xs) {
    gap: 0;
  }

  .two-col {
    display: grid;
    grid-template-columns: 1fr;
    gap: $s-6;
    padding: $s-5 0;

    @include respond-max(tablet) {
      display: flex;
      flex-direction: column;
      gap: 0;
      padding: 0;
    }

    @include respond(sm) {
      grid-template-columns: 1fr 1fr;
    }

    &.wide {
      @include respond(sm) {
        grid-template-columns: 2.5fr 1.5fr;
      }
    }

    &.reverse {
      @include respond(sm) {
        grid-template-columns: 1.5fr 2.5fr;
      }
    }

    .section {
      padding: $s-3 0;

      @include respond(xs) {
        padding: $s-8 0;
      }

      .bar {
        @include section-bar;
      }

      .section-content {
        display: flex;
        flex-direction: column;
        gap: $s-5;
        padding: 0 $s-3;

        .exp-head {
          display: flex;
          justify-content: flex-start;
          align-items: baseline;
          gap: $s-4;
          margin-bottom: $s-2;
          flex-wrap: wrap;

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
      }

      .exp-item {
        display: flex;
        flex-direction: column;
        padding-right: 0;

        p {
          font-size: $fs-base;
          line-height: 1.4;
          color: $c-fg;
          opacity: .9;

          @include respond(xs) {
            margin-bottom: $s-4;
            font-size: $fs-base;
          }
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  .edu-card {
    min-height: $s-12;
    transition: transform 0.4s $ease, box-shadow 0.4s $ease;
    margin-bottom: $s-4;

    &:hover {
      transform: translateY(-2px);
    }

    &:last-child {
      margin-bottom: 0;
    }

    @include respond(xs) {
      border-width: $border-w;
    }

    .edu-dates {
      font-size: calc($fs-base * 0.8);
      opacity: .9;
      font-weight: 500;
      margin-bottom: $s-2;

      @include respond-max(tablet) {
        font-size: $fs-sm;
      }

    }

    .edu-sub {
      font-size: $fs-sm;
      line-height: 1.3;

      @include respond(xs) {
        font-size: $fs-base;
      }

      strong {
        font-weight: 500;
      }
    }
  }
}
</style>
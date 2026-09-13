<script setup>
import PortfolioText from './PortfolioText.vue'
import hero1 from '/assets/hero/hero_1.png'
import hero2 from '/assets/hero/hero_2.png'
import hero3 from '/assets/hero/hero_3.png'
import hero4 from '/assets/hero/hero_4.png'
import hero5 from '/assets/hero/hero_5.png'
import hero6 from '/assets/hero/hero_6.png'
import hero7 from '/assets/hero/hero_7.png'

const badges = ['Graphic Design', 'UI/UX Design', 'Frontend Dev']
const decorItems = [
  { src: hero1, cls: 'decor-1', delay: 0.55 },
  { src: hero2, cls: 'decor-2', delay: 0.62 },
  { src: hero7, cls: 'decor-7', delay: 1.1 },
  { src: hero3, cls: 'decor-3', delay: 0.75 },
  { src: hero5, cls: 'decor-5', delay: 0.82 },
  { src: hero6, cls: 'decor-6', delay: 0.85 },
  { src: hero4, cls: 'decor-4', delay: 0.97 },
]
</script>

<template>
  <section class="hero">
    <div class="hero-decor" aria-hidden="true">
      <div v-for="item in decorItems" :key="item.cls" class="decor" :class="item.cls">
        <img :src="item.src" alt="" class="decor-img" v-reveal :style="{ transitionDelay: `${item.delay}s` }" />
      </div>
    </div>

    <div class="hero-center">
      <p class="hero-kicker" v-reveal style="transition-delay: 0.05s">Wiktoria Laska</p>
      <div class="hero-title" v-reveal style="transition-delay: 0.15s">
        <PortfolioText />
      </div>

      <div class="badges-row">
        <div v-for="(b, i) in badges" :key="b" class="badge-slot" :class="`badge-slot-${i}`">
          <span class="badge" v-reveal :style="{ transitionDelay: `${0.5 + i * 0.12}s` }">
            {{ b }}
          </span>
        </div>
      </div>
    </div>

    <section class="hero-about" id="o-mnie">
      <span class="bar">O mnie</span>
      <div class="about-body" v-reveal>
        <p>
          Jestem studentką informatyki, specjalizującą się w projektowaniu interfejsów użytkownika, grafice
          komputerowej i frontend developmencie. Najlepiej odnajduję się w projektowaniu produktów cyfrowych oraz
          implementacji interfejsów.
        </p>
        <p>
          Dodatkowo ciągle rozwijam swoje umiejętności, aby projektować rozwiązania, które są nie tylko atrakcyjne
          wizualnie, ale również dobrze przemyślane od strony technicznej.
        </p>
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  padding: 4.5rem 0 $s-6;

  @include respond-max(tablet) {
    padding: 3rem 0 $s-4;
  }

  @include respond-max(lg) {
    padding: 4rem 0 $s-6;
  }
}

.hero-decor {
  position: absolute;
  inset: 1rem -18rem;
  z-index: 0;
  pointer-events: none;
  container-type: inline-size;

  @include respond-max(sm) {
    display: none;
  }
}

.decor {
  position: absolute;
}

.decor-img {
  display: block;
  width: 100%;
  transform-style: preserve-3d;
  height: auto;
  overflow: visible;
  will-change: transform, opacity;
}

%fly-in-base {
  transition:
    transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.5s ease-out;
}

.decor-1 {
  top: 3.1cqw;
  left: 5.3cqw;
  width: 8.8cqw;
}

.decor-2 {
  top: 7cqw;
  left: 12cqw;
  width: 8.2cqw;
  z-index: 1;
}

.decor-3 {
  top: 3.2cqw;
  right: 25.4cqw;
  width: 8cqw;
}

.decor-4 {
  top: 25.6cqw;
  right: 3.3cqw;
  width: 13.5cqw;
}

.decor-5 {
  top: 1cqw;
  right: 1cqw;
  width: 19cqw;
}

.decor-6 {
  top: 28.7cqw;
  left: 3cqw;
  width: 16cqw;
}

.decor-7 {
  top: 28cqw;
  left: 10cqw;
  width: 11cqw;
  z-index: 2;
}

.decor-1 .decor-img.reveal-on-scroll {
  @extend %fly-in-base;
  opacity: 0;
  transform: translate(-160px, -100px);
}

.decor-1 .decor-img.reveal-on-scroll.in-view {
  opacity: 1;
  transform: translate(0, 0);
}

.decor-2 .decor-img.reveal-on-scroll {
  @extend %fly-in-base;
  opacity: 0;
  transform: translate(-160px, -80px);
}

.decor-2 .decor-img.reveal-on-scroll.in-view {
  opacity: 1;
  transform: translate(0, 0);
}

.decor-7 .decor-img.reveal-on-scroll {
  @extend %fly-in-base;
  opacity: 0;
  transform: translate(-220px, -10px);
}

.decor-7 .decor-img.reveal-on-scroll.in-view {
  opacity: 1;
  transform: translate(0, 0);
}

.decor-3 .decor-img.reveal-on-scroll {
  @extend %fly-in-base;
  opacity: 0;
  transform: translate(170px, -100px);
}

.decor-3 .decor-img.reveal-on-scroll.in-view {
  opacity: 1;
  transform: translate(0, 0);
}

.decor-5 .decor-img.reveal-on-scroll {
  @extend %fly-in-base;
  opacity: 0;
  transform: translate(200px, -90px);
}

.decor-5 .decor-img.reveal-on-scroll.in-view {
  opacity: 1;
  transform: translate(0, 0);
}

.decor-6 .decor-img.reveal-on-scroll {
  @extend %fly-in-base;
  opacity: 0;
  transform: translate(-190px, 130px);
}

.decor-6 .decor-img.reveal-on-scroll.in-view {
  opacity: 1;
  transform: translate(0, 0);
}

.decor-4 .decor-img.reveal-on-scroll {
  @extend %fly-in-base;
  opacity: 0;
  transform: translate(210px, 130px);
}

.decor-4 .decor-img.reveal-on-scroll.in-view {
  opacity: 1;
  transform: translate(0, 0);
}

.hero-center {
  position: relative;
  z-index: 1;
  text-align: center;
}

.hero-kicker {
  text-align: center;
  letter-spacing: 0.1em;
  font-size: $fs-base;
  font-weight: 500;
  margin-bottom: $s-2;
  word-spacing: $s-3;

  @include respond-max(tablet) {
    font-size: $fs-base;
  }

  @include respond-max(lg) {
    font-size: $fs-lg;
  }
}

.hero-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: $s-12 0 0;
  min-height: 12rem;
}

.badges-row {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: $s-12;
  margin: 7rem auto 2rem;

  @include respond-max(xs) {
    gap: $s-6;
  }

  @include respond-max(mobile) {
    gap: $s-3;
  }

  @include respond(mobile) {
    gap: $s-3;
  }

  @include respond(tablet) {
    gap: $s-12;
    margin: 3rem auto 2.5rem;
  }

  @include respond(sm) {
    flex-direction: row;
    justify-content: space-evenly;
    width: 90%;
    flex-wrap: wrap;
    gap: 0;
    margin: 3rem auto 5rem;
  }
}

.badge-slot {
  height: fit-content;
  width: fit-content;

  &-0 {
    margin-bottom: $s-12;
    transform: rotate(-4deg);
  }

  &-1 {
    transform: rotate(2deg);
    margin: $s-3 0 0 $s-6;
  }

  &-2 {
    transform: rotate(3deg);
    margin: 0 0 $s-5 $s-6;
  }
}

.badge {
  @include main-shadow($color: $c-accent);
  display: inline-block;
  background: $c-bg;
  border: $border-w solid $c-border;
  border-radius: $radius-pill;
  white-space: nowrap;
  padding: $s-3 $s-6;
  font-weight: 500;
  height: fit-content;
  width: fit-content;
  font-size: $fs-sm;
  letter-spacing: 0.04em;

  @include respond-max(xs) {
    font-size: $fs-xs !important;
  }

  @include respond-max(mobile) {
    font-size: $fs-xs;
    padding: $s-3 $s-5;
  }

  @include respond-max(tablet) {
    font-size: $fs-sm;
    padding: $s-3 $s-5;
  }

  @include respond(sm) {
    font-size: $fs-base;
  }
}

.badge.reveal-on-scroll {
  @extend %fly-in-base;
  opacity: 0;
  transform: translateY(28px) scale(0.94);
}

.badge.reveal-on-scroll.in-view {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.hero-about {
  position: relative;
  z-index: 1;
  margin-top: 8rem;
}

.bar {
  @include section-bar;
}

.about-body {
  gap: $s-5;
  padding: $s-3;
  max-width: 100%;
  width: 100%;

  @include respond-max(sm) {
    padding: $s-2 $s-3;
  }

  p {
    font-size: $fs-sm;
    font-weight: 400;
    line-height: 1.45;
    letter-spacing: 0.012em;
    margin-bottom: $s-3;
    color: $c-fg;
    text-align: left;

    @include respond(xs) {
      margin-bottom: $s-4;
      font-size: $fs-base;
    }

    @include respond(sm) {
      font-size: $fs-base;
    }
  }
}
</style>
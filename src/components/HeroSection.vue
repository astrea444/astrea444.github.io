<script setup>
const badges = ['Graphic Design', 'UI/UX Design', 'Frontend Dev']
</script>

<template>
  <section class="hero">
    <div class="hero-center">
      <p class="hero-kicker" v-reveal style="transition-delay: 0.05s">Wiktoria Laska</p>
      <h1 class="hero-title" v-reveal style="transition-delay: 0.15s">
        <span class="font-script script big">P</span>
        <span class="font-display rounded">ort</span>
        <span class="font-script script tail">f</span>
        <span class="font-display rounded">olio</span>
      </h1>
      <div class="badges-row" v-reveal style="transition-delay: 0.3s">
        <span v-for="(b, i) in badges" :key="b" class="badge" :class="`badge-${i}`">{{ b }}</span>
      </div>
    </div>

    <div class="hero-text">
      <p v-reveal style="transition-delay: 0.42s">
        Jestem studentką informatyki, specjalizującą się w projektowaniu interfejsów użytkownika, grafice
        komputerowej i frontend developmencie. Najlepiej odnajduję się w projektowaniu produktów cyfrowych oraz
        implementacji interfejsów.
      </p>
      <p v-reveal style="transition-delay: 0.52s">
        Dodatkowo ciągle rozwijam swoje umiejętności, aby projektować rozwiązania, które są nie tylko atrakcyjne
        wizualnie, ale również dobrze przemyślane od strony technicznej.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  padding: 4.5rem 0 $s-6;

  @include respond-max(tablet) {
    padding: 3rem 0 $s-4;
  }

  @include respond-max(lg) {
    padding: 4rem 0 $s-6;
  }
}

.hero-kicker {
  text-align: center;
  letter-spacing: 0.35em;
  font-size: $fs-sm;
  font-weight: 500;
  margin-bottom: $s-2;

  @include respond-max(tablet) {
    font-size: $fs-base;
  }

  @include respond-max(lg) {
    font-size: $fs-lg;
  }
}

.hero-center {
  text-align: center;
}

.hero-title {
  display: flex;
  align-items: baseline;
  justify-content: center;
  line-height: 1;
  margin: $s-1 0 $s-1;
  font-size: calc($fs-3xl * 4);
  flex-wrap: wrap;

  @include respond-max(mobile) {
    font-size: calc($fs-3xl * 2) !important;
  }

  @include respond-max(tablet) {
    font-size: calc($fs-3xl * 3.5);
  }

  @include respond(sm) {
    font-size: calc($fs-3xl * 4);
    flex-wrap: nowrap;
  }

  .rounded {
    color: $c-fg;
    letter-spacing: 0.05em;
    font-size: 0.62em;
    z-index: 99;
  }

  .script {
    color: $c-accent;
  }

  .script.big {
    font-size: 2em;
    margin-right: -0.25em;
    rotate: -5deg;
  }

  .script.tail {
    font-size: 1.7em;
    margin: 0 -0.03em 0 0.05em;
    position: relative;
    rotate: -9deg;
    top: 0.02em;
    z-index: 0;
  }
}

.badges-row {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: $s-12;
  margin: 3rem auto 2rem;

  @include respond-max(xs) {
    gap: $s-6;
    flex-direction: column;
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

    &-0 {
      @include respond(xs) {
        margin-bottom: $s-12;
        transform: rotate(-4deg);
      }
    }

    &-1 {
      @include respond(xs) {
        transform: rotate(2deg);
        margin: $s-3 0 0 $s-6;
      }
    }

    &-2 {
      @include respond(xs) {
        transform: rotate(3deg);
        margin: 0 0 $s-5 $s-6;
      }
    }
  }
}

.hero-text {
  margin: 0 auto $s-12;
  max-width: 100%;

  @include respond(xs) {
    padding: $s-3 $s-6;
  }

  @include respond(sm) {
    max-width: 80%;
    padding-inline: 0;
  }
}

.hero-text p {
  font-size: $fs-sm;
  font-weight: 400;
  line-height: 1.45;
  letter-spacing: 0.012em;
  margin-bottom: $s-3;
  width: 100%;
  color: $c-fg;
  text-align: left;

  @include respond(xs) {
    padding: 0 $s-3;
    margin-bottom: $s-4;
    font-size: $fs-base;
  }

  @include respond(sm) {
    font-size: $fs-base;
  }
}
</style>
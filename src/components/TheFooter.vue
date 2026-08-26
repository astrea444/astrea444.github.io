<script setup>
import { Icon } from '@iconify/vue'
const year = new Date().getFullYear()
</script>

<template>
  <footer>
    <div class="footer-inner">
      <p>© {{ year }} Wiktoria Laska - Wszelkie prawa zastrzeżone.</p>
      <div class="footer-links">
        <a href="https://github.com/astrea444" target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:github" height="32" width="32" />
          GitHub
        </a>
        <a href="mailto:wiklas23@gmail.com">
          <Icon icon="material-symbols-light:mail-rounded" height="32" width="32" />
          Email
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  margin-top: 10rem;
  border-top: $border-w solid $c-border;
  width: 100%;
  padding: $s-8 $s-12;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 $s-12;
  gap: $s-3;

  p {
    font-size: $fs-xs;
    color: $c-muted-fg;
  }

  @include respond-max(tablet) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 $s-4;
  }
}

.footer-links {
  display: flex;
  gap: $s-5;

  a {
    display: flex;
    align-items: center;
    gap: $s-1;
    font-size: $fs-xs;
    font-weight: 500;
    border-radius: $radius-pill;
    padding: $s-2 $s-4;
    transition: transform 0.4s $ease, background-color 0.4s $ease, color 0.4s $ease, border-color 0.4s $ease;

    &:hover {
      transform: translateY(-2px);
      color: $c-accent;
    }
  }

  svg {
    width: $fs-lg;
    height: $fs-lg;
    margin-left: -0.45rem;
  }

  @include respond-max(tablet) {
    gap: $s-3;

    a {
      padding: $s-1 $s-3;
    }
  }
}
</style>
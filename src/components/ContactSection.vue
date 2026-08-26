<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const submitted = ref(false)
const loading = ref(false)
const error = ref('')

async function handleSubmit() {
  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    error.value = 'Wypełnij wszystkie pola.'
    return
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.email)) {
    error.value = 'Podaj poprawny adres e-mail.'
    return
  }

  loading.value = true
  error.value = ''

  try {
    const response = await fetch('https://formspree.io/f/xjgnzvpy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(form)
    })

    if (!response.ok) {
      throw new Error()
    }

    submitted.value = true
    form.name = ''
    form.email = ''
    form.message = ''
  } catch {
    error.value = 'Nie udało się wysłać wiadomości.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section class="contact" id="kontakt">
    <span class="bar">Kontakt</span>
    <div class="contact-body" v-reveal>
      <p class="lead">Masz projekt, przy którym mogłabym pomóc? Napisz kilka słów poniżej.</p>

      <form v-if="!submitted" @submit.prevent="handleSubmit">
        <div class="form-row">
          <label for="name">Imię</label>
          <input id="name" v-model="form.name" type="text" name="name" required />
        </div>
        <div class="form-row">
          <label for="email">Email</label>
          <input id="email" v-model="form.email" type="email" name="email" required />
        </div>
        <div class="form-row">
          <label for="message">Wiadomość</label>
          <textarea id="message" v-model="form.message" name="message" required />
        </div>
        <button type="submit" class="submit-btn" :disabled="loading">
          {{ loading ? 'Wysyłanie...' : 'Wyślij wiadomość' }}
        </button>
        <p v-if="error" class="form-error" role="alert" aria-live="assertive">
          {{ error }}
        </p>
      </form>

      <div v-else class="form-success" role="status">
        Dziękuję za wiadomość! Odezwę się najszybciej jak to możliwe.
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  margin-top: 4.5rem;

  @include respond(sm) {
    margin-top: 8.75rem;
  }
}

.bar {
  @include section-bar;
}

.contact-body {
  padding: $s-3;

  p.lead {
    color: $c-muted-fg;
    font-size: $fs-base;
    line-height: 1.7;
    margin-bottom: $s-8;
  }
}

.form-row {
  margin-bottom: 1.375rem;

  label {
    display: block;
    font-size: $fs-sm;
    font-weight: 500;
    margin-bottom: $s-1;
  }

  input,
  textarea {
    box-sizing: border-box;
    width: 100%;
    border: $border-w solid $c-border;
    border-radius: 0;
    padding: $s-1 $s-3;
    min-height: 3.25rem;
    background: $c-bg;
    color: $c-fg;
    font-size: $fs-base;
    transition: border-color 0.3s $ease, box-shadow 0.3s $ease;

    &:focus {
      outline: none;
      border-color: $c-accent;
      box-shadow: 0 0 0 0.1875rem rgba(61, 111, 224, 0.2);
    }
  }

  textarea {
    resize: vertical;
    min-height: 7.5rem;
    padding-top: $s-3;
  }
}

.submit-btn {
  @include main-shadow($color: $c-accent);
  border: $border-w solid $c-border;
  border-radius: $radius-pill;
  background: $c-bg;
  color: $c-fg;
  font-weight: 500;
  font-size: $fs-base;
  padding: $s-4 $s-6;
  margin-top: $s-2;
  width: 100%;

  @include respond(mobile) {
    width: auto;
  }
}

.form-success {
  border: $border-w solid $c-border;
  border-radius: 0;
  padding: $s-3;
  font-weight: 500;
  line-height: 1.6;
}
</style>
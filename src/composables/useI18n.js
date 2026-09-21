import { computed, ref } from 'vue'
import { projects } from '@/data/projects.js'
import pl from '@/i18n/locales/pl.js'
import en from '@/i18n/locales/en.js'
import projectTranslationsEn from '@/i18n/projectTranslations.en.js'

const messages = { pl, en }
const projectTranslations = { pl: {}, en: projectTranslationsEn }
const storedLocale = typeof window !== 'undefined' ? window.localStorage.getItem('portfolio-locale') : null
const locale = ref(storedLocale === 'en' ? 'en' : 'pl')

function mergeDeep(base, override) {
  if (Array.isArray(base)) {
    if (!Array.isArray(override)) return override ?? base

    const containsObjects = base.some((item) => item && typeof item === 'object')
      || override.some((item) => item && typeof item === 'object')

    if (!containsObjects) return override

    return base.map((item, index) => mergeDeep(item, override[index]))
  }
  if (!base || typeof base !== 'object') return override ?? base

  return Object.keys({ ...base, ...override }).reduce((result, key) => {
    result[key] = mergeDeep(base[key], override?.[key])
    return result
  }, {})
}

function getValue(source, path) {
  return path.split('.').reduce((value, key) => value?.[key], source)
}

export function useI18n() {
  const t = (path) => getValue(messages[locale.value], path) ?? getValue(messages.pl, path) ?? path
  const localizedProjects = computed(() => projects.map((project) => mergeDeep(project, projectTranslations[locale.value][project.id])))
  const profile = computed(() => messages[locale.value].profile ?? messages.pl.profile)

  function setLocale(nextLocale) {
    locale.value = nextLocale === 'en' ? 'en' : 'pl'
    document.documentElement.lang = locale.value
    window.localStorage.setItem('portfolio-locale', locale.value)
    document.title = locale.value === 'en'
      ? 'Wiktoria Laska - UI/UX Designer & Frontend Developer'
      : 'Wiktoria Laska - UI/UX Designerka & Frontend Developerka'
  }

  return { locale, t, setLocale, localizedProjects, profile }
}

export function initializeLocale() {
  document.documentElement.lang = locale.value
}

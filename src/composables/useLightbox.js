import { reactive } from 'vue'

const state = reactive({
  isOpen: false,
  images: [],
  currentIndex: 0,
  src: '',
  alt: ''
})

export function useLightbox() {
  function open(listOrSrc, altOrIndex = '', index = 0) {
    if (Array.isArray(listOrSrc)) {
      state.images = listOrSrc.map(item => {
        if (typeof item === 'string') return { src: item, alt: '' }
        return { src: item.src, alt: item.alt || '' }
      })
      state.currentIndex = typeof altOrIndex === 'number' ? altOrIndex : index
      state.src = state.images[state.currentIndex]?.src || ''
      state.alt = state.images[state.currentIndex]?.alt || ''
    } else {
      state.images = [{ src: listOrSrc, alt: typeof altOrIndex === 'string' ? altOrIndex : '' }]
      state.currentIndex = 0
      state.src = listOrSrc
      state.alt = typeof altOrIndex === 'string' ? altOrIndex : ''
    }
    state.isOpen = true
  }

  function next() {
    if (!state.images.length) return
    state.currentIndex = (state.currentIndex + 1) % state.images.length
    state.src = state.images[state.currentIndex].src
    state.alt = state.images[state.currentIndex].alt
  }

  function prev() {
    if (!state.images.length) return
    state.currentIndex = (state.currentIndex - 1 + state.images.length) % state.images.length
    state.src = state.images[state.currentIndex].src
    state.alt = state.images[state.currentIndex].alt
  }

  function close() {
    state.isOpen = false
    state.images = []
    state.currentIndex = 0
    state.src = ''
    state.alt = ''
  }

  return { state, open, close, next, prev }
}
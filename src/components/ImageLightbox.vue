<template>
    <Teleport to="body">
        <Transition name="lightbox">
            <div v-if="state.isOpen" class="lightbox" @click.self="handleClose" @wheel.prevent.stop="onWheel">
                <div class="toolbar">
                    <div class="zoom">
                        <button class="btn" @click="zoomOut" :disabled="scale <= MIN_SCALE"
                            aria-label="Oddal">−</button>
                        <span class="scale">{{ Math.round(scale * 100) }}%</span>
                        <button class="btn" @click="zoomIn" :disabled="scale >= MAX_SCALE"
                            aria-label="Przybliż">+</button>
                    </div>
                    <button class="btn btn--close" @click="handleClose" aria-label="Zamknij">×</button>
                </div>

                <button v-if="state.images.length > 1" class="nav-btn prev" @click.stop="prev" aria-label="Poprzednie">
                    <Icon icon="lucide:chevron-left" />
                </button>

                <div ref="stageRef" class="stage" @pointerdown="onPointerDown" @pointermove="onPointerMove"
                    @pointerup="onStagePointerUp" @pointercancel="onStagePointerUp"
                    :class="{ 'stage--zoomed': scale > MIN_SCALE, 'stage--dragging': isDragging }">
                    <img ref="imageRef" :src="state.src" :alt="state.alt" class="image" :style="imageStyle"
                        draggable="false" @pointerup.stop="onImagePointerUp" />
                </div>

                <button v-if="state.images.length > 1" class="nav-btn next" @click.stop="next" aria-label="Następne">
                    <Icon icon="lucide:chevron-right" />
                </button>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount, computed } from 'vue'
import { useLightbox } from '../composables/useLightbox'
import { Icon } from '@iconify/vue'

const { state, close, next, prev } = useLightbox()

const scale = ref(1)
const translate = ref({ x: 0, y: 0 })
const isDragging = ref(false)
const dragMoved = ref(false)
const dragStart = ref({ x: 0, y: 0 })
const startTranslate = ref({ x: 0, y: 0 })

const stageRef = ref(null)
const imageRef = ref(null)

const MIN_SCALE = 1
const MAX_SCALE = 4
const ZOOM_STEP = 0.5
const DRAG_THRESHOLD = 4

function resetView() {
    scale.value = 1
    translate.value = { x: 0, y: 0 }
}

watch(() => state.src, resetView)

watch(() => state.isOpen, (isOpen) => {
    if (!isOpen) resetView()
})

function handleClose() {
    resetView()
    close()
}

function clampScale(nextVal) {
    return Math.min(MAX_SCALE, Math.max(MIN_SCALE, nextVal))
}

function clampTranslate(x, y, currentScale = scale.value) {
    if (!imageRef.value || !stageRef.value) return { x: 0, y: 0 }

    const baseWidth = imageRef.value.offsetWidth
    const baseHeight = imageRef.value.offsetHeight
    const stageWidth = stageRef.value.clientWidth
    const stageHeight = stageRef.value.clientHeight

    const overflowX = Math.max(0, (baseWidth * currentScale - stageWidth) / 2)
    const overflowY = Math.max(0, (baseHeight * currentScale - stageHeight) / 2)

    return {
        x: Math.min(overflowX, Math.max(-overflowX, x)),
        y: Math.min(overflowY, Math.max(-overflowY, y)),
    }
}

function applyScale(nextVal) {
    const newScale = clampScale(nextVal)
    scale.value = newScale
    if (newScale === MIN_SCALE) {
        translate.value = { x: 0, y: 0 }
    } else {
        translate.value = clampTranslate(translate.value.x, translate.value.y, newScale)
    }
}

function zoomIn() {
    applyScale(scale.value + ZOOM_STEP)
}

function zoomOut() {
    applyScale(scale.value - ZOOM_STEP)
}

function onWheel(e) {
    e.preventDefault()
    const delta = e.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP
    applyScale(scale.value + delta)
}

function onPointerDown(e) {
    if (e.button !== undefined && e.button !== 0) return

    isDragging.value = true
    dragMoved.value = false
    dragStart.value = { x: e.clientX, y: e.clientY }
    startTranslate.value = { ...translate.value }

    e.target.setPointerCapture?.(e.pointerId)
}

function onPointerMove(e) {
    if (!isDragging.value) return

    const dx = e.clientX - dragStart.value.x
    const dy = e.clientY - dragStart.value.y

    if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) {
        dragMoved.value = true
    }

    if (scale.value > MIN_SCALE) {
        translate.value = clampTranslate(
            startTranslate.value.x + dx,
            startTranslate.value.y + dy
        )
    }
}

function onImagePointerUp(e) {
    const wasDragging = isDragging.value
    isDragging.value = false
    e.target.releasePointerCapture?.(e.pointerId)

    if (!wasDragging) return

    if (!dragMoved.value) {
        if (scale.value >= MAX_SCALE) {
            resetView()
        } else {
            applyScale(scale.value + ZOOM_STEP)
        }
    }

    dragMoved.value = false
}

function onStagePointerUp(e) {
    const wasDragging = isDragging.value
    const moved = dragMoved.value

    isDragging.value = false
    dragMoved.value = false

    if (wasDragging && !moved) {
        handleClose()
    }
}

function onKeydown(e) {
    if (!state.isOpen) return
    if (e.key === 'Escape') handleClose()
    if (e.key === '+') zoomIn()
    if (e.key === '-') zoomOut()
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
}

const imageStyle = computed(() => ({
    transform: `translate(${translate.value.x}px, ${translate.value.y}px) scale(${scale.value})`,
    transition: isDragging.value ? 'none' : 'transform 0.15s ease',
}))

onMounted(() => {
    window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeydown)
})
</script>

<style lang="scss" scoped>
.lightbox {
    position: fixed;
    inset: 0;
    z-index: 1000;
    background: rgba(251, 250, 247, 0.45);
    backdrop-filter: blur(8px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    cursor: default;
    width: 100vw;
    height: 100vh;

    .toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        gap: $s-2;
        padding: $s-8;
        z-index: 1001;

        .zoom {
            display: flex;
            flex-direction: row;
            align-items: center;
            background-color: $c-bg;
            border: $border-w solid $c-border;

            button {
                background-color: transparent;
                border: none;
            }

            span {
                line-height: 1;
            }
        }

        .btn {
            width: $s-8;
            height: $s-8;
            display: flex;
            align-items: center;
            justify-content: center;
            color: $c-ink;
            font-size: $fs-lg;
            background-color: $c-bg;
            border: $border-w solid $c-border;
            line-height: 1;
            cursor: pointer;
            transition: background-color 0.3s ease, color 0.3s ease;

            &:hover:not(:disabled) {
                background-color: $c-accent;
                color: $c-accent-fg;
            }

            &:active:not(:disabled) {
                transform: scale(0.91);
            }

            &:disabled {
                opacity: 0.4;
                cursor: not-allowed;
            }

            &--close {
                margin-left: $s-2;

                &:hover {
                    background-color: $c-accent-4;
                    color: $c-accent-fg;
                }
            }
        }

        .scale {
            min-width: 3.5rem;
            text-align: center;
            font-size: $fs-xs;
            color: $c-ink-soft;
            user-select: none;
        }
    }

    .nav-btn {
        position: fixed;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1005;
        width: 2rem;
        height: 2rem;
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        line-height: 1;
        user-select: none;
        transition: transform .3s ease;

        svg {
            height: 100%;
            width: auto;
            color: $c-muted-fg;
        }


        &.prev {
            left: $s-12;

            &:hover {
                transform: translate(-80%, -50%);
            }
        }

        &.next {
            right: $s-12;

            &:hover {
                transform: translate(-30%, -50%);
            }
        }
    }

    .stage {
        position: fixed;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        touch-action: none;

        &--zoomed {
            .image {
                cursor: grab;
            }
        }

        &--dragging {
            .image {
                cursor: grabbing;
            }
        }
    }

    .image {
        max-width: 85vw;
        max-height: 85vh;
        margin-top: 3rem;
        object-fit: contain;
        cursor: zoom-in;
        user-select: none;
        will-change: transform;
    }
}

.lightbox-enter-active,
.lightbox-leave-active {
    transition: opacity 0.25s $ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
    opacity: 0;
}
</style>
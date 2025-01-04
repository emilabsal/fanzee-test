<template>
  <header class="header">
    <NuxtLink
      class="h1"
      to="/"
      >Test Task</NuxtLink
    >
  </header>
  <div ref="target"></div>
</template>

<script setup lang="ts">
const target = ref(null)
const position = ref('static')
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(target, ([entry], observerElement) => {
  targetIsVisible.value = entry?.isIntersecting || false
})

watch(targetIsVisible, () => {
  position.value = targetIsVisible.value ? 'static' : 'fixed'
})

const top = computed(() => {
  if (position.value === 'fixed') {
    return 0
  }
  return '-48px'
})
</script>

<style scoped lang="scss">
.header {
  position: v-bind(position);
  top: v-bind(top);
  left: 0;
  right: 0;
  width: 100%;
  z-index: 10;
  background-color: $color-background;
  padding: 31px 48px;
  transition: $transition;
}

@media screen and (max-width: 700px) {
  .header {
    padding: 12px;
  }
}
</style>

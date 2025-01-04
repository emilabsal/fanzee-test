<template>
  <div class="layout">
    <TheHeader />
    <div class="layout__inner container">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'
</script>

<style scoped lang="scss">
.layout {
  width: 100%;
  @include flex($fd: column, $ai: start, $jc: start);
  min-height: 100svh;

  &__inner {
    flex-grow: 1;
  }
}
</style>

<template>
  <div class="tag">
    <NuxtIcon
      class="tag__icon"
      :name="icon" />
    <span class="tag__label">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
import type { Tag } from './BaseTag.types'

const { icon, label } = defineProps<Tag.Props>()
</script>

<style scoped lang="scss">
.tag {
  padding: 2px 6px;
  border-radius: $radius-small;
  font-size: 11px;
  font-weight: 500;
  line-height: 13px;
  @include flex($gap: 2px);
  color: $color-primary;
  user-select: none;

  &__icon {
    color: $color-primary;
    font-size: 8px;
  }
}
</style>

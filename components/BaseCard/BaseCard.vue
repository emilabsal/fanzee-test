<template>
  <NuxtLink
    class="card"
    :to="`/movie/${data.id}`">
    <NuxtImg
      class="card__image"
      :src="data.poster"
      :alt="data.name"
      placeholder="/images/placeholder.webp"
      width="auto"
      height="172px"
      format="webp"
      loading="lazy"
      fit="contain" />
    <div class="card__desc">
      <p class="card__title h2">{{ data.name }}</p>
      <p class="card__text text">{{ data.description }}</p>
    </div>
    <div class="card__tags">
      <TagsBlock
        :rating="data.rating"
        :genre="data.genre"
        :duration="data.duration" />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Card } from './BaseCard.types'

const { data } = defineProps<Card.Props>()
</script>

<style scoped lang="scss">
.card {
  background-color: $color-background;
  border-radius: $radius-large;
  padding: 12px;
  overflow: hidden;
  @include flex($fd: column, $jc: start, $ai: start, $gap: 12px);
  user-select: none;
  text-decoration: none;

  &:hover:not(:active, :focus) {
    box-shadow: 8px 8px $color-shadow;
    transition: $transition;
  }

  &:active,
  &:focus-visible {
    outline: 3px solid $color-shadow;
  }

  &__image {
    border-radius: $radius-small;
    -webkit-user-drag: none;
  }

  &__desc {
    width: 100%;
    @include flex($fd: column, $ai: start, $gap: 4px);
  }

  &__title {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__text {
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>

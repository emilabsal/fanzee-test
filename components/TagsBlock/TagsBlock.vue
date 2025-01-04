<template>
  <div class="tags">
    <BaseTag
      class="tags__rating"
      icon="star"
      :label="formattedRating" />
    <BaseTag
      class="tags__genre"
      icon="movie"
      :label="genre" />
    <BaseTag
      class="tags__duration"
      icon="clock"
      :label="duration" />
  </div>
</template>

<script setup lang="ts">
import type { Tags } from './TagsBlock.types'

const { rating, genre, duration } = defineProps<Tags.Props>()

const formattedRating = computed(() => String(rating.toFixed(1)))

const ratingMapping: Record<
  Tags.RatingStatus,
  { rating: number; color: string }
> = {
  red: {
    rating: 4,
    color: '#E81A0C'
  },
  purple: {
    rating: 7,
    color: '#702BFE'
  },
  green: {
    rating: 10,
    color: '#039C55'
  }
}

const ratingStatus = computed<Tags.RatingStatus>(() => {
  if (+formattedRating.value < ratingMapping.red.rating) return 'red'
  else if (+formattedRating.value < ratingMapping.purple.rating) return 'purple'
  else if (+formattedRating.value <= ratingMapping.green.rating) return 'green'
  else return 'green'
})

const getBackgroundColor = computed(
  () => ratingMapping[ratingStatus.value].color
)
</script>

<style scoped lang="scss">
.tags {
  @include flex($gap: 8px);

  &__rating {
    background-color: v-bind(getBackgroundColor);
  }

  &__genre {
    background-color: $color-genre;
  }
  &__duration {
    background-color: $color-duration;
  }
}
</style>

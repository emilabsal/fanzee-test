<template>
  <div class="main">
    <div class="main__cards">
      <BaseCard
        v-for="movie in movies"
        :key="movie.id"
        :data="movie" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MoviesResponse } from '~/types/api'

const { data: movies } = await useFetch('/api/data.json', {
  transform: (data: MoviesResponse) => data.items
})
</script>

<style scoped lang="scss">
.main {
  padding-block: 32px;

  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(324px, 1fr));
    gap: 16px;
  }
}

@media screen and (max-width: 700px) {
  .main__cards {
    grid-template-columns: 1fr;
  }
}
</style>

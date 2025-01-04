<template>
  <div class="detail">
    <div
      v-if="movie"
      class="detail__inner">
      <aside class="sidebar">
        <span class="sidebar__title h1">{{ movie.name }}</span>
        <NuxtImg
          class="sidebar__image"
          :name="movie.poster"
          width="240px"
          fit="contain"
          placeholder="/images/placeholder.webp" />
        <TagsBlock
          class="sidebar__tags"
          :rating="movie.rating"
          :genre="movie.genre"
          :duration="movie.duration" />
      </aside>
      <main class="main">
        <div class="main__inner">
          <div class="main__block">
            <span class="main__title h1">Description</span>
            <p class="main__text text">{{ movie.description }}</p>
          </div>
          <div class="main__block">
            <span class="main__title h1">Trivia</span>
            <ul class="main__list">
              <li
                v-for="item in movie.trivia"
                :key="item"
                class="main__item text">
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="main__block">
            <span class="main__title h1">Actors</span>
            <ul class="main__list">
              <li
                v-for="actor in movie.actors"
                :key="actor.imdb_id"
                class="main__item">
                <a
                  class="main__link text"
                  :href="`https://www.imdb.com/name/${actor.imdb_id}`"
                  target="_blank">
                  {{ actor.name }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
    <div
      v-else
      class="empty">
      <p class="empty__text h4">
        There's no detailed information about this movie.
        <NuxtLink
          class="empty__link"
          to="/"
          >Go back</NuxtLink
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MovieDetailsResponse } from '~/types/api'

const { data } = await useFetch<MovieDetailsResponse>('/api/detail.json')
const route = useRoute()

const movie = computed(() =>
  data.value?.items?.find(({ id }) => id === Number(route.params.id))
)
</script>

<style scoped lang="scss">
.detail {
  padding-block: 24px;

  &__inner {
    @include flex($ai: start, $gap: 64px);
  }
}

.sidebar {
  width: 240px;
  overflow: hidden;
  flex-shrink: 0;
  @include flex($fd: column, $ai: start, $gap: 24px);
  position: sticky;
  top: 124px;

  &__image {
    border-radius: $radius-small;
  }
}

.main {
  &__inner {
    @include flex($fd: column, $ai: start, $gap: 16px);
    max-width: 340px;
  }

  &__title {
    display: inline-block;
    margin-bottom: 16px;
  }

  &__link {
    text-decoration: underline;
  }
}

.empty {
  &__link {
    text-decoration: underline;
  }
}

@media screen and (max-width: 700px) {
  .detail__inner {
    flex-direction: column;
  }

  .sidebar {
    position: static;
  }
}
</style>

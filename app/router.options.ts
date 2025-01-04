import type { RouterConfig } from '@nuxt/schema'

export default {
  routes: (_routes) => [
    {
      name: 'main',
      path: '/',
      component: () => import('~/pages/main.vue')
    },
    {
      name: 'movie',
      path: '/movie/:id',
      component: () => import('~/pages/movie/[id].vue')
    }
  ]
} satisfies RouterConfig

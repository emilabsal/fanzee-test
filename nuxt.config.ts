// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ['~/assets/styles/global.scss'],
  vue: {
    propsDestructure: true
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/styles/partials/_variables.scss" as *;
            @use "~/assets/styles/partials/_typography.scss" as *;
            @use "~/assets/styles/partials/_mixins.scss" as *;`
        }
      }
    }
  },
  modules: ['@nuxt/fonts', '@nuxt/image', 'nuxt-icons', '@vueuse/nuxt']
})

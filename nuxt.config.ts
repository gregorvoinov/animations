// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/animations/' // baseURL: '/<repository>/'
  },
  css: ["~/assets/css/fonts.css", "~/assets/css/tailwind.css"],
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})

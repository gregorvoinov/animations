// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    baseURL: '/animations/',
    head: {
      title: "design syste222m",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "my website description",
        },
        { name: "format-detection", content: "telephone=no" },
        { name: "theme-color", content: "#ffffff" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: '/favicon.svg?v1' },
      ],
      htmlAttrs: {
        lang: "en",
      },
      bodyAttrs: {
        class: "overflow-x-hidden overflow-y-scroll w-screen text-black-gray select-none font-hurme font-light",
      },
    },
    // pageTransition: { name: 'page'},
    // layoutTransition: { name: 'layout' }
  },
  css: ["~/assets/css/fonts.css", "~/assets/css/tailwind.css"],
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})

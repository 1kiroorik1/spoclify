// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-11',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '~/assets/css/main.css'
  ],
  runtimeConfig: {
    public: {      
      spotifyClientId: "743329708189443dabe5454d84a45329",
      spotifyRedirectUri: 'https://spoclify.vercel.app/callback',
      spotifyClientSecret: "32f81b9db95345c2ad5eaea250c71e47"
    }
  },
  routeRules: {
    '/.well-known/**': { static: true }
  },
  app: {
    head: {
      title: 'Spotify Clone',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})

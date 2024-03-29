// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // devtools: { enabled: true },

  // ssr:true,

  runtimeConfig: {
    LINE_CHANNEL_ACCESS_TOKEN: process.env.LINE_CHANNEL_ACCESS_TOKEN,
    appSecret: '123',
    
    public: {
      uid: '55555',
      token: process.env.LINE_CHANNEL_ACCESS_TOKEN
    }
  },

  modules:[
    'nuxt-quasar-ui',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    // 'nuxt-security'
  ],


  // security: {
  //   headers: {
      
  //     contentSecurityPolicy: false,
  //     crossOriginEmbedderPolicy: 'credentialless',
  //     crossOriginOpenerPolicy: 'unsafe-none',
  //     crossOriginResourcePolicy: 'cross-origin',
      
      
  //   },
  //   corsHandler: {
  //     origin: '*',
  //     methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  //     // allowHeaders: '*',
  //     // credentials: true,
  //     preflight: {
  //       statusCode: 204
  //     },
  //     throwError: true
  //   },
  // },

  quasar: {
    plugins: [
      'BottomSheet',
      'Dialog',
      'Loading',
      'LoadingBar',
      'Notify',
      'Dark',
    ],
    extras: {
      font: 'roboto-font',
      fontIcons: ['material-icons'],
    }
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },

  googleFonts: {
    // Options
  },

  // When use plugins
  plugins: [
    '~/plugins/liff-init.client.ts', // add liff.init() plugin
  ],
})

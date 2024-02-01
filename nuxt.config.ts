// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // devtools: { enabled: true },

  runtimeConfig: {
    LINE_CHANNEL_ACCESS_TOKEN: process.env.LINE_CHANNEL_ACCESS_TOKEN,
    appSecret: '123',
    
    public: {
      uid: '55555',
      token: process.env.LINE_CHANNEL_ACCESS_TOKEN
    }
  },

  modules:[
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
  //     origin: 'http://localhost:3000',
  //     methods: '*',
  //     allowHeaders: '*',
  //     credentials: true,
  //     preflight: {
  //       statusCode: 204
  //     },
  //     throwError: true
  //   },
  // },


  // liff:{
  //   liffId:'2003108655-0xrnX2Lx',
  //   // mock:false
  // },

  // When use plugins
  plugins: [
    '~/plugins/liff-init.client.ts', // add liff.init() plugin
  ],
})

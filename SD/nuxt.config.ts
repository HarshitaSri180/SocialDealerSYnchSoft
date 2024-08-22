// https://v3.nuxtjs.org/api/configuration/nuxt.config
const ONE_DAY = 60 * 60 * 24 * 1000;
const ONE_WEEK = ONE_DAY * 7;

export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    cookieName: process.env.COOKIE_NAME || "__session",
    cookieSecret: process.env.COOKIE_SECRET || "secret",
    cookieExpires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES || (60 * 60 * 24 * 1000).toString(), 10),
    cookieRememberMeExpires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES || (60 * 60 * 24 * 7 * 1000).toString(), 10),
    public: {
      API_URL: process.env.API_URL,
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },
  router: {
    middleware: ['auth']
  },
  imports: {
    dirs: ['store'],
  },
  modules: [
    "@unocss/nuxt",
    ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }],
  ],
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/scss/main.scss"
  ],
  plugins: [
    '~/plugins/api-client.js',
    '~/plugins/notyf.js', // Add this line
  ],
  app: {
    head: {
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.ico' },
        {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.ico'},
        // { rel: 'manifest', href: '/site.webmanifest' },
        // { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      ],
    },
  },
  compatibilityDate: '2024-07-16'
});
  
import vuetify from 'vite-plugin-vuetify'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins.push(
        vuetify({
          styles: { configFile: resolve('./settings.scss') },
        })
      )
    }
  }
})

import { fileURLToPath } from 'url'

import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2({
      jsx: true
    }),
    Components({
      resolvers: IconsResolver()
    }),
    Icons({ compiler: 'vue2' })
  ],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

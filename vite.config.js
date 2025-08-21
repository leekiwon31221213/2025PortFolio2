import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.js', '.vue', '.scss', '.css', '.png', '.jpg', '.jpeg', '.svg'],
    alias: {
      '/assets': path.resolve(__dirname, 'src/assets'),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "/assets/scss/common/variable.scss" as *;
         @use "/assets/scss/mixin/glass_btn.scss" as *;
        `,
      },
    },
  },
})

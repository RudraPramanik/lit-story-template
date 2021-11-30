import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/components/index.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  }
})

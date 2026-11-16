import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import { ViteMinifyPlugin } from 'vite-plugin-minify';
// import { viteSingleFile } from 'vite-plugin-singlefile';

// https://vite.dev/config/
export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
  },
  publicDir: 'public_assets',
  plugins: [vue()],
  // plugins: [vue(), ViteMinifyPlugin(), viteSingleFile()],
})

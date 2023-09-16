import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      // default settings on build (i.e. fail on error)
      ...eslint(),
      apply: 'build',
    },
    {
      // do not fail on serve (i.e. local development)
      ...eslint({
        failOnWarning: true,
        failOnError: true,
      }),
      apply: 'serve',
      enforce: 'post',
      name: 'eslint'
    },
  ],

  resolve: {
    alias: {
      src: '/src',
    },
  },

  server: {
    port: 3030,
  },
});

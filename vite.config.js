import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  base: "/space-news/",
  build: { // to output your build into build dir the same as Webpack
    outDir: 'dist',
    sourcemap: true,
  },
  server: {
    open: true,
    port: 3000,
  },
});

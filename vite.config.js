import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    base: '/Film-Library/',
    plugins: [react()],
    server: {
      host: true,
    },
  };
});

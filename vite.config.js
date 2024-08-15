import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    base: '/repo/',
    plugins: [react()],
    server: {
      host: true,
    },
  };
});

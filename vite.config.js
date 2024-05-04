// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
      outDir: 'build',  
  },
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
});

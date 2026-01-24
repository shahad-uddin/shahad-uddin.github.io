
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Use relative base path so it works on any GitHub Pages URL
  base: './',
  define: {
    'process.env': {
      API_KEY: process.env.API_KEY || ''
    }
  }
});

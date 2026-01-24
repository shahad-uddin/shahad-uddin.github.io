import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Using './' as base ensures all assets (JS, CSS, Images) are resolved relative to the current folder,
  // which is essential for GitHub Pages repositories (e.g., username.github.io/repo-name/)
  base: './',
  define: {
    // Injects the environment variable as a literal string during the build process
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || '')
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // Ensure clean builds
    emptyOutDir: true
  }
});
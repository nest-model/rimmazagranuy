import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' — сайт работает из любой папки (GitHub Pages, обычный хостинг, архив).
export default defineConfig({
  plugins: [react()],
  base: './',
});

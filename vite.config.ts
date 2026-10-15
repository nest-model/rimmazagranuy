import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';

// base: './' — сайт работает из любой папки (GitHub Pages, обычный хостинг, архив).
// imagetools — фото из папки uploads/ при сборке сами уменьшаются и сжимаются в webp.
export default defineConfig({
  plugins: [react(), imagetools()],
  base: './',
});

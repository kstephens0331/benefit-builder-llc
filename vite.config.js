import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  plugins: [react(), imagetools(), viteCompression({ algorithm: 'brotliCompress' })],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});

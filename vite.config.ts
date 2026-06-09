import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
import { imagetools } from "vite-imagetools";
import { fileURLToPath } from "node:url";

const helmetEsm = fileURLToPath(
  new URL("./node_modules/react-helmet-async/lib/index.esm.js", import.meta.url)
);

export default defineConfig({
  plugins: [react(), compression(), imagetools()],
  server: { port: 5173 },
  resolve: {
    alias: {
      "react-helmet-async": helmetEsm,
    },
  },
  build: {
    outDir: "dist",
    assetsInlineLimit: 0,
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          motion: ["framer-motion"],
          forms: ["react-hook-form", "@hookform/resolvers", "zod"],
        },
      },
    },
  },
  ssr: {
    noExternal: true,
  },
  optimizeDeps: {
    include: ["react-helmet-async"],
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: [],
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [react(), compression(), imagetools()],
  server: { port: 5173 },
  build: { outDir: "dist", assetsInlineLimit: 0 }
});

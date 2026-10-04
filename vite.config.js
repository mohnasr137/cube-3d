import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
    open: false,
  },
  preview: {
    port: 4173,
    open: false,
  },
  build: {
    target: "esnext",
    sourcemap: true,
  },
});

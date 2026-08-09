import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three", "three-stdlib"],
          gsap: ["gsap"],
          react: ["react", "react-dom"],
        },
      },
    },
  },
});

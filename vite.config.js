import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    rollupOptions: {
      output: {
        // Split heavy vendor code so the page shell loads and caches independently
        manualChunks: {
          three: ["three"],
          r3f: ["@react-three/fiber", "@react-three/drei"],
          gsap: ["gsap", "@gsap/react"],
        },
      },
    },
    chunkSizeWarningLimit: 800,
  },
});

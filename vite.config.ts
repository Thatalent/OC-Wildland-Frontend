import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// Log to prove it's being used
console.log("✅ Using Tailwind + PostCSS in Vite");

export default defineConfig({
  base: "./",
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/api": "http://localhost:8080/api/graphql",
      "/images": "http://localhost:8080/",
    }
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});

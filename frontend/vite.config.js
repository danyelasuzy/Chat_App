import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "valentine",
      "cyberpunk",
      "aqua",
      "coffee",
      "halloween",
      "dracula",
      "caramellatte",
    ],
  },
  server: {
    host: "localhost",
    port: 5173,
  },
  build: {
    outDir: "dist",
  },
});

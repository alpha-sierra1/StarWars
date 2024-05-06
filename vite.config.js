// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import { ghPages } from "vite-plugin-gh-pages";

export default defineConfig({
  plugins: [react(), ghPages()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  base: "./starwars",
});

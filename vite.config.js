/* eslint-disable no-unused-vars */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
// https://vite.dev/config/

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // build: {
  //   outDir: "dist",
  // },
  // base: "/",
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "src"),
    },
  },
});

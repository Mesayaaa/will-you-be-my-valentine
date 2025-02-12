import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/buat-km/",
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
  },
});

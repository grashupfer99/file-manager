/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import { configDefaults } from "vitest/config";
// ----------------------------------------------------------------------

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsConfigPaths()],
  server: {
    host: "0.0.0.0",
    port: 8000,
    proxy: {
      "/api": {
        target: "https://storage-fe.fastraffic.io/links.json",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  test: {
    environment: "jsdom",
    exclude: [...configDefaults.exclude, "e2e"],
  },
});

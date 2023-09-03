import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsConfigPaths()],
  server: {
    host: "0.0.0.0",
    port: 8000,
  },
});

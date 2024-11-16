import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Resolve the directory path using import.meta.url
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(new URL("./src", import.meta.url).pathname),
    },
  },
});

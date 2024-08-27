import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), tsconfigPaths()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      {
        find: "@ds",
        replacement: path.resolve(__dirname, "node_modules/design-system/src"),
      },
    ],
  },
});

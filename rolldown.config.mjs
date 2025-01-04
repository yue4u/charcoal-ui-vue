import vue from '@vitejs/plugin-vue'
import { defineConfig } from "rolldown";

export default defineConfig({
  input: "src/index.ts",
  platform: 'browser',
  output: {
    format: "esm",
    dir: "dist",
    minify: true,
  },
  plugins: [
    vue()
  ],
  treeshake: true,
  external: ['vue', '@charcoal-ui/icon-files']
});

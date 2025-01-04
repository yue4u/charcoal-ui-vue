import type { StorybookConfig } from "@storybook/vue3-vite";
import vue from "@vitejs/plugin-vue";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "storybook-dark-mode",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  viteFinal(config) {
    return mergeConfig(config, {
      plugins: [
        vue({
          template: {
            compilerOptions: {
              isCustomElement(tag) {
                return tag === "pixiv-icon";
              },
            },
          },
        }),
      ],
    });
  },
};
export default config;

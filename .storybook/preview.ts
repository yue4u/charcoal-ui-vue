import type { Preview } from "@storybook/vue3";
import "../src/tokens.css";
import "../upstream/charcoal/.storybook/global.css";
import { useDarkMode } from "storybook-dark-mode";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      stylePreview: true,
    },
  },
  decorators: [
    () => {
      const dark = useDarkMode();
      if (dark) {
        document.documentElement.dataset["theme"] = "dark";
      } else {
        delete document.documentElement.dataset["theme"];
      }

      return {
        template: "<story />",
      };
    },
  ],
};

export default preview;

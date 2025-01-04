import charcoalIconFiles from "@charcoal-ui/icon-files";
import type { Meta, StoryFn } from "@storybook/vue3";
import ChIcon from "./ChIcon.vue";

export default {
  title: "components/ChIcon",
  component: ChIcon,
} satisfies Meta<typeof ChIcon>;

export const Default: StoryFn<typeof ChIcon> = (args) => ({
  components: { ChIcon },
  setup() {
    return { args };
  },
  template: `<div style="display:grid;grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));gap: 16px">${Object.keys(
    charcoalIconFiles
  )
    .map((name) => {
      return `<div style="display:grid; grid-auto-flow: column;align-items: center; justify-content:left; gap: 8px;"><ch-icon name="${name}" />${name}</div>`;
    })
    .join("")}</div>`,
});

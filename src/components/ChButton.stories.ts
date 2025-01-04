import { fn } from "@storybook/test";
import type { Meta, StoryFn } from "@storybook/vue3";
import ChButton from "./ChButton.vue";

export default {
  title: "components/ChButton",
  component: ChButton,
  args: {
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["Primary", "Default", "Overlay", "Danger", "Navigation"],
    },
    size: {
      control: { type: "select" },
      options: ["S", "M"],
    },
    fullWidth: {
      control: { type: "boolean" },
    },
    isActive: {
      control: { type: "boolean" },
    },
  },
} as Meta<typeof ChButton>;

export const Default: StoryFn<typeof ChButton> = (args) => ({
  components: { ChButton },
  setup() {
    return { args };
  },
  template: `<ch-button v-bind="args">Button</ch-button>`,
});

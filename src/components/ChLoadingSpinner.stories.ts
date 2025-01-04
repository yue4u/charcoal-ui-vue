import type { Meta, StoryFn } from "@storybook/vue3";
import ChLoadingSpinner from "./ChLoadingSpinner.vue";

export default {
  title: "components/ChLoadingSpinner",
  component: ChLoadingSpinner,
  argTypes: {
    size: {
      control: { type: "number" },
    },
    padding: {
      control: { type: "number" },
    },
    transparent: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof ChLoadingSpinner>;

// @ts-expect-error
export const Default: StoryFn<typeof ChLoadingSpinner> = {};

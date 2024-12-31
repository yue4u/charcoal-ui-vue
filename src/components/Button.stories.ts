import type { Meta, StoryFn } from "@storybook/vue3";
import Button from "./Button.vue";

export default {
  component: Button,
} satisfies Meta<typeof Button>;

export const Default: StoryFn<typeof Button> = {
  args: {},
};

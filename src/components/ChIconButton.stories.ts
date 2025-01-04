import charcoalIconFiles from "@charcoal-ui/icon-files";
import type { Meta, StoryFn } from "@storybook/vue3";
import ChIconButton from "./ChIconButton.vue";

export default {
  title: "components/ChIconButton",
  component: ChIconButton,
  args: {
    icon: "16/Add",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["Default", "Overlay"],
    },
    size: {
      control: { type: "select" },
      options: ["XS", "S", "M"],
    },
    icon: {
      control: { type: "select" },
      options: Object.keys(charcoalIconFiles),
    },
  },
} satisfies Meta<typeof ChIconButton>;

// @ts-expect-error
export const Default: StoryFn<typeof ChIconButton> = {};

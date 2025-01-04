import type { Meta, StoryFn } from "@storybook/vue3";
import { ref } from "vue";
import ChCheckbox from "./ChCheckbox.vue";

export default {
  title: "components/ChCheckbox",
  component: ChCheckbox,
  argTypes: {
    invalid: {
      control: { type: "boolean" },
    },
    rounded: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof ChCheckbox>;

export const Default: StoryFn<typeof ChCheckbox> = (args) => {
  return {
    components: { ChCheckbox },
    setup() {
      const value = ref(false);
      return { args, value };
    },
    template: `<ch-checkbox v-bind="args" v-model="value">checkbox: {{ value}}</ch-checkbox>`,
  };
};

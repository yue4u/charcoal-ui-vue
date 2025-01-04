import type { Meta, StoryFn } from "@storybook/vue3";
import { ref } from "vue";
import ChSwitch from "./ChSwitch.vue";

export default {
  title: "components/ChSwitch",
  component: ChSwitch,
} satisfies Meta<typeof ChSwitch>;

export const Default: StoryFn<typeof ChSwitch> = (args) => ({
  components: { ChSwitch },
  setup() {
    const value = ref(true);
    return { args, value };
  },
  template: `<ch-switch v-bind="args" v-model="value">switch: {{ value }}</ch-switch>`,
});

import type { Meta, StoryFn } from "@storybook/vue3";
import { ref } from "vue";
import ChRadio from "./ChRadio.vue";
import ChRadioGroup from "./ChRadioGroup.vue";

export default {
  title: "components/ChRadio",
  component: ChRadio,
} satisfies Meta<typeof ChRadio>;

export const Default: StoryFn<typeof ChRadio> = (args) => ({
  components: { ChRadio, ChRadioGroup },
  setup() {
    const value = ref("1");
    return { args, value };
  },
  template: `<div style="display:flex; flexDirection:column; gap:24px;">
    <ch-radio-group name="test" v-model="value">
      <ch-radio value="1">1</ch-radio>
      <ch-radio value="2">2</ch-radio>
      <ch-radio value="3" disabled>3</ch-radio>
    </ch-radio-group>
    <p>value: {{ value }}</p>
  </div>`,
});

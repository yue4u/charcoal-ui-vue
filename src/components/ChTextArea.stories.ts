import type { Meta, StoryFn } from "@storybook/vue3";
import { ref } from "vue";
import ChTextArea from "./ChTextArea.vue";

export default {
  title: "components/ChTextArea",
  component: ChTextArea,
  args: {
    showCount: true,
    showLabel: true,
    value: "test",
    label: "label",
    subLabel: "subLabel",
    assistiveText: "assistiveText",
    required: true,
    requiredText: "*",
    maxlength: 200,
    autoHeight: true,
  },
  argTypes: {
    showCount: {
      control: { type: "boolean" },
    },
    showLabel: {
      control: { type: "boolean" },
    },
    required: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    invalid: {
      control: { type: "boolean" },
    },
    autoHeight: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof ChTextArea>;

export const Default: StoryFn<typeof ChTextArea> = (args) => ({
  components: { ChTextArea },
  setup() {
    const value = ref("");
    return { args, value };
  },
  template: `<ch-text-area v-bind="args" v-model="value">
    <template v-slot:subLabel>subLabel</template>
  </ch-text-area>`,
});

import type { Meta, StoryFn } from "@storybook/vue3";
import { ref } from "vue";
import ChTextField from "./ChTextField.vue";

export default {
  title: "components/ChTextField",
  component: ChTextField,
  args: {
    showCount: true,
    showLabel: true,
    value: "test",
    label: "label",
    subLabel: "subLabel",
    assistiveText: "assistiveText",
    required: true,
    requiredText: "*",
    maxlength: 10,
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
  },
} satisfies Meta<typeof ChTextField>;

export const Default: StoryFn<typeof ChTextField> = (args) => ({
  components: { ChTextField },
  setup() {
    const value = ref("");
    return { args, value };
  },
  template: `<ch-text-field v-bind="args" v-model="value">
    <template v-slot:prefix>prefix</template>
    <template v-slot:suffix>.suffix</template>
    <template v-slot:subLabel>subLabel</template>
  </ch-text-field>`,
});

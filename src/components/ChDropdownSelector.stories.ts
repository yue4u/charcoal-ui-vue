import type { Meta, StoryFn } from "@storybook/vue3";
import { ref } from "vue";
import ChDropdownSelector from "./ChDropdownSelector.vue";

export default {
  title: "components/ChDropdownSelector",
  component: ChDropdownSelector,
  args: {
    items: [{ value: "1" }, { value: "2" }, { value: "3" }],
  },
  argTypes: {},
} as Meta<typeof ChDropdownSelector>;

export const Default: StoryFn<typeof ChDropdownSelector> = (args) => ({
  components: { ChDropdownSelector },
  setup() {
    const selected = ref("1");
    return { args, selected };
  },
  template: `<ch-dropdown-selector 
      v-bind="args" 
      v-model="selected" 
      label="selector"
      name="selector"
      showLabel
      requiredText="required"
      required
      :assistiveText="\`selected: \${selected}\`"
    >
      <template v-slot:subLabel>subLabel</template>  
    </ch-dropdown-selector>`,
});

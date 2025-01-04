<script setup lang="ts">
import { computed, useId, useTemplateRef } from "vue";
import ChAssistiveText from "./ChAssistiveText.vue";
import ChFieldLabel from "./ChFieldLabel.vue";
import ChIcon from "./ChIcon.vue";

const describeId = useId();
const labelId = useId();
const popoverId = useId();
const slots = defineSlots<{
  subLabel: any;
}>();
const popover = useTemplateRef("popover");

interface Item {
  value: string;
  disabled?: boolean;
}

const props = withDefaults(
  defineProps<{
    modelValue: string;
    label: string;
    disabled?: boolean;
    placeholder?: string;
    showLabel?: boolean;
    invalid?: boolean;
    assistiveText?: string;
    required?: boolean;
    requiredText?: string;
    name?: string;

    items: Item[];
  }>(),
  {
    showLabel: false,
  }
);

const emits = defineEmits<{
  "update:modelValue": [value: string];
}>();

const showAssistiveText =
  props.assistiveText != null && props.assistiveText.length !== 0;
const isPlaceholder = computed(() => !!props.placeholder);

const onUpdate = (item: Item) => {
  if (item.disabled) return;
  emits("update:modelValue", item.value);
  popover.value?.hidePopover();
};
</script>

<template>
  <div class="charcoal-dropdown-selector-root" :aria-disabled="disabled">
    <ChFieldLabel
      v-if="showLabel"
      :id="labelId"
      :label="label"
      :required="required"
      :requiredText="requiredText"
    >
      <template v-slot:subLabel>
        <slot name="subLabel" />
      </template>
    </ChFieldLabel>

    <div style="display: none" aria-hidden="true">
      <select :name="name" :value="modelValue" :tabIndex="-1">
        <option
          v-for="item in items"
          :key="item.value"
          :value="item.value"
          :disabled="item.disabled"
        >
          {{ item.value }}
        </option>
      </select>
    </div>

    <button
      className="charcoal-dropdown-selector-button"
      style="anchor-name: --charcoal-dropdown-anchor"
      :aria-labelledby="labelId"
      :aria-invalid="invalid"
      :aria-describedby="assistiveText || describeId"
      :disabled="disabled"
      type="button"
      :popovertarget="popoverId"
    >
      <span
        className="charcoal-ui-dropdown-selector-text"
        :data-placeholder="isPlaceholder"
      >
        {{ modelValue || placeholder }}
      </span>
      <ChIcon className="charcoal-ui-dropdown-selector-icon" name="16/Menu" />
    </button>

    <div className="charcoal-popover" ref="popover" :id="popoverId" popover>
      <ul className="charcoal-menu-list">
        <li
          class="charcoal-list-item"
          v-for="item in items"
          :key="item.value"
          :value="item.value"
          :disabled="item.disabled"
          :data-key="modelValue"
          tabIndex="-1"
          :aria-disabled="item.disabled"
          role="option"
          @click="onUpdate(item)"
        >
          {{ item.value }}
        </li>
      </ul>
    </div>

    <ChAssistiveText
      v-if="showAssistiveText"
      :data-invalid="invalid === true"
      :id="describeId"
    >
      {{ assistiveText }}
    </ChAssistiveText>
  </div>
</template>

<style>
@import "../../upstream/charcoal/packages/react/src/components/DropdownSelector/index.css";
@import "../../upstream/charcoal/packages/react/src/components/DropdownSelector/Popover/index.css";
@import "../../upstream/charcoal/packages/react/src/components/DropdownSelector/MenuList/index.css";
@import "../../upstream/charcoal/packages/react/src/components/DropdownSelector/ListItem/index.css";

.charcoal-dropdown-selector-root {
  container-type: inline-size;
}

.charcoal-popover[popover] {
  position-anchor: --charcoal-dropdown-anchor;
  width: 100cqw;
  box-sizing: border-box;
  inset-block-start: anchor(bottom);
  inset-inline-start: anchor(left);
}
</style>

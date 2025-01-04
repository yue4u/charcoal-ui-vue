<script setup lang="ts">
import { computed, type InputHTMLAttributes, useId, useSlots } from "vue";

const checkboxId = useId();
const slots = useSlots();
withDefaults(
  defineProps<
    {
      modelValue: boolean;
      invalid?: boolean;
      rounded?: boolean;
      disabled?: boolean;
    } & /** @vue-ignore */ InputHTMLAttributes
  >(),
  {
    disabled: false,
    invalid: false,
    rounded: false,
  }
);

defineEmits<{
  "update:modelValue": [value: boolean];
}>();
const noChildren = computed(() => !slots.default);
</script>

<template>
  <input
    v-if="noChildren"
    class="charcoal-checkbox-input"
    type="checkbox"
    :aria-invalid="invalid"
    :checked="checked"
    :data-rounded="rounded"
  />
  <label
    v-else
    class="charcoal-checkbox__label"
    :htmlFor="checkboxId"
    :aria-disabled="disabled"
  >
    <input
      class="charcoal-checkbox-input"
      type="checkbox"
      :id="checkboxId"
      :aria-invalid="invalid"
      :checked="modelValue"
      :data-rounded="rounded"
      @change="$emit('update:modelValue', !modelValue)"
    />
    <div className="charcoal-checkbox__label_div"><slot /></div>
  </label>
</template>

<style lang="css">
@import "../../upstream/charcoal/packages/react/src/components/Checkbox/index.css";
@import "../../upstream/charcoal/packages/react/src/components/Checkbox/CheckboxInput/index.css";
</style>

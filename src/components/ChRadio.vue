<script setup lang="ts">
import { computed, inject, InputHTMLAttributes, useSlots } from "vue";
import { ChRadioSymbol, RadioContext } from "./ChRadioContext";
const slots = useSlots();

const props = defineProps<
  {
    value: string;
    disabled?: boolean;
  } & /** @vue-ignore */ InputHTMLAttributes
>();

const {
  name,
  selected,
  disabled: isParentDisabled,
  readonly,
  invalid,
  onChange,
} = inject<RadioContext>(ChRadioSymbol, {
  name: "",
  selected: "",
  disabled: false,
  readonly: false,
  invalid: false,
  onChange() {},
});

const isSelected = computed(() => props.value === selected);
const isDisabled = computed(() => props.disabled || isParentDisabled);
const isReadonly = computed(() => readonly && !isSelected);
</script>

<template>
  <label
    class="charcoal-radio__label"
    :aria-disabled="isDisabled || isReadonly"
  >
    <input
      class="charcoal-radio-input"
      :value="value"
      type="radio"
      :name="name"
      :checked="isSelected"
      :aria-invalid="invalid"
      :disabled="isDisabled || isReadonly"
      @change="onChange(value)"
    />
    <div v-if="slots.default" class="charcoal-radio__label_div">
      <slot />
    </div>
  </label>
</template>

<style lang="css">
@import "../../upstream/charcoal/packages/react/src/components/Radio/index.css";
@import "../../upstream/charcoal/packages/react/src/components/Radio/RadioInput/index.css";
</style>

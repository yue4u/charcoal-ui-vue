<script setup lang="ts">
import { provide } from "vue";
import { ChRadioSymbol, RadioContext } from "./ChRadioContext";

const props = defineProps<
  RadioContext & {
    modelValue: string;
  }
>();

const emits = defineEmits<{ "update:modelValue": [v: string] }>();
provide<RadioContext>(ChRadioSymbol, {
  name: props.name,
  selected: props.modelValue,
  disabled: props.disabled,
  readonly: props.readonly,
  invalid: props.invalid,
  onChange(value) {
    emits("update:modelValue", value);
  },
});
</script>

<template>
  <div class="charcoal-radio-group" role="radiogroup">
    <slot />
  </div>
</template>

<style lang="css">
@import "../../upstream/charcoal/packages/react/src/components/Radio/RadioGroup/index.css";
</style>

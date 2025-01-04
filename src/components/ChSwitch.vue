<script setup lang="ts">
import { computed, type InputHTMLAttributes, useId, useSlots } from "vue";

const id = useId();
const slots = useSlots();
defineProps<
  {
    modelValue: boolean;
    disabled?: boolean;
  } & /** @vue-ignore */ InputHTMLAttributes
>();
defineEmits(["update:modelValue"]);
const noChildren = computed(() => !slots.default);
</script>

<template>
  <input v-if="noChildren" class="charcoal-switch-input" type="checkbox" />
  <label
    v-else
    class="charcoal-switch__label"
    :htmlFor="id"
    :aria-disabled="disabled"
  >
    <input
      class="charcoal-switch-input"
      type="checkbox"
      :id="id"
      :checked="modelValue"
      @change="$emit('update:modelValue', !modelValue)"
    />
    <div className="charcoal-switch__label_div"><slot /></div>
  </label>
</template>

<style lang="css">
@import "../../upstream/charcoal/packages/react/src/components/Switch/index.css";
@import "../../upstream/charcoal/packages/react/src/components/Switch/SwitchInput/index.css";
</style>

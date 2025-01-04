<script setup lang="ts">
import { computed, InputHTMLAttributes, useId, useSlots } from "vue";
import ChAssistiveText from "./ChAssistiveText.vue";
import ChFieldLabel from "./ChFieldLabel.vue";

const inputId = useId();
const describedbyId = useId();
const labelledbyId = useId();
const slots = defineSlots<{
  prefix: any;
  suffix: any;
  subLabel: any;
}>();

const props = withDefaults(
  defineProps<
    {
      modelValue: string;
      showCount?: boolean;
      showLabel?: boolean;
      assistiveText?: string;
      invalid?: boolean;

      label?: string;
      required?: boolean;
      requiredText?: string;
      disabled?: boolean;
      rdfaPrefix?: string;
      maxlength?: number;

      getCount?: (value: string) => number;
    } & /** @vue-ignore */ InputHTMLAttributes
  >(),
  {
    disabled: false,
    label: "",
    showCount: false,
    showLabel: false,
    suffix: null,
    type: "text",
    getCount: countCodePointsInString,
  }
);

const showAssistiveText =
  props.assistiveText != null && props.assistiveText.length !== 0;

const count = computed(() => props.getCount(props.modelValue));

defineEmits(["update:modelValue"]);
</script>

<script lang="ts">
function countCodePointsInString(string: string) {
  return Array.from(string).length;
}
</script>

<template>
  <div class="charcoal-text-field-root" :aria-disabled="disabled">
    <ChFieldLabel
      v-if="showLabel"
      :htmlFor="inputId"
      :id="labelledbyId"
      :label="label"
      :required="required"
      :requiredText="requiredText"
    >
      <template v-slot:subLabel>
        <slot name="subLabel" />
      </template>
    </ChFieldLabel>
    <div
      className="charcoal-text-field-container"
      :aria-disabled="disabled === true ? true : undefined"
      :data-invalid="invalid === true"
    >
      <div v-if="slots.prefix" className="charcoal-text-field-prefix">
        <slot name="prefix" />
      </div>
      <input
        className="charcoal-text-field-input"
        type="type"
        :maxlength="maxlength"
        :value="modelValue"
        :aria-describedby="showAssistiveText ? describedbyId : undefined"
        :aria-invalid="invalid"
        :aria-labelledby="labelledbyId"
        :id="inputId"
        :data-invalid="invalid === true"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
      />
      <div
        v-if="slots.suffix || showCount"
        className="charcoal-text-field-suffix"
      >
        <slot name="suffix" />
        <span v-if="showCount" className="charcoal-text-field-line-counter">
          {{ maxlength !== undefined ? `${count}/${maxlength}` : count }}
        </span>
      </div>
    </div>
    <ChAssistiveText
      v-if="showAssistiveText"
      :data-invalid="invalid === true"
      :id="describedbyId"
    >
      {{ assistiveText }}
    </ChAssistiveText>
  </div>
</template>

<style>
@import "../../upstream/charcoal/packages/react/src/components/TextField/index.css";
</style>

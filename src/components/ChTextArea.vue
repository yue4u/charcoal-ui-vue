<script setup lang="ts">
import { computed, TextareaHTMLAttributes, useId } from "vue";
import ChAssistiveText from "./ChAssistiveText.vue";
import ChFieldLabel from "./ChFieldLabel.vue";

const textAreaId = useId();
const describedbyId = useId();
const labelledbyId = useId();
const slots = defineSlots<{
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
      autoHeight?: boolean;
      rows?: number;
      maxlength: number;

      getCount?: (value: string) => number;
    } & /** @vue-ignore */ TextareaHTMLAttributes
  >(),
  {
    disabled: false,
    label: "",
    showCount: false,
    showLabel: false,
    suffix: null,
    type: "text",
    rows: 4,
    autoHeight: false,
    getCount: countCodePointsInString,
  }
);

defineEmits(["update:modelValue"]);

const showAssistiveText =
  props.assistiveText != null && props.assistiveText.length !== 0;

const count = computed(() => props.getCount(props.modelValue as string));

const rows = computed(() => {
  if (!props.autoHeight) return props.rows;
  const rowsNeeded = (`${props.modelValue}\n`.match(/\n/gu)?.length ?? 0) || 1;
  return Math.max(props.rows, rowsNeeded);
});
</script>

<script lang="ts">
function countCodePointsInString(string: string) {
  return Array.from(string).length;
}
</script>

<template>
  <div class="charcoal-text-area-root" :aria-disabled="disabled">
    <ChFieldLabel
      v-if="showLabel"
      :htmlFor="textAreaId"
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
      className="charcoal-text-area-container"
      :aria-disabled="disabled === true ? true : undefined"
      :aria-invalid="invalid === true"
      :style="{
        '--charcoal-text-area-rows': `${showCount ? rows + 1 : rows}`,
      }"
    >
      <textarea
        className="charcoal-text-area-textarea"
        v-bind="props"
        :aria-describedby="showAssistiveText ? describedbyId : undefined"
        :aria-invalid="invalid"
        :aria-labelledby="labelledbyId"
        :data-invalid="invalid === true"
        :maxLength="maxlength"
        :data-no-bottom-padding="showCount"
        :id="textAreaId"
        :value="modelValue"
        @input="
          $emit(
            'update:modelValue',
            ($event.target as HTMLTextAreaElement).value
          )
        "
      />
      <span v-if="showCount" className="charcoal-text-area-counter">
        {{ maxlength !== undefined ? `${count}/${maxlength}` : count }}
      </span>
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
@import "../../upstream/charcoal/packages/react/src/components/TextArea/index.css";
</style>

<script lang="ts" setup>
defineProps<{
  label: string;
  required?: Boolean | "true" | "false";
  requiredText?: string;
}>();
</script>

<template>
  <div class="charcoal-field-label-root">
    <label className="charcoal-field-label"> {{ label }} </label>
    <div v-if="required" className="charcoal-field-label-required-text">
      {{ requiredText }}
    </div>
    <div className="charcoal-field-label-sub-label">
      <span><slot name="subLabel" /></span>
    </div>
  </div>
</template>

<style lang="css">
@import "../../upstream/charcoal/packages/react/src/components/FieldLabel/index.css";
</style>

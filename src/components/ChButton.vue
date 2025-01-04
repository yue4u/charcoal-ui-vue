<script setup lang="ts">
export type Variant =
  | "Primary"
  | "Default"
  | "Overlay"
  | "Danger"
  | "Navigation";

export type Size = "S" | "M";

defineProps<{
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  isActive?: boolean;
}>();
</script>

<template>
  <button
    class="charcoal-button"
    :data-variant="variant"
    :data-size="size"
    :data-full-width="fullWidth"
    :data-active="isActive"
  >
    <slot />
  </button>
</template>

<style lang="css">
@import "../../upstream/charcoal/packages/react/src/components/Button/index.css";
</style>

<script setup lang="ts">
import { KnownIconType } from "./PixivIconFork";

type Variant = "Default" | "Overlay";
type Size = "XS" | "S" | "M";

withDefaults(
  defineProps<{
    variant?: Variant;
    size?: Size;
    icon: keyof KnownIconType;
    isActive?: boolean;
  }>(),
  {
    variant: "Default",
    size: "M",
    isActive: false,
  }
);
</script>

<template>
  <button
    class="charcoal-icon-button"
    :data-size="size"
    :data-active="isActive"
    :data-variant="variant"
  >
    <pixiv-icon :name="icon" />
  </button>
</template>

<style lang="css">
@import "../../upstream/charcoal/packages/react/src/components/IconButton/index.css";
</style>

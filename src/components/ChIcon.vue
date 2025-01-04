<script setup lang="ts">
import { KnownIconFile } from "./PixivIconFork";
import "./PixivIconFork";

defineProps<{
  name: KnownIconFile;
  scale?: 1 | 2 | 3 | "1" | "2" | "3";
  unsafeNonGuidelineScale?: boolean | null;
}>();
</script>

<template>
  <pixiv-icon
    :name="name"
    :scale="scale"
    :unsafe-non-guideline-scale="unsafeNonGuidelineScale || null"
  />
</template>

<style>
:root[data-theme="dark"],
:root.dark {
  color: var(--charcoal-text1);
}
</style>

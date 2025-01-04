<script setup lang="ts">
export type LoadingSpinnerProps = {
  size?: number;
  padding?: number;
  transparent?: boolean;
};

withDefaults(
  defineProps<
    LoadingSpinnerProps & {
      readonly once?: boolean;
    }
  >(),
  {
    size: 48,
    padding: 16,
    transparent: false,
  }
);
</script>

<template>
  <div
    class="charcoal-loading-spinner"
    role="progressbar"
    :style="{
      '--charcoal-loading-spinner-size': `${size}px`,
      '--charcoal-loading-spinner-padding': `${padding}px`,
    }"
    :data-transparent="transparent"
  >
    <div
      role="presentation"
      :data-once="once"
      className="charcoal-loading-spinner-icon"
    />
  </div>
</template>

<style lang="css">
@import "../../upstream/charcoal/packages/react/src/components/LoadingSpinner/index.css";
</style>

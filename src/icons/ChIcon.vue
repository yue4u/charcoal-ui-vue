<script lang="ts" setup>
import charcoalIconFiles from "@charcoal-ui/icon-files";
import { CSSProperties, ref, watch } from "vue";
export type KnownIconFile = keyof typeof charcoalIconFiles;

const props = defineProps<{
  class?: string;
  style?: CSSProperties;
  name: KnownIconFile;
  size?: string | number;
}>();
const size = props.size || "32px";

const getMaskImage = async () => {
  const svgContent = await charcoalIconFiles[props.name]();
  return `url(data:image/svg+xml,${encodeURIComponent(svgContent)}`;
};

const maskImage = ref(await getMaskImage());
watch(
  () => props.name,
  async () => {
    maskImage.value = await getMaskImage();
  }
);
</script>

<template>
  <div
    :class="['charcoal-icon', { class: props.class }]"
    :style="{
      ...props.style,
      width: size,
      height: size,
      maskImage,
    }"
  ></div>
</template>

<style lang="css" scoped>
.charcoal-icon {
  display: inline-flex;
  background: currentColor;
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center;
}
</style>

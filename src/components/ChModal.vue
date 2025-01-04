<script setup lang="ts">
import { computed, useTemplateRef } from "vue";
import ChIconButton from "./ChIconButton.vue";

export type BottomSheet = boolean | "full";
export type Size = "S" | "M" | "L";

const modalTemplateRef = useTemplateRef("modalRef");

const props = withDefaults(
  defineProps<{
    title: string;
    size?: Size;
    bottomSheet?: BottomSheet;
    isDismissable?: boolean;
  }>(),
  {
    bottomSheet: false,
    size: "M",
  }
);

defineEmits(["close"]);

const isKeyboardDismissDisabled = computed(
  () => props.isDismissable === undefined || props.isDismissable === false
);
</script>

<template>
  <div
    class="charcoal-modal-dialog"
    role="dialog"
    :data-bottom-sheet="bottomSheet"
    :data-size="size"
    ref="modalRef"
    :popover="isKeyboardDismissDisabled ? 'manual' : 'auto'"
  >
    <div
      className="charcoal-modal-header-root"
      :data-bottom-sheet="bottomSheet"
    >
      <div className="charcoal-modal-header-title">{{ title }}</div>
    </div>
    <div class="charcoal-modal-body">
      <div class="charcoal-modal-align">
        <slot />
      </div>
    </div>
    <ChIconButton
      class="charcoal-modal-close-button"
      size="S"
      icon="24/Close"
      type="button"
      :popovertarget="modalTemplateRef?.id"
    />
  </div>
</template>

<style lang="css">
@import "../../upstream/charcoal/packages/react/src/components/Modal/index.css";
@import "../../upstream/charcoal/packages/react/src/components/Modal/ModalPlumbing.css";
@import "../../upstream/charcoal/packages/react/src/components/Modal/Dialog/index.css";

.charcoal-modal-dialog {
  border: 0;
  &:popover-open::backdrop {
    background-color: var(--charcoal-surface4);
  }
}
</style>

import type { Meta, StoryFn } from "@storybook/vue3";
import ChButton from "./ChButton.vue";
import ChIconButton from "./ChIconButton.vue";
import ChModal from "./ChModal.vue";

export default {
  title: "components/ChModal",
  component: ChModal,
  argTypes: {},
  render(args) {
    return {
      components: { ChModal, ChIconButton, ChButton },
      setup() {
        return {
          args,
        };
      },
      template: `
      <ch-button popovertarget="ch-modal">Open Modal</ch-button>
      <ch-modal id="ch-modal" title="Modal">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div class="charcoal-modal-buttons">
          <ch-button fullWidth variant="Primary" popovertarget="ch-modal-nested">More</ch-button>
        </div>
      </ch-modal>
      <ch-modal 
        id="ch-modal-nested" 
        title="Modal 
        Nested" 
        size="S" 
        isDismissable
      >
        <p>Nested and dismissable!</p>
        <div class="charcoal-modal-buttons">
          <ch-button fullWidth popovertarget="ch-modal-nested">Close</ch-button>
        </div>
      </ch-modal>`,
    };
  },
} satisfies Meta<typeof ChModal>;

// @ts-expect-error
export const Default: StoryFn<typeof ChButton> = {};

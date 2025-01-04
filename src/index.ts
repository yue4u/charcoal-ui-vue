import type { Plugin } from "vue";
import "./tokens.css";
import ChAssistiveText from "./components/ChAssistiveText.vue";
import ChButton from "./components/ChButton.vue";
import ChCheckbox from "./components/ChCheckbox.vue";
import ChDropdownSelector from "./components/ChDropdownSelector.vue";
import ChFieldLabel from "./components/ChFieldLabel.vue";
import ChIcon from "./components/ChIcon.vue";
import ChIconButton from "./components/ChIconButton.vue";
import ChLoadingSpinner from "./components/ChLoadingSpinner.vue";
import ChModal from "./components/ChModal.vue";
import ChRadio from "./components/ChRadio.vue";
import ChRadioGroup from "./components/ChRadioGroup.vue";
import ChSwitch from "./components/ChSwitch.vue";
import ChTextArea from "./components/ChTextArea.vue";
import ChTextField from "./components/ChTextField.vue";

const components = {
  ChAssistiveText,
  ChButton,
  ChCheckbox,
  ChDropdownSelector,
  ChFieldLabel,
  ChIcon,
  ChIconButton,
  ChLoadingSpinner,
  ChModal,
  ChRadio,
  ChRadioGroup,
  ChSwitch,
  ChTextArea,
  ChTextField,
};

export {
  ChAssistiveText,
  ChButton,
  ChCheckbox,
  ChDropdownSelector,
  ChFieldLabel,
  ChIcon,
  ChIconButton,
  ChLoadingSpinner,
  ChModal,
  ChRadio,
  ChRadioGroup,
  ChSwitch,
  ChTextArea,
  ChTextField,
};

const plugin: Plugin = {
  install(app) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  },
};

export default plugin;

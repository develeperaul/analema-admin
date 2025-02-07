import AppSelect from "src/components/core/AppSelect.vue";
import AppInput from "src/components/core/AppInput.vue";
import AppDateInput from "src/components/core/AppDateInput.vue";
import AppPhoneInput from "src/components/core/AppPhoneInput.vue";
import AppButton from "src/components/core/AppButton.vue";
import FloatingInput from "src/components/core/FloatingLabel/input.vue";
import FloatingSelect from "src/components/core/FloatingLabel/select.vue";
import AppCheck from "src/components/core/AppCheck.vue";
import AppTextarea from "src/components/core/AppTextarea.vue";
import AppPopup from "src/components/core/AppPopup.vue";
import Modal from "src/core/AppModal.vue";
import BaseButton from "src/core/BaseButton.vue";
import { Form } from "vee-validate";

export default ({ app }) => {
  app.component("app-input", AppInput);
  app.component("app-date", AppDateInput);
  app.component("app-phone", AppPhoneInput);
  app.component("app-select", AppSelect);
  app.component("app-button", AppButton);
  app.component("FloatingSelect", FloatingSelect);
  app.component("FloatingInput", FloatingInput);
  app.component("VForm", Form);
  app.component("app-checkbox", AppCheck);
  app.component("app-textarea", AppTextarea);
  app.component("Modal", Modal);
  app.component("BaseButton", BaseButton);
  app.component("popup", AppPopup);
};

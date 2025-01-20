<template>
  <q-page class="tw-pt-8">
    <div class="tw-grid tw-justify-center tw-justify-items-center">
      <h2 class="tw-mb-16">Войти</h2>
      <div class="tw-w-[250px]">
        <form @submit.prevent="login" class="tw-grid tw-gap-4 tw-w-full">
          <app-input
            v-model="store.login.email"
            label="Email"
            name="email"
            rules="required|email"
            @valid="(e:boolean)=>store.login.emailValid = e"
          />
          <app-input
            v-model="store.login.password"
            label="Пароль"
            name="pass"
            rules="required|min:6"
            @valid="(e:boolean)=>store.login.passwordValid = e"
          />

          <app-button type="submit" text="Вход" :disabled="disableButton" />
          <p v-if="message" class="tw-text-negative tw-text-center">
            {{ message }}
          </p>
        </form>
        <div class="tw-flex tw-justify-center tw-mt-8">
          <button
            class="tw-text-blue tw-text-center tw-text-sm"
            @click="$router.push({ name: 'restore' })"
          >
            ЗАБЫЛИ ПАРОЛЬ?
          </button>
        </div>
        <div class="tw-text-center tw-text-sm tw-mt-10">
          При входе или регистрации вы соглащаетесь с
          <a href="#" class="tw-text-blue">
            <span> Условиями публичной офферты </span>

            <svg
              id="baseline-launch-24px"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              class="tw-inline"
            >
              <path
                id="Контур_332"
                data-name="Контур 332"
                d="M0,0H16V16H0Z"
                fill="none"
              />
              <path
                id="Контур_333"
                data-name="Контур 333"
                d="M13.667,13.667H4.333V4.333H9V3H4.333A1.333,1.333,0,0,0,3,4.333v9.333A1.333,1.333,0,0,0,4.333,15h9.333A1.337,1.337,0,0,0,15,13.667V9H13.667ZM10.333,3V4.333h2.393L6.173,10.887l.94.94,6.553-6.553V7.667H15V3Z"
                transform="translate(-1 -1)"
                fill="#3568f9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useAuthStore } from "src/stores/auth-store";
import { useForm } from "vee-validate";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const store = useAuthStore();
    const router = useRouter();
    const isSubmitting = ref(false);
    const { handleSubmit } = useForm();
    const message = ref("");
    const login = handleSubmit(async (values) => {
      const { email, pass } = values;
      console.log(values);

      isSubmitting.value = true;
      localStorage.setItem("token", "token");
      try {
        const { groups } = await store.authUser(email, pass);
        message.value = "";

        window.localStorage.setItem("groups", groups);

        if (groups.indexOf("6") !== -1) {

          (isSubmitting.value = false), (window.location.href = "/diler/");
        }
        if (groups.indexOf("1") !== -1) {

          (isSubmitting.value = false), (window.location.href = "/personal/");
        }

        // window.localStorage.setItem("email", email);
      } catch (e) {
        if (!e.response) throw e;
        if (e.response.status === 404) {
          message.value = "Пользователь с таким логином и паролем не найден";
        } else throw e;
      } finally {
        isSubmitting.value = false;
      }
    });
    const disableButton = computed(() => {
      if (isSubmitting.value) {
        return true;
      } else {
        if (store.login.emailValid && store.login.passwordValid) return false;
        return true;
      }
    });
    return { store, login, disableButton, isSubmitting, message };
  },
});
</script>
<style lang="scss" scoped></style>

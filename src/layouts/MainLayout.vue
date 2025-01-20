<template>
  <q-layout
    style="min-height: 100vh"
    view="hhh lPr fff"
    class="app-page-bg--dark"
  >
    <q-drawer class="sidebar" show-if-above v-model="sidebar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="20"
        viewBox="0 0 247 28"
        fill="none"
      >
        <g clip-path="url(#clip0_226_1907)">
          <path
            d="M133.054 2.36357C133.054 1.40736 132.267 0.625 131.304 0.625H118.531C117.569 0.625 116.781 1.40736 116.781 2.36357V25.869C116.781 26.8253 117.569 27.6076 118.531 27.6076H131.304C132.267 27.6076 133.054 26.8253 133.054 25.869C133.054 24.9128 132.267 24.1305 131.304 24.1305H120.298V4.11953H131.304C132.267 4.11953 133.054 3.33717 133.054 2.38096V2.36357Z"
            fill="#181818"
          />
          <path
            d="M70.691 1.61455C70.0961 0.41494 68.1188 0.41494 67.5414 1.61455L56.0628 25.12C55.6428 25.9893 56.0103 27.0325 56.8677 27.4497C57.1126 27.5714 57.3751 27.6236 57.6376 27.6236C58.285 27.6236 58.9149 27.2585 59.2124 26.6326L69.0987 6.36085L76.3428 21.2082L70.0261 17.3138C69.2037 16.8097 68.1188 17.0531 67.6114 17.8702C67.1039 18.6873 67.3489 19.7652 68.1713 20.2694L79.6324 27.3454C80.2973 27.7453 81.1547 27.6757 81.7321 27.1542C82.3096 26.6326 82.4846 25.7981 82.1346 25.1026L70.691 1.61455Z"
            fill="#181818"
          />
          <path
            d="M102.099 1.61455C101.504 0.41494 99.5271 0.41494 98.9497 1.61455L87.4885 25.12C87.0686 25.9893 87.4361 27.0325 88.2934 27.4497C88.5384 27.5714 88.8009 27.6236 89.0634 27.6236C89.7108 27.6236 90.3407 27.2585 90.6382 26.6326L100.524 6.36085L110.411 26.6326C110.831 27.5019 111.881 27.867 112.755 27.4323C113.63 27.0151 113.998 25.9719 113.56 25.1026L102.099 1.61455Z"
            fill="#181818"
          />
          <path
            d="M43.6213 12.3777H36.2897C36.0623 12.3777 35.8698 12.4299 35.6773 12.4994V2.36357C35.6773 1.40736 34.8899 0.625 33.9275 0.625C32.9651 0.625 32.1777 1.40736 32.1777 2.36357V25.869C32.1777 26.8253 32.9651 27.6076 33.9275 27.6076C34.8899 27.6076 35.6773 26.8253 35.6773 25.869V15.7332C35.8698 15.8027 36.0798 15.8549 36.2897 15.8549H43.6213C44.5837 15.8549 45.3711 15.0725 45.3711 14.1163C45.3711 13.1601 44.5837 12.3777 43.6213 12.3777Z"
            fill="#181818"
          />
          <path
            d="M49.5193 0.625C48.5569 0.625 47.7695 1.40736 47.7695 2.36357V25.869C47.7695 26.8253 48.5569 27.6076 49.5193 27.6076C50.4817 27.6076 51.2691 26.8253 51.2691 25.869V2.36357C51.2691 1.40736 50.4817 0.625 49.5193 0.625Z"
            fill="#181818"
          />
          <path
            d="M14.8023 1.61455C14.2074 0.41494 12.2301 0.41494 11.6527 1.61455L0.174095 25.12C-0.245854 25.9893 0.121602 27.0325 0.978998 27.4497C1.22397 27.5714 1.48644 27.6236 1.7489 27.6236C2.39633 27.6236 3.02625 27.2585 3.32371 26.6326L13.2275 6.36085L20.4716 21.2082L14.1549 17.3138C13.3325 16.8097 12.2476 17.0531 11.7402 17.8702C11.2328 18.6873 11.4777 19.7652 12.3001 20.2694L23.7787 27.3454C24.4436 27.7453 25.301 27.6757 25.8785 27.1542C26.4559 26.6326 26.6309 25.7981 26.2809 25.1026L14.8023 1.61455Z"
            fill="#181818"
          />
          <path
            d="M204.586 1.61455C203.991 0.41494 202.013 0.41494 201.436 1.61455L198.934 6.72595C198.514 7.59524 198.881 8.63838 199.739 9.05564C200.614 9.47289 201.664 9.10779 202.083 8.25589L202.993 6.37824L212.88 26.65C213.177 27.2759 213.807 27.641 214.454 27.641C214.717 27.641 214.979 27.5888 215.224 27.4671C216.099 27.0498 216.467 26.0067 216.029 25.1374L204.551 1.63194L204.586 1.61455Z"
            fill="#181818"
          />
          <path
            d="M124.707 12.3789C123.744 12.3789 122.957 13.1613 122.957 14.1175C122.957 15.0737 123.744 15.856 124.707 15.856H127.524C128.486 15.856 129.274 15.0737 129.274 14.1175C129.274 13.1613 128.486 12.3789 127.524 12.3789H124.707Z"
            fill="#181818"
          />
          <path
            d="M246.826 25.12L235.365 1.61455C234.77 0.41494 232.793 0.41494 232.215 1.61455L220.737 25.12C220.317 25.9893 220.684 27.0325 221.541 27.4497C221.786 27.5714 222.049 27.6236 222.311 27.6236C222.959 27.6236 223.589 27.2585 223.886 26.6326L233.773 6.36085L241.017 21.2082L234.7 17.3138C233.878 16.8097 232.793 17.0531 232.285 17.8702C231.778 18.6873 232.023 19.7652 232.845 20.2694L244.306 27.3454C244.971 27.7453 245.829 27.6757 246.406 27.1542C246.983 26.6326 247.158 25.7981 246.808 25.1026L246.826 25.12Z"
            fill="#181818"
          />
          <path
            d="M193.107 1.61455C192.512 0.41494 190.535 0.41494 189.957 1.61455L178.479 25.12C178.059 25.9893 178.426 27.0325 179.284 27.4497C180.159 27.867 181.208 27.5019 181.628 26.65L191.515 6.37824L201.401 26.65C201.698 27.2759 202.328 27.641 202.976 27.641C203.238 27.641 203.501 27.5888 203.746 27.4671C204.621 27.0498 204.988 26.0067 204.551 25.1374L193.09 1.63194L193.107 1.61455Z"
            fill="#181818"
          />
          <path
            d="M150.884 1.61455C150.289 0.41494 148.312 0.41494 147.735 1.61455L136.256 25.12C135.836 25.9893 136.204 27.0325 137.061 27.4497C137.936 27.867 138.986 27.5019 139.406 26.65L149.292 6.37824L159.178 26.65C159.476 27.2759 160.106 27.641 160.753 27.641C161.016 27.641 161.278 27.5888 161.523 27.4671C162.398 27.0498 162.765 26.0067 162.328 25.1374L150.867 1.63194L150.884 1.61455Z"
            fill="#181818"
          />
          <path
            d="M162.346 1.61455C161.751 0.41494 159.774 0.41494 159.196 1.61455L156.362 7.43877C155.942 8.30805 156.309 9.35119 157.166 9.76845C158.041 10.1857 159.091 9.82061 159.511 8.96871L160.771 6.39562L170.657 26.6674C170.955 27.2932 171.585 27.6583 172.232 27.6583C172.495 27.6583 172.757 27.6062 173.002 27.4845C173.877 27.0672 174.244 26.0241 173.807 25.1548L162.328 1.64933L162.346 1.61455Z"
            fill="#181818"
          />
        </g>
        <defs>
          <clipPath id="clip0_226_1907">
            <rect
              width="247"
              height="27"
              fill="white"
              transform="translate(0 0.625)"
            />
          </clipPath>
        </defs>
      </svg>

      <ul class="list">
        <li class="item" :class="{ active: active === 'online-scene' }">
          <span
            @click="() => (active = 'online-scene')"
            class="tw-flex tw-items-center tw-gap-4"
            ><svg
              id="baseline-input-24px"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M21,3.01H3a2.006,2.006,0,0,0-2,2V9H3V4.99H21V19.02H3V15H1v4.01a1.989,1.989,0,0,0,2,1.98H21a1.989,1.989,0,0,0,2-1.98v-14a2,2,0,0,0-2-2ZM11,16l4-4L11,8v3H1v2H11Z"
                fill="currentColor"
              />
            </svg>

            Онлайн оценки
          </span>

          <ul class="list">
            <router-link
              :to="{ name: 'online-scene' }"
              v-slot="{ href, isExactActive }"
            >
              <li
                class="item link"
                :class="{
                  active:
                    isExactActive || $route.meta?.parent === 'online-scene',
                }"
              >
                <a :href="href">
                  <span>Заявки на оценку</span>
                </a>
              </li>
            </router-link>
            <router-link
              :to="{ name: 'online-scene-history' }"
              v-slot="{ href, isExactActive }"
            >
              <li
                class="item link"
                :class="{
                  active:
                    isExactActive || $route.meta?.parent === 'online-scene',
                }"
              >
                <a :href="href">
                  <span>История заявок на оценку</span>
                </a>
              </li>
            </router-link>
          </ul>
        </li>
        <li class="item" :class="{ active: active === 'os' }">
          <span
            @click="() => (active = 'os')"
            class="tw-flex tw-items-center tw-gap-4"
            ><svg
              id="baseline-input-24px"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M21,3.01H3a2.006,2.006,0,0,0-2,2V9H3V4.99H21V19.02H3V15H1v4.01a1.989,1.989,0,0,0,2,1.98H21a1.989,1.989,0,0,0,2-1.98v-14a2,2,0,0,0-2-2ZM11,16l4-4L11,8v3H1v2H11Z"
                fill="currentColor"
              />
            </svg>

            ОС
          </span>

          <ul class="list">
            <router-link
              :to="{ name: 'os-list' }"
              v-slot="{ href, isExactActive }"
            >
              <li
                class="item link"
                :class="{
                  active: isExactActive || $route.meta?.parent === 'os',
                }"
              >
                <a :href="href">
                  <span>Заявки</span>
                </a>
              </li>
            </router-link>
            <router-link
              :to="{ name: 'os-list-history' }"
              v-slot="{ href, isExactActive }"
            >
              <li
                class="item link"
                :class="{
                  active: isExactActive || $route.meta?.parent === 'os',
                }"
              >
                <a :href="href">
                  <span>История</span>
                </a>
              </li>
            </router-link>
          </ul>
        </li>
        <li>sdsd</li>
        <!-- <li class="item" :class="{ active: active === 'orders' }">
          <span
            @click="() => (active = 'orders')"
            class="tw-flex tw-items-center tw-gap-4"
            ><svg
              id="baseline-input-24px"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M21,3.01H3a2.006,2.006,0,0,0-2,2V9H3V4.99H21V19.02H3V15H1v4.01a1.989,1.989,0,0,0,2,1.98H21a1.989,1.989,0,0,0,2-1.98v-14a2,2,0,0,0-2-2ZM11,16l4-4L11,8v3H1v2H11Z"
                fill="currentColor"
              />
            </svg>

            CRM
          </span>

          <ul class="list">
            <router-link
              :to="{ name: 'orders-list' }"
              v-slot="{ href, isExactActive }"
            >
              <li
                class="item link"
                :class="{
                  active: isExactActive || $route.meta?.parent === 'order-list',
                }"
              >
                <a :href="href">
                  <span>Заказы</span>
                </a>
              </li>
            </router-link>
            <router-link
              :to="{ name: 'orders-history' }"
              v-slot="{ href, isExactActive }"
            >
              <li
                class="item link"
                :class="{
                  active:
                    isExactActive || $route.meta?.parent === 'order-history',
                }"
              >
                <a :href="href">
                  <span>История</span>
                </a>
              </li>
            </router-link>
          </ul>
        </li> -->
      </ul>
    </q-drawer>
    <q-page-container>
      <div class="tw-relative">
        <button class="logout" v-ripple @click="logOut">
          <svg
            id="baseline-exit_to_app-24px"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              id="Контур_252"
              data-name="Контур 252"
              d="M0,0H24V24H0Z"
              fill="none"
            />
            <path
              id="Контур_253"
              data-name="Контур 253"
              d="M10.09,15.59,11.5,17l5-5-5-5L10.09,8.41,12.67,11H3v2h9.67ZM19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,19,3Z"
              fill="#3f4557"
            />
          </svg>
        </button>
      </div>
      <router-view class="tw-flex-grow tw-p-7.5" />
    </q-page-container>

    <q-footer class="footer tw-flex tw-justify-between">
      <!-- <div>© 2017-2019 Окна Сканер</div>
      <div>8 (800) 555-43-43</div> -->
    </q-footer>
  </q-layout>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
const router = useRouter();
const sidebar = ref(true);
const route = useRoute();
const active = ref("");
const logOut = () => {
  localStorage.removeItem("token");
};
onMounted(() => {
  if (route.meta?.link) {
    active.value = route.meta.link as string;
  }
});
</script>
<style lang="scss">
.sidebar {
  $pl: 38px;
  @apply tw-bg-gray-second tw-py-4 tw-w-[258px] tw-grid  tw-gap-[46px] tw-font-medium   tw-shrink-0;
  align-content: start;
  .logo {
    margin-left: $pl;
  }
  .list {
    @apply tw-gap-1;
    .item {
      @apply tw-py-1.5 tw-mr-2 tw-relative tw-cursor-pointer;
      &.link {
        &:before {
          @apply tw-bg-blue tw-rounded-md;
          position: absolute;
          content: "";
          left: 0;
          top: 0;
          width: 2px;
          height: 100%;
          opacity: 0;
        }
        &:after {
          content: "";
          @apply tw-absolute;
          background-image: url(assets/icons/forward-right.svg);
          background-repeat: no-repeat;
          background-size: 24px;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          width: 24px;
          height: 24px;
          opacity: 0;
        }
      }
      padding-left: $pl;
      &.active > span {
        @apply tw-text-blue;
      }
      &.active.link,
      & .link.active {
        @apply tw-bg-white tw-text-blue tw-rounded-r-3xl;
        &:before,
        &:after {
          opacity: 1;
        }
      }
      & .list {
        height: 0;
        overflow: hidden;
        margin-left: -$pl;
        width: calc(100% + 38px);
        &:first-child {
          @apply tw-mt-1;
        }
        & .item {
          padding-left: 78px;
        }
      }
      &.active .list {
        height: 100%;
      }
    }
  }
}
.logout {
  @apply tw-bg-gray-second tw-w-[32px] tw-h-[32px] tw-rounded-full;
  @apply tw-flex tw-items-center tw-justify-center;
  @apply tw-absolute tw-right-7.5;
  top: 18px;
}
.footer {
  padding: 16px 38px;
  background: #172a3f;
  color: #ffffff;
  min-height: 78px;
}
</style>

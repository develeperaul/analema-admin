<template>
  <div class="tw-px-6 tw-py-4 tw-bg-white">
    <div
      class="tw-border-b tw-border-gray tw-flex tw-justify-between tw-items-center"
    >
      <h3 class="">Детализация</h3>
      <div class="tw-shrink-0">
        <q-btn
          v-if="!open"
          size="10px"
          round
          icon="add"
          @click="open = true"
        ></q-btn>
        <q-btn
          v-else
          size="10px"
          round
          icon="remove"
          @click="open = false"
        ></q-btn>
      </div>
    </div>
    <div
      class="card-list"
      :style="{ height: open ? wrapperHeight + 'px' : 0 + 'px' }"
    >
      <div class="card-list__wrapper tw-pt-5" ref="cardWrapper">
        <div v-if="fast">
          <q-carousel
            swipeable
            animated
            v-model="slide"
            v-model:fullscreen="fullscreen"
            thumbnails
            infinite
          >
            <q-carousel-slide
              v-for="(url, index) in fast.files"
              :key="index"
              :name="index"
              :img-src="url"
            >
            </q-carousel-slide>
            <template v-slot:control>
              <q-carousel-control position="bottom-right" :offset="[18, 18]">
                <q-btn
                  push
                  round
                  dense
                  color="white"
                  text-color="primary"
                  :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                  @click="fullscreen = !fullscreen"
                />
              </q-carousel-control>
            </template>
          </q-carousel>
        </div>

        <div
          class="tw-grid tw-gap-3"
          v-if="conf"
          v-for="(config, index) in JSON.parse(conf).configure"
          :key="index"
        >
          <div class="tw-flex tw-items-center tw-justify-between">
            <div>
              <div>Окно № {{ index + 1 }}</div>
            </div>

            <div
              class="tw-h-[50px] tw-w-[70px]"
              v-html="
                windType.find(
                  (item) => item.id === config.configuration.windows.type
                ).value
              "
            ></div>
          </div>

          <CardField
            title="Длина "
            :text="config.configuration.windows.length"
          />
          <CardField
            title="Ширина"
            :text="config.configuration.windows.width"
          />
          <CardField
            v-for="(sash, indexSash) in config.configuration.windows.sash"
            :key="'sash_' + indexSash"
            :title="'Cтворка №' + (indexSash + 1)"
            :text="sash.label"
          />
          <div class="tw-grid tw-gap-3">
            <div>Параметры окна</div>
            <CardField
              title="Профильния система"
              :text="config.configuration.parametrs.profile_system.label"
            />
            <CardField
              title="Фурнитура"
              :text="config.configuration.parametrs.furniture.label"
            />

            <CardField
              v-for="addition in config.configuration.parametrs.additions"
              :key="addition.id"
              :title="addition.label"
              text="Да"
            />

            <CardField title="Подоконник Длина" text="100" />
            <CardField title="Подоконник Ширина" text="100" />
            <CardField
              v-if="config.configuration.parametrs.slopes"
              title="Откосы"
              text="Да"
            />
            <CardField
              title="Стеклопакет"
              :text="config.configuration.parametrs.double_glazing.label"
            />
          </div>
          <div class="tw-flex tw-gap-4">
            <div>
              <span class="tw-mb-4 tw-inline-block"> Внешний цвет </span>
              <div
                class="tw-w-[60px] tw-h-[60px] tw-rounded-full tw-overflow-hidden tw-border-2 tw-border-black tw-mx-auto"
              >
                <img
                  :src="
                    '/colors/' +
                    config.configuration.parametrs.colors.external.value
                  "
                  alt=""
                />
              </div>
            </div>
            <div>
              <span class="tw-mb-4 tw-inline-block"> Внутренний цвет </span>
              <div
                class="tw-w-[60px] tw-h-[60px] tw-rounded-full tw-overflow-hidden tw-border-2 tw-border-black tw-mx-auto"
              >
                <img
                  :src="
                    '/colors/' +
                    config.configuration.parametrs.colors.internal.value
                  "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "contact",
});
</script>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import windType from "/public/data/window-types";
import sliderItems from "/public/data/colors.json";
import { useConfiguratorStore } from "src/stores/configurator-store";
import CardField from "src/components/CardField.vue";
const propsConf = defineProps<{
  fast?: null | {
    files: string[];
    text: string;
  };
  conf?: null | string;
}>();
const storeConf = useConfiguratorStore();
const slide = ref(0);
const fullscreen = ref(false);
const cardWrapper = ref<HTMLElement>();
const wrapperHeight = ref(0);
const open = ref(true);

onMounted(() => {
  if (cardWrapper.value) {
    wrapperHeight.value = cardWrapper.value.getBoundingClientRect().height;
  }
});
</script>
<style lang="scss" scoped>
.card-list {
  @apply tw-overflow-hidden tw-h-0;
  transition: height 0.2s ease;
}
</style>

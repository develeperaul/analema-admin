<template>
  <div v-if="reqList.length > 0" class="tw-p-4">
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
    >
      <div key="list" v-if="leave === null" class="req-list tw-grid tw-gap-3">
        <div
          v-for="req in reqList"
          :key="req.id"
          @click="leave = req.id"
          class="tw-border-gray-300 tw-border tw-border-solid tw-p-4 tw-rounded-md hover:tw-bg-slate-100 hover:tw-border-gray tw-cursor-pointer tw-flex tw-justify-between"
        >
          <div class="tw-flex tw-gap-3">
            <div class="tw-shrink-0">
              <div>
                <span class="tw-text-xl">Заказ</span>
                <span class="tw-text-[#529bef] tw-font-bold tw-text-xl">
                  № {{ req.id }}
                </span>
              </div>
              <div>
                {{ req.date }}
              </div>
            </div>
            <div>
              <div>
                <div class="tw-flex tw-gap-2 tw-flex-wrap">
                  <div
                    v-for="(conf, index) in JSON.parse(req.data).configure"
                    :key="index"
                    class="tw-flex"
                  >
                    <div
                      class="tw-h-[50px] tw-w-[70px]"
                      v-if="conf.configuration.windows.type"
                      v-html="
                        windType.find(
                          (item) => item.id === conf.configuration.windows.type
                        ).value
                      "
                    ></div>
                    <div>
                      <div>
                        <span> Ширина: </span>
                        <span>
                          {{ conf.configuration.windows.width }}
                        </span>
                      </div>
                      <div>
                        <span> Высота: </span>
                        <span>
                          {{ conf.configuration.windows.length }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tw-self-center">
            {{ req.status }}
          </div>
        </div>
      </div>
      <div key="item" v-else class="tw-grid tw-gap-4">
        <div class="tw-flex tw-gap-4">
          <button class="btn-back" @click="leave = null">назад</button>
          <button
            class="btn-back"
            @click="
              () => {
                modal = true;
              }
            "
            v-if="item.status_id !== 5"
          >
            изменить статус заказа
          </button>
          <button
            class="btn-back"
            @click="
              () => {
                modalUpdateSumm = true;
              }
            "
            v-if="item.status_id == 2"
          >
            изменить сумму заказа
          </button>
        </div>
        <div>
          <span class="tw-text-2xl tw-font-bold">Заказ </span>
          <span class="tw-text-2xl tw-font-semibold">№ {{ item.id }}</span>
        </div>

        <div class="tw-bg-slate-100 tw-py-5 tw-px-3 tw-shadow-xl">
          <div>
            <span class="tw-font-bold tw-text-xl"> Дата оформления </span>
            <span class="tw-font-semibold tw-text-lg">
              {{ item.date }}
            </span>
          </div>

          <div>
            <span class="tw-font-semibold"> Статус заказа </span>
            <span>
              {{ item.status }}
            </span>
          </div>
          <div v-if="JSON.parse(item.data).wishes?.text">
            <span class="tw-font-semibold">Примечание к заказу: </span>
            <span>
              {{ JSON.parse(item.data).wishes.text }}
            </span>
          </div>
          <div v-if="JSON.parse(item.data).wishes?.type">
            <span class="tw-font-semibold"> Тип дома: </span>
            <span>
              {{ JSON.parse(item.data).wishes.type.label }}
            </span>
          </div>
          <div v-if="JSON.parse(item.data).wishes.hasOwnProperty('mounting')">
            <span class="tw-font-semibold"> Монтаж: </span>
            <span>
              {{ JSON.parse(item.data).wishes.mounting ? "Да" : "Нет" }}
            </span>
          </div>

          <div>
            <div
              v-if="!/@oknascaner.ru/.test(JSON.parse(item.data).wishes.email)"
            >
              <span class="tw-font-semibold"> Email: </span>
              <a
                :href="`mailto:${JSON.parse(item.data).wishes.email}`"
                class="tw-text-[#2e3033]"
              >
                {{ JSON.parse(item.data).wishes.email }}
              </a>
            </div>
            <div>
              <span class="tw-font-semibold"> Телефон: </span>
              <a
                :href="`tel:${item.user_phone.replace(
                  /^[+][7-8]|[7-8]/,
                  '+7'
                )}`"
                class="tw-text-[#2e3033]"
              >
                {{ item.user_phone.replace(/^[+][7-8]|[7-8]/, "+7") }}
              </a>
            </div>
            <div>
              <span class="tw-font-semibold">Имя: </span>
              <span>
                {{ JSON.parse(item.data).data.name }}
              </span>
            </div>
            <div>
              <span class="tw-font-semibold">Фамилия: </span>
              <span>
                {{ JSON.parse(item.data).data.surname }}
              </span>
            </div>
            <div>
              <span class="tw-font-semibold"> Регион: </span>
              <span>
                {{ JSON.parse(item.data).data.region.label }}
              </span>
            </div>
            <div>
              <span class="tw-font-semibold">Город: </span>
              <span>
                <span>
                  {{ JSON.parse(item.data).data.city }}
                </span>
              </span>
            </div>
            <div>
              <span class="tw-font-semibold">Адрес: </span>
              <span> &nbsp;{{ JSON.parse(item.data).data.street }} </span>
            </div>
            <div>
              <span class="tw-font-semibold">Дом: </span>
              <span> &nbsp;{{ JSON.parse(item.data).data.home }} </span>
            </div>
            <div
              v-if="
                JSON.parse(item.data).data?.kv &&
                JSON.parse(item.data).data.kv !== ''
              "
            >
              <span class="tw-font-semibold">Квартира: </span>
              <span> &nbsp;{{ JSON.parse(item.data).data.kv }} </span>
            </div>
            <div
              v-if="
                JSON.parse(item.data).data?.etag &&
                JSON.parse(item.data).data.etag !== ''
              "
            >
              <span class="tw-font-semibold">Этаж: </span>
              <span> &nbsp;{{ JSON.parse(item.data).data.etag }} </span>
            </div>
          </div>
          <div class="tw-flex tw-flex-col tw-gap-3">
            <div class="tw-font-semibold tw-text-lg">
              Коммерческое предложение
            </div>
            <div class="tw-flex tw-flex-col">
              <span> Наименование : </span>
              <span>
                {{ item["kp_text"] }}
              </span>
            </div>
            <div class="tw-flex tw-flex-col">
              <span> Комментарий: </span>
              <span>
                {{ item["kp_comment"] }}
              </span>
            </div>
            <div class="tw-flex tw-flex-col">
              Цена:
              {{ item["kp_price"] }}
            </div>
            <div>
              Файл:

              <a
                :href="`http://form.oknascaner.ru/${item['kp_file']}`"
                class="tw-text-gray tw-no-underline"
                target="_blank"
              >
                <q-icon name="attach_file" size="25px"> </q-icon>
              </a>
            </div>
          </div>
          <div>
            <div class="tw-font-semibold tw-text-lg">Детали заказа</div>
            <div
              v-for="(conf, index) in JSON.parse(item.data).configure"
              :key="index"
            >
              <div class="tw-grid tw-grid-cols-2">
                <div>
                  <div
                    class="tw-h-[50px] tw-w-[70px]"
                    v-if="conf.configuration.windows.type"
                    v-html="
                      windType.find(
                        (w) => w.id === conf.configuration.windows.type
                      ).value
                    "
                  ></div>
                  <div class="gr-col">
                    <span class="tw-font-semibold"> Ширина: </span>
                    <span @click="$copyMethod" class="copy">
                      {{ conf.configuration.windows.width }}
                    </span>
                  </div>
                  <div class="gr-col">
                    <span class="tw-font-semibold"> Высота: </span>
                    <span @click="$copyMethod" class="copy">
                      {{ conf.configuration.windows.length }}
                    </span>
                  </div>
                  <div
                    v-for="(sash, indexSash) in conf.configuration.windows.sash"
                    :key="`${index}_sash${indexSash}`"
                    class="gr-col"
                  >
                    <span class="tw-font-semibold"
                      >Вид створки №{{ indexSash + 1 }}:
                    </span>
                    <span @click="$copyMethod" class="copy">{{
                      sash.label
                    }}</span>
                  </div>
                  <div>
                    <div class="gr-col">
                      <span class="tw-font-semibold">Внутренний цвет: </span>
                      <span
                        class="tw-rounded-full tw-w-[50px] tw-h-[50px] tw-border-gray-300 tw-border-2 tw-border-solid tw-overflow-hidden"
                      >
                        <img
                          :src="`colors/${conf.configuration.parametrs.colors.external.value}`"
                          alt=""
                        />
                      </span>
                    </div>

                    <div class="gr-col">
                      <span class="tw-font-semibold">Внешний цвет: </span>
                      <span
                        class="tw-rounded-full tw-w-[50px] tw-h-[50px] tw-border-gray-300 tw-border-2 tw-border-solid tw-overflow-hidden"
                      >
                        <img
                          :src="`colors/${conf.configuration.parametrs.colors.internal.value}`"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="tw-font-semibold tw-text-lg tw-mb-3">
                    Дополнения к окну
                  </div>
                  <div v-if="conf.configuration.parametrs" class="gr-col">
                    <div v-if="conf.configuration.parametrs?.additions">
                      <div
                        class="tw-flex tw-gap-2"
                        v-for="(addition, indexAddition) in conf.configuration
                          .parametrs.additions"
                        :key="`${index}_addition${indexAddition}`"
                      >
                        <span>
                          {{ addition.label }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="gr-col">
                    <span class="tw-font-semibold"> Подоконник: </span>
                    <span @click="$copyMethod" class="copy">
                      {{
                        conf.configuration.parametrs.windowsill ? "Да" : "Нет"
                      }}
                    </span>
                  </div>
                  <div class="gr-col">
                    <span class="tw-font-semibold"> Отксосы: </span>
                    <span @click="$copyMethod" class="copy">
                      {{ conf.configuration.parametrs.slopes ? "Да" : "Нет" }}
                    </span>
                  </div>
                  <div class="gr-col">
                    <span class="tw-font-semibold">
                      Эненргосберегающий стеклопакет:
                    </span>
                    <span @click="$copyMethod" class="copy">
                      {{
                        conf.configuration.parametrs.energysaving ? "Да" : "Нет"
                      }}
                    </span>
                  </div>

                  <div class="gr-col">
                    <span class="tw-font-semibold">
                      Мультифункциональный стеклопакет:
                    </span>
                    <span @click="$copyMethod" class="copy">
                      {{
                        conf.configuration.parametrs.multiglased ? "Да" : "Нет"
                      }}
                    </span>
                  </div>

                  <div class="gr-col">
                    <span class="tw-font-semibold">Сткеклопакет: </span>
                    <span @click="$copyMethod" class="copy">
                      {{ conf.configuration.parametrs["double_glazing"].label }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>

        <q-dialog v-model="modal">
          <q-card class="req-form">
            <q-card-section>
              <div class="req-form__title">Выберите статус заказа</div>
              <div class="tw-flex tw-flex-col tw-gap-3">
                <button class="btn-back" @click="updateStatus(3)">
                  Оплачен
                </button>
                <button class="btn-back" @click="updateStatus(4)">
                  В работе
                </button>
                <button class="btn-back" @click="updateStatus(5)">
                  Исполнен
                </button>
                <button class="btn-back" @click="updateStatus(6)">
                  Разрешена оплата
                </button>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>

        <q-dialog v-model="modalUpdateSumm">
          <q-card class="tw-max-w-[500px] tw-w-full">
            <q-card-section>
              <div class="tw-text-xl tw-font-bold tw-mb-3 l:tw-mb-6">
                Изменить сумму
              </div>
              <q-form @submit="updateSumm" ref="form">
                <div class="tw-grid tw-gap-1 l:tw-gap-3">
                  <q-input
                    outlined
                    v-model="summ"
                    type="number"
                    dense
                    placeholderlabel="Стоимость заказа"
                    lazy-rules
                    :rules="[
                      (val) => !!val || 'Поле обязательно для заполнения',
                    ]"
                  >
                    <template v-slot:append>
                      <q-icon name="currency_ruble" />
                    </template>
                  </q-input>
                </div>
                <div class="tw-flex tw-justify-center tw-mt-4">
                  <button class="btn" type="submit">Изменить сумму</button>
                </div>
              </q-form>
            </q-card-section>
          </q-card>
        </q-dialog>
      </div>
    </transition>
  </div>
  <div class="tw-flex tw-flex-col" v-else>
    <div class="tw-text-center">
      <div class="tw-text-3xl">Нет заявок</div>
      <p class="tw-text-xl">
        После отображения в каталоге мобильного приложения вы начнете получать
        заявки на просчет
      </p>
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { watch, ref, computed } from "vue";

// import colors from "/public/data/colors";
import ky from "ky";
const form = ref(null);
const summ = ref();
const api = ky.create({
  prefixUrl: "https://b2b.oknascaner.ru/api",
  timeout: 10000,
});
const windType = [
  {
    id: 1,
    value:
      '<svg width="100%" height="100%" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M18 13.5V46.5H42V13.5H18ZM40 44.5H20V15.5H40V44.5Z" fill="#DCDFE3"></path></g></svg>',
  },
  {
    id: 2,
    value:
      '<svg width="100%" height="100%" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M15.5996 13.5V46.5H45.5996V13.5H15.5996ZM17.5996 44.5V15.5H29.5996V44.5H17.5996ZM43.5996 44.5H31.5996V15.5H43.5996V44.5Z" fill="#DCDFE3"></path></g></svg>',
  },
  {
    id: 3,
    value:
      '<svg width="100%" height="100%" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M53.7002 13.5V11.5H6.7002V48.5H53.7002V13.5ZM8.7002 46.5V13.5H21.7002V46.5H8.7002ZM23.7002 46.5V13.5H36.7002V46.5H23.7002ZM38.7002 46.5V13.5H51.6002V46.5H38.7002Z" fill="#DCDFE3"></path></g></svg>',
  },
  {
    id: 4,
    value:
      '<svg width="100%" height="100%" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M30.4004 10.5C22.1109 10.5 15.4004 17.2653 15.4004 25.6224V49.5H45.4004V25.6224C45.4004 17.2653 38.6899 10.5 30.4004 10.5ZM39.8741 16.0714L30.953 25.0653V12.1714C34.4267 12.251 37.5846 13.7633 39.8741 16.0714ZM29.3741 12.1714V25.0653L20.6899 16.3102C22.9004 14.002 25.9793 12.4102 29.3741 12.1714ZM19.6635 17.5837L27.6372 25.6224H16.9793C16.9793 22.598 18.0057 19.8122 19.6635 17.5837ZM16.9793 47.9082V27.2143H24.8741V47.9082H16.9793ZM26.453 47.9082V27.2143H34.3478V47.9082H26.453ZM43.8214 47.9082H35.9267V27.2143H43.8214V47.9082ZM32.6109 25.6224L40.9004 17.2653C42.7162 19.5735 43.8214 22.4388 43.8214 25.6224H32.6109Z" fill="#DCDFE3"></path></g></svg>',
  },
];
const q = useQuasar();

const reqList = ref([]);
const modal = ref(false);
const modalUpdateSumm = ref(false);
const leave = ref(null);
const formState = ref({
  text: "",
  summ: "",
  comment: "",
  file: null,
});
const res = async () => {
  const input = document.querySelector('[name="user_id"][id="user_id"]');
  if (input && input?.value) {
    const body = new FormData();
    body.append("user_id", input.value);
    reqList.value = await api.post("lk/order_list_ready.php", { body }).json();
  }
};
const updateStatus = async (id_status) => {
  try {
    const fd = new FormData();
    fd.append("order_id", leave.value);
    fd.append("status", id_status);
    await api.post("lk/change_order_status.php", { body: fd }).json();
    reqList.value = reqList.value.map((item) => {
      const objStatus = {
        3: "Оплачен",
        4: "В работе",
        5: "Исполнен",
        6: "Разрешена оплата",
      };
      if (item.id == leave.value) {
        return {
          ...item,
          status: objStatus[id_status],
          status_id: id_status,
        };
      }
      return item;
    });
    modal.value = false;
  } catch (e) {
    console.log(e);
  }
};
const updateSumm = async (id_status) => {
  try {
    const fd = new FormData();
    fd.append("order_id", leave.value);
    fd.append("summ", summ.value);
    await api.post("lk/change_order_price.php", { body: fd }).json();
    reqList.value = reqList.value.map((item) => {
      if (item.id == leave.value) {
        return {
          ...item,
          kp_price: summ.value,
        };
      }
      return item;
    });
    modalUpdateSumm.value = false;
  } catch (e) {
    console.log(e);
  }
};
const item = computed(() => {
  if (leave.value && reqList.value?.length > 0) {
    return reqList.value.find((req) => {
      return req.id === leave.value;
    });
  }
  return null;
});
res();
</script>
<style lang="scss">
.gr-col {
  @apply tw-grid tw-gap-1;
  & .copy {
    @apply tw-cursor-pointer tw-text-gray hover:tw-text-black;
  }
}
.btn {
  background: #529bef;
  border: 1px solid #529bef;
  height: 55px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #fff;
  font-weight: 600;
  &:hover {
    background: #fff;
    color: #529bef;
    cursor: pointer;
  }
  &-back {
    background: #529bef;
    border: 1px solid #529bef;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: #fff;
    font-weight: 600;
    &:hover {
      background: #fff;
      color: #529bef;
      cursor: pointer;
    }
  }
}

.req-form {
  &__title {
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem /* 28px */;
    font-family: 600;
    margin-bottom: 16px;
  }
}
</style>

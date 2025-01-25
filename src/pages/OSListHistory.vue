<template>
  <div>
    <h2 class="tw-mb-6">Заявки</h2>
    <div class="tw-overflow-x-auto">
      <table>
        <thead>
          <tr>
            <th data-type="text-short action" @click="sort('id')">
              <span> Номер заявки </span>
              <q-icon name="import_export" />
            </th>
            <th data-type="text-short">Дата</th>
            <!-- <th data-type="text-short" @click="sort('summ')">
              <span> Сумма </span>
              <q-icon name="import_export" />
            </th> -->
            <th data-type="text-long">Статус</th>
            <th data-type="text-long"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in store.osSorted" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.date }}</td>
            <!-- <td>{{ order.summ }} руб</td> -->
            <td>
              <span>{{ order.status }}</span>
              <span class="tw-w-2.5 tw-h-2.5 tw-bg-green-700"></span>
            </td>
            <td>
              <q-btn
                size="8px"
                round
                icon="arrow_forward"
                @click="
                  $router.push({
                    name: 'os-detail',

                    params: { id: order.id },
                  })
                "
              >
              </q-btn>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useApplication } from "src/stores/application";
import { storeToRefs } from "pinia";
export default defineComponent({
  setup() {
    const store = useApplication();
    const { osList } = storeToRefs(store);
    const sort = (target: string) => {
      store.targetSort = target;
      if (store.sortOrders === "ab") store.sortOrders = "ba";
      else if (store.sortOrders === "ba") store.sortOrders = "ab";
    };
    onMounted(async () => await store.getOS(true));
    return { store, sort };
  },
});
</script>
<style lang="scss" scoped>
table {
  display: grid;
  border-collapse: collapse;
  min-width: 100%;
  /* These are just initial values which are overriden using JavaScript when a column is resized */
  grid-template-columns:
    minmax(150px, 250px)
    minmax(150px, 1fr)
    minmax(150px, 1fr)
    minmax(40px, 40px);
}

thead,
tbody,
tr {
  display: contents;
}

th,
td {
  padding: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-bottom: 1px solid theme("colors.gray-border");
}

th {
  position: sticky;
  top: 0;

  text-align: left;
  font-weight: normal;
  font-size: 1.1rem;

  position: relative;
}

th:first-child,
td:first-child {
  padding-left: 0;
}

.resize-handle {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background: black;
  opacity: 0;
  width: 3px;
  cursor: col-resize;
}

.resize-handle:hover,
  /* The following selector is needed so the handle is visible during resize even if the mouse isn't over the handle anymore */
  .header--being-resized .resize-handle {
  opacity: 0.5;
}

th:hover .resize-handle {
  opacity: 0.3;
}

tr:nth-child(even) td {
  background: #f8f6ff;
}
</style>

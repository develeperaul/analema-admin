import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { getOnlineSceneList } from "src/api/online-scene";
import { getOSList } from "src/api/os";
export const useApplication = defineStore("application", () => {
  const sortOrders = ref<"ab" | "ba">("ba");
  const targetSort = ref("id");

  const onlineSceneList = ref([]);
  const request = {};
  const sceneSorted = computed(() => {
    if (sortOrders.value === "ab")
      return onlineSceneList.value.sort(
        (a, b) => a[targetSort.value] - b[targetSort.value]
      );
    if (sortOrders.value === "ba")
      return onlineSceneList.value.sort(
        (a, b) => b[targetSort.value] - a[targetSort.value]
      );
  });

  const getOnlineScene = async (history = false) => {
    onlineSceneList.value = await getOnlineSceneList(history);
  };

  const osList = ref([]);
  const osDetail = {};
  const osSorted = computed(() => {
    if (sortOrders.value === "ab")
      return osList.value.sort(
        (a, b) => a[targetSort.value] - b[targetSort.value]
      );
    if (sortOrders.value === "ba")
      return osList.value.sort(
        (a, b) => b[targetSort.value] - a[targetSort.value]
      );
  });

  const getOS = async (history = false) => {
    osList.value = await getOSList(history);
  };

  return {
    onlineSceneList,
    getOnlineScene,
    request,
    sceneSorted,
    osList,
    getOS,
    osSorted,
    osDetail,
    sortOrders,
    targetSort,
  };
});

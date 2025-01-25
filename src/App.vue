<template>
  <router-view />
</template>

<script setup lang="ts">
import { getToken, setInfoPushData } from "./api";
import { getOnlineSceneList } from "./api/online-scene";
import { onMounted } from "vue";

onMounted(async () => {
  // await getToken("08ffdfecb57ea5b41629be494e5e4a82");
  // await getOnlineSceneList();
  // await setInfoPushData("55", "title", "body");
});
</script>

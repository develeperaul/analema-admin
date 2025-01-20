<template>
  <router-view />
</template>

<script setup lang="ts">
import { getOnlineSceneList } from "./api/online-scene";
import { onMounted } from "vue";

onMounted(async () => {
  await getOnlineSceneList();
});
</script>

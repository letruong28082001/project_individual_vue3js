<template>
  <div>Header</div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const sidebarIsVisible = ref(false);
const toggleSidebar = () => {
  sidebarIsVisible.value = !sidebarIsVisible.value;
  console.log(sidebarIsVisible.value);
};
</script>
<style lang="scss" scoped>
div {
  position: fixed;
  width: 100%;
  height: 56px;
  background-color: white;
  top: 0;
  z-index: 10;
}
</style>

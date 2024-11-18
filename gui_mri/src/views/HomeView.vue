<script setup>
import dataMesin from "../components/dataMesin.vue";
import home from "../components/home.vue";
import bypass from "@/components/bypass.vue";
</script>

<template>
  <div class="flex flex-col md:flex-row m-2 items-center">
    <dataMesin></dataMesin>
    <home></home>
    <bypass></bypass>
  </div>
</template>
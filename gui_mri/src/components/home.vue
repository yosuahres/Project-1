<script setup>
</script>

<template>
  <div class="flex flex-col md:flex-row m-2 items-center">
    <h1>Home View</h1>
    <button @click="$router.push('/data-mesin')">Go to Data Mesin</button>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
}
</style>
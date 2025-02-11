<template>
  <div>
    <NavBar />
    <img src="@/assets/flyer.png" class="flyer" alt="Fair Flyer" />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<style scoped>
.flyer {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 90vh;
}
</style>
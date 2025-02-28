<template>
  <div>
    <NavBar />
    <TtsButton id="tts-button" class="tts-button"/>
    <div class="map">
      <img src = '@/assets/map.png' class="flyer" alt="Fair Flyer" @click="showModal = true"/>
    <div v-if="showModal" class="modal" @click.self="showModal = false">
      <img src="@/assets/map.png" class="modal-content" alt="Fair Flyer"/>
    </div>
    </div>
  </div>
  <AppFooter />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavBar from '@/components/NavBar.vue'
import AppFooter from '@/components/AppFooter.vue'
import TtsButton from '@/components/Ttsbutton.vue'

const showModal = ref(false)

</script>

<style scoped>
.flyer {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 85vh;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
}

.modal-content {
  max-width: 90%;
  max-height: 90%;
}
</style>